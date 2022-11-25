import useLocale from '@/hooks/locale';

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const GetNavItem = () => {
  const { t } = useLocale();
  return [
    {
      label: 'Games',
      href: '/games',
      children: [
        {
          label: "Eagle's Eye",
          subLabel: t.navigation.eagleseye,
          href: '/eagleseye',
        },
        {
          label: 'Cricket Mark-Up',
          subLabel: t.navigation.cricketmarkup,
          href: '/cricketmarkup',
        },
        {
          label: 'Double Trouble',
          subLabel: t.navigation.doubletrouble,
          href: '/doubletrouble',
        },
        {
          label: 'Sweet 16',
          subLabel: t.navigation.sweet16,
          href: '/sweet16',
        },
        {
          label: 'Tops and Tens',
          subLabel: t.navigation.topsandtens,
          href: '/topsandtens',
        },
        {
          label: 'Two-Dart Combinations',
          subLabel: t.navigation.twodartcombinations,
          href: '/twodartcombinations',
        },
        {
          label: 'Around The Compass',
          subLabel: t.navigation.aroundthecompass,
          href: '/aroundthecompass',
        },
        {
          label: 'Tons Up',
          subLabel: t.navigation.tonsup,
          href: '/tonsup',
        },
        {
          label: 'Route 64',
          subLabel: t.navigation.route64,
          href: '/route64',
        },
        {
          label: 'Eighty Threw',
          subLabel: t.navigation.eightythrew,
          href: '/eightythrew',
        },
        {
          label: 'Shanghai Nights',
          subLabel: t.navigation.shanghainights,
          href: '/shanghainights',
        },
        {
          label: 'Switch Hitter',
          subLabel: t.navigation.switchhitter,
          href: '/switchhitter',
        },
        {
          label: 'Bully Bully',
          subLabel: t.navigation.bullybully,
          href: '/bullybully',
        },
        {
          label: 'Treble For Show',
          subLabel: t.navigation.treblesforshow,
          href: '/treblesforshow',
        },
        {
          label: 'Arrange',
          subLabel: t.navigation.arrange,
          href: '/arrange',
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
