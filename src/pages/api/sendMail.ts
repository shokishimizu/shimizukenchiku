import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

// 簡易メールアドレス形式チェック
const isValidEmail = (email: unknown): email is string =>
  typeof email === "string" &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const body = req.body ?? {};
  const { name, email, tel, message } = body;

  if (!isValidEmail(email)) {
    console.error("Invalid email:", email);
    return res.status(400).json({
      error: "メールアドレスの形式が正しくありません。",
    });
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const mailTo = process.env.MAIL_TO;
  const mailFrom = process.env.MAIL_FROM;

  if (!apiKey || !mailTo || !mailFrom) {
    console.error("Missing env: SENDGRID_API_KEY");
    return res.status(500).json({
      error: "メール送信の設定が完了していません。",
    });
  }

  sgMail.setApiKey(apiKey);

  const msgToManager = {
    to: mailTo,
    from: mailFrom,
    replyTo: email,
    subject: "ホームページからの問い合わせ",
    text:
      (name ?? "") +
      "様からお問合せがありました。\n" +
      "アドレス：" +
      email +
      "\n" +
      "電話番号：" +
      (tel ?? "") +
      "\n" +
      "メッセージ：" +
      (message ?? "") +
      "\n",
  };

  const msgToUser = {
    to: email,
    from: mailFrom,
    replyTo: mailTo,
    subject: "お問合せありがとうございました。",
    text: "お問合せを受け付けました。" + (message ?? ""),
    html: `
      <p>${(name ?? "").toString().replace(/</g, "&lt;")}様</p>
      <p>お問合せを受け付けました。</p><br/>

      <p>【問い合わせ内容】</p>
      <p>${(message ?? "").toString().replace(/</g, "&lt;")}</p>
    `,
  };

  try {
    await sgMail.send(msgToManager);
  } catch (error: unknown) {
    console.error("msgToManager failed:", error);
    return res.status(500).json({
      error: "メール送信に失敗しました。（管理者宛）",
    });
  }

  try {
    await sgMail.send(msgToUser);
  } catch (error: unknown) {
    console.error("msgToUser failed:", error);
    // 管理者宛は届いているので 200 を返すが、確認メール失敗を通知
    return res.status(200).json({
      message: "送信完了",
      warning: "確認メールの送信に失敗しました。迷惑メールフォルダをご確認ください。",
    });
  }

  return res.status(200).json({ message: "送信完了" });
}
