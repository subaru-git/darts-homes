/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Containers/Respect/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

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
