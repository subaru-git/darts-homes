import React, { FC, ReactNode } from 'react';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import NavigationBar from '@/components/NavigationBar';

type MainTemplateProps = {
  label: string;
  isLoading?: boolean;
  children?: ReactNode | ReactNode[];
};

const MainTemplate: FC<MainTemplateProps> = ({ label, isLoading = false, children }) => {
  return (
    <div data-cy={label}>
      <NavigationBar />
      {isLoading ? <Loading /> : children}
      <Footer />
    </div>
  );
};

export default MainTemplate;
