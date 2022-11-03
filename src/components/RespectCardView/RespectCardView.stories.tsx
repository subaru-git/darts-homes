/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RespectCardView from './RespectCardView';

export default {
  title: 'Components/RespectCardView',
  component: RespectCardView,
} as ComponentMeta<typeof RespectCardView>;

const Template: ComponentStory<typeof RespectCardView> = (args) => <RespectCardView {...args} />;
export const Default = Template.bind({});
Default.args = {
  data: {
    companies: [
      {
        title: 'ダーツライブ 日本 | DARTSLIVE',
        image: 'https://www.dartslive.com/wp-content/themes/dartslive/images/apple-touch-icon.png',
        description:
          'ネットワークとダーツライブカードを使ったダーツ マシンDARTSLIVE(ダーツライブ)のオフィシャルサイト。DARTSLIVE設置店舗(ダーツバー)検索、ダーツライブ2やイベント情報、ダーツライブランキング等。',
        url: 'https://www.dartslive.com/jp/',
        type: 'website',
      },
      {
        title: 'フェニックスダーツ｜ PHOENIXDARTS',
        image: null,
        description:
          'ダーツのことならPHOENIXDARTS。フェニックスのダーツマシンでプレイしたダーツのレーティング（成績）をリアルタイムでチェックして、ダーツの上達につなげましょう。ダーツのルールやゲームの種類を知りたい初心者の方にもやさしいサイトです。',
        url: 'https://vs.phoenixdarts.com/jp/',
        type: null,
      },
      {
        title: '\n    Official GRANBOARD | Join the Largest Online Dart Community – GRAN DARTS\n  ',
        image:
          'https://cdn.shopify.com/s/files/1/0373/0967/7704/files/og_granboard_cb1300b2-162f-4fcd-a731-aaf738fcb927.png?v=1617944472',
        description:
          'GRAN DARTS - Manufacturer of all GRANBOARD products. Developer of the GranBoard App. Click here to view all items グランダーツの公式サイト。グランボードダッシュ, グランボード3S, グランボード132。ニュース、販売、サポートを提供します。ソフトチップ電子ダーツボード。',
        url: 'https://gran-darts.com/',
        type: 'website',
      },
    ],
    professionals: [
      {
        title: 'SOFT DARTS PROFESSIONAL TOUR JAPAN OFFICIAL WEBSITE',
        image: null,
        description:
          '株式会社ダーツライブが特別協賛する「SOFT DARTS PROFESSIONAL TOUR JAPAN」公式サイト。本大会はプロ登録選手が参加できる年間を通じた報酬総額1億円のダーツトーナメントです。',
        url: 'https://japanprodarts.jp/',
        type: null,
      },
      {
        title: 'PERFECT ソフトダーツプロトーナメント',
        image: 'https://www.prodarts.jp/wp-content/uploads/2021/01/PERFECT.jpg',
        description:
          'ソフトダーツプロトーナメント「PERFECT」公式サイト。2007年に設立した、日本初のプロソフトダーツ団体です。',
        url: 'https://www.prodarts.jp/',
        type: 'website',
      },
    ],
    youtube: [
      {
        title: 'DARTSLIVE.TV - YouTube',
        image:
          'https://yt3.ggpht.com/v05gZdOW7zULbBUXwQAeSfaJWINtiHufYmpILgyc3WMb4TkbvihiYNDdOZyH7BvmvD9anPKRPAs=s900-c-k-c0x00ffffff-no-rj',
        description:
          '世界のダーツファンを魅了するハイレベルな試合を公開中!チャンネル登録はコチラ!　https://bit.ly/2XKqSJUFascinating dart fans with high level matches',
        url: 'https://www.youtube.com/channel/UCSlNk64ZI3pvzDdpJeMst-g',
        type: 'profile',
      },
      {
        title: 'japanprodarts - YouTube',
        image:
          'https://yt3.ggpht.com/ytc/AMLnZu9_TUZjJpZ2dWq1ho3kQugdktmjw3DKT73zJsX3=s900-c-k-c0x00ffffff-no-rj',
        description:
          '株式会社ダーツライブが特別協賛するソフトダーツのプロツアー「SOFT DARTS PROFESSIONAL TOUR JAPAN」公式YouTubeチャンネル。公式サイト http://japanprodarts.jp/',
        url: 'https://www.youtube.com/channel/UCofMemYvpOxJhjynaUnBLGQ',
        type: 'profile',
      },
      {
        title: 'PERFECTdartsmovie - YouTube',
        image:
          'https://yt3.ggpht.com/ytc/AMLnZu8NVqgvK1nDG0OwLPcG7aCQdIMEh_Cd-4LxzoPi=s900-c-k-c0x00ffffff-no-rj',
        description: 'ソフトダーツ プロトーナメント PERFECTの公式YouTubeチャンネルです。',
        url: 'https://www.youtube.com/channel/UCp8_nPCUEwi4w_OoDeGBqRg',
        type: 'profile',
      },
      {
        title: '菊地山口の動画チャンネル - YouTube',
        image:
          'https://yt3.ggpht.com/ytc/AMLnZu8LPbI57jbGqWxQ5pY2lV982Ju6Y8LC4omVpRE4=s900-c-k-c0x00ffffff-no-rj',
        description:
          '菊地山口と申します菊地山口のサブチャンネルhttps://www.youtube.com/channel/UCR4VLOEv_CuxO9MztlDw3jQ山口…世界エアダーツ王者（本当）ダーツもちゃんと投げます！菊地…Rt.6で安定二人ともフリーターで自由気ままなダラダラした生活を送ることをモットーに時給で働き好...',
        url: 'https://www.youtube.com/channel/UC-pKCUm596FPgUDAoKH1I6g',
        type: 'profile',
      },
      {
        title: 'MOYA / モヤ - YouTube',
        image:
          'https://yt3.ggpht.com/ytc/AMLnZu-MWVBX3j74n_5hqI2NBabOtmxg9qTxBZEUOUax=s900-c-k-c0x00ffffff-no-rj',
        description:
          '楽しいことが一番！・お仕事のお話などありましたら、下記お問い合わせ先までご連絡ください( ´ ▽ ` )ﾉ',
        url: 'https://www.youtube.com/channel/UCABXnrPW5hLwTAILnGaZk2g',
        type: 'profile',
      },
      {
        title: 'かまへん - YouTube',
        image:
          'https://yt3.ggpht.com/ytc/AMLnZu-nctwGLsp78wfD1pFSqT3byFv0uk9gqMzfra2W=s900-c-k-c0x00ffffff-no-rj',
        description:
          'プロダーツプレイヤーとして活動しながらYouTube投稿をさせていただいております。毎週金曜日20時投稿してます！！皆様に面白いこと楽しいことやいい情報お届け出来たらと思ってます(*´∀｀*)少しでもいいなって思ってくださった方がいれば是非チャンネル登録と高評価コメントなどよろしくお願いします！僕のモチベーション...',
        url: 'https://www.youtube.com/channel/UCbIfXNTdwEPXtjmpO_r9yWw',
        type: 'profile',
      },
      {
        title: 'SeigoAsadaせーちゃんねる - YouTube',
        image:
          'https://yt3.ggpht.com/ytc/AMLnZu9aqfjcCjbCS_OW_r1Wnf70PqcrAAk2kZRhA_KX=s900-c-k-c0x00ffffff-no-rj',
        description:
          'ダーツの楽しみ方無限大ダーツプロ浅田斉吾国内ダーツプロトーナメントPERFECTで6年連続日本一The Ninjaのニックネームで、アジア、ヨーロッパなどでも活躍プロダーツプレイヤー浅田斉吾がダーツ動画だけでなく、趣味のバイクやゲーム、また色々なチャレンジしたりするチャンネルです！好きな事させてもらってるゆる〜い...',
        url: 'https://www.youtube.com/channel/UCgvo-I4YXUOXbpj3-lWgu4g',
        type: 'profile',
      },
      {
        title: 'Pump Itチャンネル - YouTube',
        image:
          'https://yt3.ggpht.com/X_wTLm3H7YRPQjpjS2ju-ogG-2i_TlnxphtvH8lF8qlTKiijq2cavnzduqPkO0N8MGJocJt-KA=s900-c-k-c0x00ffffff-no-rj',
        description:
          'パンプイットチャンネルのひでひとですm(__)m地元函館でプロダーツプレイヤーが、ダーツはもちろん、釣り、DIY、そのた色んな面白い事に、チャレンジしていくチャンネルです。時に真面目に、時に悪ふざけそんなチャンネルです。調査依頼やチャレンジ依頼も受け付けています(°▽°)チャンネル登録よろしくお願いします。Twi...',
        url: 'https://www.youtube.com/channel/UCTVpVDFscpobHUaN4Lpoq9Q',
        type: 'profile',
      },
    ],
  },
};
