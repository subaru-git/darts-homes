import React, { FC, ReactNode } from 'react';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import NavigationBar from '@/components/NavigationBar';

const MainTemplate: FC<{
  label: string;
  isLoading?: boolean;
  children?: ReactNode | ReactNode[];
}> = ({ label, isLoading = false, children }) => {
  return (
    <div data-cy={label}>
      <>
        <NavigationBar />
        {isLoading ? <Loading /> : children}
        <Footer />
      </>
    </div>
  );
};

export default MainTemplate;
