interface GameResult {
  game: string
  setting: CricketMarkUpSetting
  result: CricketMarkUpResult
  scores: CricketMarkUpScore[]
  playedAt: string
}

interface CricketMarkUpSetting {
  targetCount: number
}

interface CricketMarkUpResult {
  count: number
}

interface CricketMarkUpScore {
  number: number
  count: number
  total: number
}
