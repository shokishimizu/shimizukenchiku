import { NextApiRequest, NextApiResponse } from "next";
import nodeMailer from "nodemailer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodeMailer.createTransport({
      host: "shimizukenchiku.sakura.ne.jp",         // メールサーバー。ここではHotmail/Outlookを使った例
      port: 587,
      secure: false,
      auth: {
          user: "ryota_shimizukenchiku@shimizukenchiku.info", // メールアドレス
          pass: process.env.MAIL_SERVER_PASS // パスワード
      }
  });

  const msgToManager = {
    to: 'ryota_shimizukenchiku@shimizukenchiku.info',
    from: 'ryota_shimizukenchiku@shimizukenchiku.info',
    subject: 'ホームページからの問い合わせ',
    text: req.body.name +'様からお問合せがありました。\n' +
    'アドレス：' + req.body.email + '\n' +
    '電話番号：' + req.body.tel + '\n' +
    'メッセージ：' + req.body.message + '\n',
  };

  const msgToUser = {
    to: req.body.email,
    from: 'ryota_shimizukenchiku@shimizukenchiku.info',
    subject: 'お問合せありがとうございました。',
    text: 'お問合せを受け付けました。' + req.body.message,
    html: `
      <p>${req.body.name}様</p>
      <p>お問合せを受け付けました。</p><br/>

      <p>【問い合わせ内容】</p>
      <p>${req.body.message}</p>
    `,
  };

  (async () => {
    try {
      await transporter.sendMail(msgToManager)
      await transporter.sendMail(msgToUser)
      res.status(200).json(msgToUser);
    } catch (error: any) {
      console.error(error);
      res.status(500).json(error);
    }
  })();
}