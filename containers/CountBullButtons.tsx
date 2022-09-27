import React, { FC } from "react";
import BullButton from "../components/BullButton";

type CountBullButtonsProps = {
  onCount: (count: point) => void;
  disabled: boolean;
};

const CountBullButtons: FC<CountBullButtonsProps> = ({ onCount, disabled }) => {
  return (
    <>
      <BullButton onScore={(n) => onCount(n)} disable={disabled} />
    </>
  );
};

export default CountBullButtons;
