import React, { FC } from 'react';
import MainTemplate from '@/templates/MainTemplate';

const Main: FC = () => {
  return (
    <MainTemplate label='privacypolicy-main'>
      <div className='w-full'>
        <div className='m-auto flex max-w-xl flex-col items-center gap-2 p-4'>
          <h1 className='text-lg font-bold md:text-xl'>プライバシーポリシー</h1>
          <h2 className='font-bold md:text-lg'>1. アクセス解析ツールについて</h2>
          <div className='text-xs md:text-base'>
            <p>
              当サイトでは、Google によるアクセス解析ツール「Google
              アナリティクス」を利用しています。
            </p>
            <p>
              この Google アナリティクスはアクセス情報の収集のために Cookie
              を使用しています。このアクセス情報は匿名で収集されており、個人を特定するものではありません。
            </p>
            <p>
              Google アナリティクスの Cookie は、26 ヶ月間保持されます。この機能は Cookie
              を無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            </p>
            <p>
              Google アナリティクスの利用規約は
              <a
                className='font-medium text-blue-600 underline hover:no-underline dark:text-blue-500'
                href='https://www.google.com/analytics/terms/'
                target='_blank'
                rel='noopener noreferrer'
              >
                こちら
              </a>
              から確認できます。また、「ユーザーが Google パートナーのサイトやアプリを使用する際の
              Google によるデータ使用」に関して確認したい場合は、
              <a
                className='font-medium text-blue-600 underline hover:no-underline dark:text-blue-500'
                href='https://policies.google.com/technologies/partner-sites?hl=ja'
                target='_blank'
                rel='noopener noreferrer'
              >
                こちら
              </a>
              をご覧ください。
            </p>
          </div>
          <h2 className='font-bold md:text-lg'>2. 第三者配信の広告サービスについて</h2>
          <div className='text-xs md:text-base'>
            <p>
              当サイトは、第三者配信の広告サービス「Google
              Adsense（グーグルアドセンス）」を利用しています。
            </p>
            <p>
              Google
              などの第三者広告配信事業者は、訪問者の興味に応じた広告を表示するために、Cookie（当サイトの訪問者が当サイトや他のサイトにアクセスした際の情報など）を使用することがあります。
            </p>
            <p>
              訪問者は、広告設定で訪問者に合わせた広告（以下、「パーソナライズド広告」とします。）を
              <a
                className='font-medium text-blue-600 underline hover:no-underline dark:text-blue-500'
                href='https://www.google.com/settings/ads'
                target='_blank'
                rel='noopener noreferrer'
              >
                こちら
              </a>
              で無効にすることが出来ます。また、
              <a
                className='font-medium text-blue-600 underline hover:no-underline dark:text-blue-500'
                href='http://www.aboutads.info/choices/'
                target='_blank'
                rel='noopener noreferrer'
              >
                www.aboutads.info
              </a>
              にアクセスすれば、パーソナライズド広告に使われる第三者配信事業者の Cookie
              を無効にできます。
            </p>
            <p>
              第三者配信による広告掲載を無効にしていない場合は、第三者配信事業者や広告ネットワークの配信する広告がサイトに掲載されることがあります。
            </p>
            <p>
              Google によって広告の第三者配信が認められている広告配信事業者の詳細は、
              <a
                className='font-medium text-blue-600 underline hover:no-underline dark:text-blue-500'
                href='https://support.google.com/admanager/answer/94149'
                target='_blank'
                rel='noopener noreferrer'
              >
                こちら
              </a>
              で確認できます。
            </p>
          </div>
          <h2 className='font-bold md:text-lg'>3. 認証情報</h2>
          <div className='text-xs md:text-base'>
            <p>
              当サイトは Google Cloud Platform の提供する Firebase Authentication
              がサポートする認証方式を用いて、ユーザーの要求に基づき、各種外部サービスを連携させることがあります。このとき、当社は認証時に各サービスプロバイダーが提示する認証情報を取得します。この場合、ユーザーは、本ポリシーに加え、Google
              が定めるプライバシーポリシーにも同意いただく必要があります。 Google
              のプライバシーポリシーについては、
              <a
                className='font-medium text-blue-600 underline hover:no-underline dark:text-blue-500'
                href='https://policies.google.com/privacy?hl=ja'
                target='_blank'
                rel='noopener noreferrer'
              >
                こちら
              </a>
              をご確認ください。
            </p>
            <p className='mt-8 text-center'>以上</p>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Main;
