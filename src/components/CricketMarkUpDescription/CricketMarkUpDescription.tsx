import React, { FC } from 'react'
import { Button, Collapse, useDisclosure, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import { GrCircleInformation } from 'react-icons/gr'
import LiteYoutubeEmbed from 'react-lite-youtube-embed'
import useLocale from '@/hooks/locale'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const CricketMarkUpDescription: FC = () => {
  const { isOpen, onToggle } = useDisclosure()
  const { t } = useLocale()
  return (
    <>
      <Button leftIcon={<GrCircleInformation />} variant='ghost' size='sm' onClick={onToggle}>
        What is this game?
      </Button>
      <Collapse in={isOpen}>
        <Text whiteSpace='pre-wrap'>{t.CRICKET_NUMBER_COUNT_DESCRIPTION}</Text>
        <UnorderedList py={2}>
          <ListItem>{t.CRICKET_NUMBER_COUNT_RULE_STEP1}</ListItem>
          <ListItem>{t.CRICKET_NUMBER_COUNT_RULE_STEP2}</ListItem>
        </UnorderedList>
        <Text>{t.CRICKET_NUMBER_COUNT_RULE_MORE}</Text>
        <LiteYoutubeEmbed
          id='RFl52NNvWhw'
          title='【ダーツ】菊地山口練習法　2週間でRt.4からRt.8になった練習法'
          webp
        />
      </Collapse>
    </>
  )
}

export default CricketMarkUpDescription
