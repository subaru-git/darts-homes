import React, { FC } from 'react';

type HistoryProps = {
  history: ArrangeResultModel[];
  user: User | null | undefined;
};

const History: FC<HistoryProps> = ({ history, user }) => {
  console.log(history);
  console.log(user);
  return <div>History</div>;
};

export default History;
