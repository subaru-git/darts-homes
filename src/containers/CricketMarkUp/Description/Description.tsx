import React, { FC } from 'react';
import {
  Button,
  useDisclosure,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { GrCircleInformation } from 'react-icons/gr';
import LiteYoutubeEmbed from 'react-lite-youtube-embed';
import useLocale from '@/hooks/locale';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const Description: FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const isMd = useBreakpointValue({ base: false, md: true });
  const { t } = useLocale();
  return (
    <>
      {isMd ? (
        <Button
          leftIcon={<GrCircleInformation />}
          aria-label='what is new game?'
          variant='ghost'
          onClick={onToggle}
        >
          What is this game?
        </Button>
      ) : (
        <IconButton
          aria-label='what is new game?'
          icon={<GrCircleInformation size='20px' />}
          variant='ghost'
          onClick={onToggle}
        />
      )}
      <Modal isOpen={isOpen} onClose={onToggle} size='2xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cricket Mark-Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text whiteSpace='pre-wrap'>{t.games.cricketmarkup.description.join('\n')}</Text>
            <LiteYoutubeEmbed
              id='RFl52NNvWhw'
              title='【ダーツ】菊地山口練習法　2週間でRt.4からRt.8になった練習法'
              webp
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Description;
