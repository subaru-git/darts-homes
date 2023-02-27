import React, { FC, useRef, useState } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import fileDownload from 'js-file-download';
import { BiExport, BiImport } from 'react-icons/bi';
import { useAuth } from '@/contexts/AuthContext';
import useLocale from '@/hooks/locale';
import { exportGameHistory, importGameHistory } from '@/lib/GameHistoryManager';
import { isGameHistory } from '@/lib/Helper/TypeGuard';

type ImportExportProps = {
  onError: () => void;
};

const ImportExport: FC<ImportExportProps> = ({ onError }) => {
  const user = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [history, setHistory] = useState<GameResult>({
    cricketMarkUp: [],
    eaglesEye: [],
    doubleTrouble: [],
    sweet16: [],
    topsAndTens: [],
    twoDartCombinations: [],
    aroundTheCompass: [],
    tonsUp: [],
    route64: [],
    eightyThrew: [],
    shanghaiNights: [],
    switchHitter: [],
    bullyBully: [],
    treblesForShow: [],
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const { t } = useLocale();
  return (
    <>
      <Flex gap={4}>
        <input
          type='file'
          accept='.json'
          ref={inputRef}
          hidden
          onChange={(e) => {
            if (!e.target.files) return;
            for (const file of e.target.files) {
              const roader = new FileReader();
              roader.onload = (e) => {
                const history = JSON.parse(e.target?.result as string);
                if (!isGameHistory(history)) {
                  onError();
                  return;
                }
                setHistory(history);
                onOpen();
              };
              roader.readAsText(file);
            }
            e.target.value = '';
          }}
        />
        <Button
          variant='outline'
          size={{ base: 'sm', md: 'md' }}
          colorScheme='red'
          onClick={() => {
            inputRef.current?.click();
          }}
          leftIcon={<BiImport />}
          aria-label='import'
        >
          Import
        </Button>
        <Button
          variant='outline'
          size={{ base: 'sm', md: 'md' }}
          colorScheme='teal'
          onClick={async () => {
            const history = await exportGameHistory();
            fileDownload(JSON.stringify(history), 'darts-homes-history.json');
          }}
          leftIcon={<BiExport />}
          aria-label='export'
        >
          Export
        </Button>
      </Flex>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size={{ base: 'xs', md: 'md' }}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Import History
            </AlertDialogHeader>
            <AlertDialogBody>{t.import.description}</AlertDialogBody>
            <AlertDialogFooter>
              <Button
                colorScheme='gray'
                ml={3}
                onClick={onClose}
                ref={cancelRef}
                aria-label='cancel'
              >
                Cancel
              </Button>
              <Button
                colorScheme='blue'
                onClick={() => {
                  importGameHistory(history, false, user);
                  onClose();
                }}
                ml={3}
                aria-label='add'
              >
                {t.common.add}
              </Button>
              <Button
                colorScheme='red'
                onClick={() => {
                  importGameHistory(history, true, user);
                  onClose();
                }}
                ml={3}
                aria-label='overwrite'
              >
                {t.common.overwrite}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ImportExport;
