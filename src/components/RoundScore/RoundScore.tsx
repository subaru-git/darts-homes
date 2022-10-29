import React, { FC } from 'react'
import { Grid, GridItem, Heading, IconButton } from '@chakra-ui/react'
import { VscTrash } from 'react-icons/vsc'
import RoundScoreButton from '../RoundScoreButton'

type RoundScoreProps = {
  scores: string[]
  onClear: () => void
  onRoundChange: () => void
  isFinished: boolean
  onRoundOver: () => void
  kind: GameKind
}

const RoundScore: FC<RoundScoreProps> = ({
  scores,
  onClear,
  onRoundChange,
  isFinished,
  onRoundOver,
  kind,
}) => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' alignItems='center' gap={2}>
      <GridItem>
        <Heading
          as='h2'
          size={{ base: 'md', md: 'xl' }}
          textAlign='center'
          color='gray.500'
          fontStyle='italic'
        >
          {scores[0] === '0' ? '-' : scores[0]}
        </Heading>
      </GridItem>
      <GridItem>
        <Heading
          as='h2'
          size={{ base: 'md', md: 'xl' }}
          textAlign='center'
          color='gray.500'
          fontStyle='italic'
        >
          {scores[1] === '0' ? '-' : scores[1]}
        </Heading>
      </GridItem>
      <GridItem>
        <Heading
          as='h2'
          size={{ base: 'md', md: 'xl' }}
          textAlign='center'
          color='gray.500'
          fontStyle='italic'
        >
          {scores[2] === '0' ? '-' : scores[2]}
        </Heading>
      </GridItem>
      <GridItem>
        <Grid templateColumns='repeat(2, auto)' columnGap={2}>
          <GridItem>
            <IconButton
              aria-label='clear scores'
              size={{ base: 'sm', md: 'md' }}
              icon={<VscTrash />}
              colorScheme='blue'
              onClick={() => onClear()}
              disabled={scores.length === 0}
            ></IconButton>
          </GridItem>
          <GridItem>
            <RoundScoreButton
              isFinished={isFinished}
              disabled={scores.length !== 3}
              onRoundChange={onRoundChange}
              onRoundOver={onRoundOver}
              kind={kind}
            />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  )
}

export default RoundScore
