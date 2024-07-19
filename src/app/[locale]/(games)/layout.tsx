import Providers from '@/contexts/Providers';

const LocaleLayout = async ({ children }: { children: React.ReactNode }) => {
  return <Providers>{children}</Providers>;
};

export default LocaleLayout;
