import React, { FC } from "react";
import { css } from "@emotion/react";

type CricketMarkProps = {
  count: number;
};

const CricketMark: FC<CricketMarkProps> = ({ count }) => {
  return (
    <>
      {count === 3 ? (
        <div css={threeMarkStyles} />
      ) : count === 2 ? (
        <div css={twoMarkStyles} />
      ) : count === 1 ? (
        <div css={oneMarkStyles} />
      ) : null}
    </>
  );
};
const oneMarkStyles = css({
  display: "inline-block",
  position: "relative",
  width: "32px",
  height: "32px",
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "5px",
    height: "44px",
    background: "black",
    borderRadius: "2.5px",
    transform: "translate(-50%, -50%) rotate(-45deg)",
  },
});

const twoMarkStyles = css({
  display: "inline-block",
  position: "relative",
  width: "32px",
  height: "32px",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "5px",
    height: "44px",
    background: "black",
    borderRadius: "2.5px",
  },
  "&::before": {
    transform: "translate(-50%, -50%) rotate(45deg)",
  },
  "&::after": {
    transform: "translate(-50%, -50%) rotate(-45deg)",
  },
});

const threeMarkStyles = css({
  display: "inline-block",
  position: "relative",
  width: "32px",
  height: "32px",
  borderRadius: "100%",
  border: "5px solid black",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "5px",
    height: "44px",
    background: "black",
    borderRadius: "2.5px",
  },
  "&::before": {
    transform: "translate(-50%, -50%) rotate(45deg)",
  },
  "&::after": {
    transform: "translate(-50%, -50%) rotate(-45deg)",
  },
});

export default CricketMark;
