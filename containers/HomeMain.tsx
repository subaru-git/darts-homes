import React, { FC } from "react";
import Link from "next/link";

const HomeMain: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/n01">501</Link>
      <br />
      <Link href="/eagleseye">Eagle&apos;s Eye</Link>
      <br />
      <Link href="/cricketnumbercount">Cricket Number Count</Link>
    </div>
  );
};

export default HomeMain;
