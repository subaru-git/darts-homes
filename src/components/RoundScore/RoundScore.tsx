import React, { FC } from 'react'
import { Button, Grid, GridItem, Heading, IconButton } from '@chakra-ui/react'
import { VscTrash } from 'react-icons/vsc'

type RoundScoreProps = {
  scores: string[]
  onClear: () => void
  onRoundChange: () => void
}

const RoundScore: FC<RoundScoreProps> = ({ scores, onClear, onRoundChange }) => {
  return (
    <Grid templateColumns='repeat(4, 1fr)'>
      <GridItem>
        <Heading as='h2' textAlign='center' color='gray.500'>
          {scores[0] === '0' ? '-' : scores[0]}
        </Heading>
      </GridItem>
      <GridItem>
        <Heading as='h2' textAlign='center' color='gray.500'>
          {scores[1] === '0' ? '-' : scores[1]}
        </Heading>
      </GridItem>
      <GridItem>
        <Heading as='h2' textAlign='center' color='gray.500'>
          {scores[2] === '0' ? '-' : scores[2]}
        </Heading>
      </GridItem>
      <GridItem>
        <Grid templateColumns='repeat(2, auto)' columnGap={2}>
          <GridItem>
            <IconButton
              aria-label='clear scores'
              icon={<VscTrash />}
              colorScheme='blue'
              onClick={() => onClear()}
              disabled={scores.length === 0}
            ></IconButton>
          </GridItem>
          <GridItem>
            <Button
              colorScheme='green'
              w='100%'
              onClick={() => {
                onRoundChange()
              }}
              disabled={scores.length !== 3}
            >
              Round Change
            </Button>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  )
}

export default RoundScore
