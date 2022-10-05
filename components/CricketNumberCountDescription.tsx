import React, { FC } from 'react'
import { Button, Collapse, useDisclosure, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import { GrCircleInformation } from 'react-icons/gr'
import YouTube from 'react-youtube'

const CricketNumberCountDescription: FC = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Button leftIcon={<GrCircleInformation />} variant='ghost' size='sm' onClick={onToggle}>
        What is this game?
      </Button>
      <Collapse in={isOpen}>
        <Text>
          This game was designed by&#39;Kikuchi Yamaguchi.&#39; <br />
          The game rule is:
        </Text>
        <UnorderedList py={2}>
          <ListItem>Setting target count (recommended 10 times)</ListItem>
          <ListItem>
            Shoot for each cricket numbers from 20 to 15 and Bull until the target count of times,
            like Cricket.
          </ListItem>
        </UnorderedList>
        <Text>For more information, please watch this video.</Text>
        <YouTube videoId='RFl52NNvWhw' />
      </Collapse>
    </>
  )
}

export default CricketNumberCountDescription
