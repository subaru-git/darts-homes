import {
  convertCountScoreToNumberOfCount,
  convertNumberToSinglePoint,
  convertScoreToCount,
} from '@/lib/Helper/Converter'
import Player from '@/lib/Player/Player'

export default class CricketNumberCountGame {
  private static readonly beginTarget = 20
  private static readonly endTarget = 15
  private targetCount: number
  private player: Player = new Player('Player1')
  private roundScore: point[] = []

  constructor(targetCount: number) {
    this.targetCount = targetCount
  }
  resumeGame(progress: { targetCount: number; round: point[]; score: point[][] }) {
    this.targetCount = progress.targetCount
    for (const round of progress.score) {
      this.player.roundScore(round)
    }
    this.roundScore = progress.round
  }
  addScore(score: point) {
    if (this.roundScore.length >= 3) return
    this.roundScore.push(score)
  }
  removeScore() {
    this.roundScore = []
  }
  getRoundScore() {
    return this.roundScore
  }
  getRoundsScore() {
    return this.player.getScore()
  }
  roundChange() {
    if (this.roundScore.length > 3) return
    this.player.roundScore(this.roundScore)
    this.roundScore = []
  }
  getScore() {
    let count = this.targetCount
    let target = CricketNumberCountGame.beginTarget
    const score = [...this.player.getScore(), this.roundScore]
    return score.map((round) =>
      round.map((s) => {
        if (target === -1) return '-1'
        if (parseInt(s) !== target && !(target === 25 && s.includes('BULL'))) return `${target}-0`
        const c = convertScoreToCount(s)
        count -= c
        if (count <= 0) {
          let resultTarget = target
          target -= 1
          if (resultTarget === 25) target = -1
          else if (target < CricketNumberCountGame.endTarget) target = 25
          let resultCount = c + count
          count = this.targetCount
          return `${resultTarget}-${resultCount}`
        }
        return `${target}-${c}`
      }),
    )
  }
  getCurrentTarget() {
    let count = this.targetCount
    let target = 20
    const score = [...this.player.getScore(), this.roundScore]
    for (const round of score) {
      for (const s of round) {
        if (parseInt(s) !== target && !(target === 25 && s.includes('BULL'))) continue
        const c = convertScoreToCount(s)
        count -= c
        if (count <= 0) {
          if (target === 25) return '-1'
          target -= 1
          if (target < CricketNumberCountGame.endTarget) target = 25
          count = this.targetCount
        }
      }
    }
    return convertNumberToSinglePoint(target)
  }
  isFinished() {
    return this.getCurrentTarget() === '-1'
  }
  getCount() {
    const score = this.getScore()
    return score.flat().filter((s) => s !== '-1').length
  }
  getTargetCount() {
    return this.targetCount
  }
  getProgressJson() {
    return { targetCount: this.targetCount, round: this.roundScore, score: this.player.getScore() }
  }
  getGameResult(): GameResult {
    return {
      game: 'CricketNumberCountGame',
      setting: { targetCount: this.targetCount },
      result: { count: this.getCount() },
      scores: convertCountScoreToNumberOfCount(this.getScore(), 15, 20),
      playedAt: new Date().toJSON(),
    }
  }
}
