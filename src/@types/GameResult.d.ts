interface GameResult {
  game: string
  setting: CricketNumberCountSetting
  result: CricketNumberCountResult
  scores: CricketNumberCountScore[]
  playedAt: string
}

interface CricketNumberCountSetting {
  targetCount: number
}

interface CricketNumberCountResult {
  count: number
}

interface CricketNumberCountScore {
  number: number
  count: number
  total: number
}
