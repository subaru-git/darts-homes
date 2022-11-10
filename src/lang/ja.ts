const text = {
  home: {
    description: [
      'このサイトは自宅でダーツ練習をするときのゲームを作っていこうという目的で作成されています。',
      'ゲームはYouTubeなどを参考にして作成しています。',
      'また、このサイトは基本的にクライアント側で処理されているため、端末間での結果の同期などはできません。',
      '結果のインポート・エクスポートで対応するか、TwitterなどSNSへの投稿で管理するかなどしてください。',
      '(こんなわけわからんサイトにログインとか嫌でしょ？)',
    ],
    respect: [
      'このサイトはYouTubeの動画などのあらゆるダーツコンテンツに感謝し、その全てを尊重します。',
    ],
  },
  seo: {
    default: {
      title: 'Darts Homes - ただ投げるだけの家ダーツじゃつまらなくない？',
      description: '家ダーツがただ投げるだけになっていませんか？練習メニューありますよ',
    },
    eagleseye: {
      title: "Eagle's Eye",
      description: 'BULLのみでカウントアップするゲームです。ブルはセパレートです。',
    },
    cricketmarkup: {
      title: 'Cricket Mark-Up',
      description:
        '「菊池山口」さんの紹介したダーツ練習ゲームです。クリケットナンバーを狙っていきます。',
    },
    doubletrouble: {
      title: 'Double Trouble',
      description: 'ダブル練習ゲームです。1から20までのダブルを狙っていきます。',
    },
    sweet16: {
      title: 'Sweet 16',
      description: '32ダブルアウト練習ゲームです。32はメジャーなアレンジなのでぜひ練習しましょう。',
    },
    topsandtens: {
      title: 'Tops and Tens',
      description: '40ダブルアウト練習ゲームです。40はメジャーなアレンジなのでぜひ練習しましょう。',
    },
    twodartcombinations: {
      title: 'Two-Dart Combinations',
      description:
        '41から60までをダブルアウトする練習ゲームです。全て2ダーツでアウトするのが目標です。',
    },
    aroundthecompass: {
      title: 'Around The Compass',
      description: '24ダブルアウト練習ゲームです。24はメジャーなアレンジなのでぜひ練習しましょう。',
    },
    tonsup: {
      title: 'Tons Up',
      description: '100ダブルアウト練習ゲームです。2本でアウトできたら素晴らしい。',
    },
    route64: {
      title: 'Route 64',
      description: '64ダブルアウト練習ゲームです。2本でアウトできたら素晴らしい。',
    },
    eightythrew: {
      title: 'Eighty Threw',
      description: '82ダブルアウト練習ゲームです。2本でアウトできたら素晴らしい。',
    },
    shanghainights: {
      title: 'Shanghai Night',
      description: '120ダブルアウト練習ゲームです。20ダブル3本でアウトできたらボーナス。',
    },
    switchhitter: {
      title: 'Switch Hitter',
      description: '19練習ゲームです。19トリプルにガンガン入れていこう。',
    },
    bullybully: {
      title: 'Bully Bully',
      description: 'BULL練習ゲームです。やっぱりBULLでしょう。',
    },
    treblesforshow: {
      title: 'Treble For Show',
      description: '20練習ゲームです。セパレートやクリケットだと20は基本だよね。',
    },
    respect: {
      title: 'Respect',
      description: 'リスペクトするダーツコンテンツを紹介します。一緒に応援していきましょう。',
    },
    history: {
      title: 'History',
      description: 'あなたの成長を確認できます。ブラウザ間の同期はできません。',
    },
  },
  navigation: {
    n01: '有名なダーツゲーム [WIP]',
    eagleseye: 'BULLだけカウントアップ',
    cricketmarkup: '菊地山口によるダーツ練習ゲーム',
    doubletrouble: 'ダブル練習ゲーム',
    sweet16: '32ダブルアウト練習ゲーム',
    topsandtens: '40ダブルアウト練習ゲーム',
    twodartcombinations: '2ダーツダブルアウト練習ゲーム',
    aroundthecompass: '24ダブルアウト練習ゲーム',
    tonsup: '100ダブルアウト練習ゲーム',
    route64: '64ダブルアウト練習ゲーム',
    eightythrew: '82ダブルアウト練習ゲーム',
    shanghainights: '120ダブルアウト練習ゲーム',
    switchhitter: '19練習ゲーム',
    bullybully: 'BULL練習ゲーム',
    treblesforshow: '20練習ゲーム',
  },
  eagleseye: {
    description: ['BULLだけが加点されるカウントアップです。', 'BULLはセパレートです。'],
  },
  cricketmarkup: {
    description: [
      'このゲームは菊地山口によって紹介されたゲームです。',
      'ゲームのルールは以下の通りです。',
    ],
    rulestep: [
      '目標の回数を設定します（推奨10回）',
      '20から15、BULLまでのクリケットナンバーを目標の回数狙っていきます。',
    ],
    rulemore: '詳しくは動画をご覧ください。',
  },
  doubletrouble: {
    description: [
      '1のダブルに3本、2のダブルに3本と、ダブルトップまで順番にダーツを投げていきます。',
      'ダブルに命中するごとに5ポイント獲得できます。3ダーツごとに15ポイント、全体で300ポイント獲得できます。',
    ],
  },
  sweet16: {
    description: [
      '各ラウンドで32点を獲得する必要があり、3回のダーツでどの組み合わせでもダブルでフィニッシュしなければなりません。',
      '32を出すたびに5点、3ダーツごとに15点、合計300点を獲得します。',
    ],
  },
  topsandtens: {
    description: [
      '各ラウンドで40点をダブルトップ、ダブル10またはダブル5でフィニッシュする必要があります。',
      '40点をフィニッシュするごとに5点、3ダーツごとに15点、合計300点を獲得します。',
    ],
  },
  twodartcombinations: {
    description: [
      '41から60まで、各ラウンドでダブルフィニッシュをする必要があります。',
      'ダブルフィニッシュ15点、合計300点を獲得します。',
    ],
  },
  aroundthecompass: {
    description: [
      '各ラウンドで24点をダブルアウトする必要があります。',
      '24点をフィニッシュするごとに5点、3ダーツごとに15点、合計300点を獲得します。',
    ],
  },
  tonsup: {
    description: [
      '各ラウンドで100点をダブルアウトする必要があります。',
      '100点をフィニッシュするごとに10点、2ダーツでフィニッシュするとボーナス10点、合計400点を獲得します。',
    ],
  },
  route64: {
    description: [
      '各ラウンドで64点をダブルアウトする必要があります。',
      '64点をフィニッシュするごとに10点、2ダーツでフィニッシュするとボーナス10点、合計400点を獲得します。',
    ],
  },
  eightythrew: {
    description: [
      '各ラウンドで82点をダブルアウトする必要があります。',
      '82点をフィニッシュするごとに10点、2ダーツでフィニッシュするとボーナス10点、合計400点を獲得します。',
    ],
  },
  shanghainights: {
    description: [
      '各ラウンドで120点をダブルアウトする必要があります。',
      '120点をフィニッシュするごとに10点、ダブルトップ3回でフィニッシュするとボーナス10点、合計400点を獲得します。',
    ],
  },
  switchhitter: {
    description: [
      '各ラウンドで19を狙います。',
      'トリプルが5点、それ以外が2点で、19を外すと0点です。171点を取るとボーナス10点です。',
      'ラウンドごとに25点、合計500点を獲得します。',
    ],
  },
  bullybully: {
    description: [
      '各ラウンドでBULLを狙います。',
      'InnerBULLが5点、OuterBULLが2点で、BULLを外すと0点です。BULLに3回入るとボーナス10点です。',
      'ラウンドごとに25点、合計500点を獲得します。',
    ],
  },
  treblesforshow: {
    description: [
      '各ラウンドで20を狙います。',
      '20トリプルが5点、それ以外が2点で、20を外すと0点です。180点を取るとボーナス15点です。',
      'ラウンドごとに30点、合計600点を獲得します。',
    ],
  },
  import: {
    errortitle: '無効なファイルです。',
    errordescription: 'ファイル形式が無効です。ファイルを確認してください。',
    description: '上書きか追加かを選択してください。上書きを選択すると、元に戻せません。',
  },
  warning: {
    newgame: '新しいゲームを始めると、現在のスコアは破棄されます。',
    deletehistory: '履歴を削除すると、元に戻せません。',
  },
  common: {
    add: '追加',
    overwrite: '上書き',
  },
};

export default text;
