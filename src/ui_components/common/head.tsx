import Head from "next/head";

function CommonHead({ title }: { title: string }) {
  return (
    <Head>
        <title>清水建築 | {title}</title>
        <meta name="description" content="清水建築のホームページです。私たちは埼玉県さいたま市内で新築やリフォームを請け負ってます。施工事例など掲載しておりますのでぜひご確認ください。" />
        <meta property="og:title" content="My page title" key="title" />
        <link rel="shortcut icon" href="/logo/logo.png" />
        <meta name="keywords" content="株式会社清水建築,清水建築,さいたま市,岩槻,注文住宅,リフォーム,Zeh住宅,zehビルダー,お問い合わせ" />
    </Head>
  );
}

export default CommonHead;
