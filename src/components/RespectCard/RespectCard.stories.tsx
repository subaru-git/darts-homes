/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RespectCard from './RespectCard';

export default {
  title: 'Components/RespectCard',
  component: RespectCard,
} as ComponentMeta<typeof RespectCard>;

const Template: ComponentStory<typeof RespectCard> = (args) => <RespectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    title: 'ダーツライブ 日本 | DARTSLIVE',
    image: 'https://www.dartslive.com/wp-content/themes/dartslive/images/apple-touch-icon.png',
    description:
      'ネットワークとダーツライブカードを使ったダーツ マシンDARTSLIVE(ダーツライブ)のオフィシャルサイト。DARTSLIVE設置店舗(ダーツバー)検索、ダーツライブ2やイベント情報、ダーツライブランキング等。',
    url: 'https://www.dartslive.com/jp/',
    type: 'website',
  },
};
