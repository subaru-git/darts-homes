import { useTranslations } from 'next-intl';

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const GetNavItem = () => {
  const t = useTranslations('Components.navigation');
  return [
    {
      label: 'Games',
      href: '/games',
      children: [
        {
          label: "Eagle's Eye",
          subLabel: t('eagleseye'),
          href: '/eagleseye',
        },
        {
          label: 'Cricket Mark-Up',
          subLabel: t('cricketmarkup'),
          href: '/cricketmarkup',
        },
        {
          label: 'Double Trouble',
          subLabel: t('doubletrouble'),
          href: '/doubletrouble',
        },
        {
          label: 'Sweet 16',
          subLabel: t('sweet16'),
          href: '/sweet16',
        },
        {
          label: 'Tops and Tens',
          subLabel: t('topsandtens'),
          href: '/topsandtens',
        },
        {
          label: 'Two-Dart Combinations',
          subLabel: t('twodartcombinations'),
          href: '/twodartcombinations',
        },
        {
          label: 'Around The Compass',
          subLabel: t('aroundthecompass'),
          href: '/aroundthecompass',
        },
        {
          label: 'Tons Up',
          subLabel: t('tonsup'),
          href: '/tonsup',
        },
        {
          label: 'Route 64',
          subLabel: t('route64'),
          href: '/route64',
        },
        {
          label: 'Eighty Threw',
          subLabel: t('eightythrew'),
          href: '/eightythrew',
        },
        {
          label: 'Shanghai Nights',
          subLabel: t('shanghainights'),
          href: '/shanghainights',
        },
        {
          label: 'Switch Hitter',
          subLabel: t('switchhitter'),
          href: '/switchhitter',
        },
        {
          label: 'Bully Bully',
          subLabel: t('bullybully'),
          href: '/bullybully',
        },
        {
          label: 'Treble For Show',
          subLabel: t('treblesforshow'),
          href: '/treblesforshow',
        },
        {
          label: 'Arrange',
          subLabel: t('arrange'),
          href: '/arrange',
        },
        {
          label: 'Count Up',
          subLabel: t('countup'),
          href: '/countup',
        },
      ],
    },
    {
      label: 'Tools',
      children: [
        {
          label: 'Arrange Record',
          subLabel: t('arrangerecord'),
          href: '/arrangerecord',
        },
      ],
    },
    {
      label: 'Respect',
      href: '/respect',
    },
    {
      label: 'History',
      href: '/history',
    },
  ];
};
