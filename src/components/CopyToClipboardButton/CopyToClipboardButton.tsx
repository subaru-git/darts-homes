import React, { FC, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '@/atoms/Button';

type CopyToClipboardButtonProps = {
  text: string;
  label: string;
};

const CopyToClipboardButton: FC<CopyToClipboardButtonProps> = ({ text, label }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div>
      <CopyToClipboard
        text={text}
        onCopy={() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        }}
      >
        <Button color='blue'>{copied ? 'Copied' : label}</Button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyToClipboardButton;
