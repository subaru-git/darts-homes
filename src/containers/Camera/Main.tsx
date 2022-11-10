import React, { FC } from 'react';
import dynamic from 'next/dynamic';
const Camera = dynamic(import('@/components/CameraView'), { ssr: false });

const Main: FC = () => {
  return (
    <div>
      <Camera />
    </div>
  );
};

export default Main;
