import React, { FC } from 'react'
import { Button, Collapse, useDisclosure, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import { GrCircleInformation } from 'react-icons/gr'
import YouTube from 'react-youtube'
import useLocale from '@/hooks/locale'

const CricketNumberCountDescription: FC = () => {
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
        <YouTube videoId='RFl52NNvWhw' />
      </Collapse>
    </>
  )
}

export default CricketNumberCountDescription
