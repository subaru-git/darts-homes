import { convertScoreToNumber } from '../Helper/Converter'
import Player from '@/lib/Player/Player'

export default class EaglesEyeGame {
  static round = 8
  private player: Player = new Player('Player1')
  private roundScore: point[] = []

  resumeGame(progress: { round: point[]; score: point[][] }) {
    for (const round of progress.score) {
      this.player.roundScore(round)
    }
    this.roundScore = progress.round
  }
  roundChange() {
    if (this.roundScore.length > 3) return
    this.player.roundScore(this.roundScore)
    this.roundScore = []
  }
  addScore(score: point) {
    if (this.roundScore.length >= 3) return
    this.roundScore.push(score)
  }
  removeScore() {
    this.roundScore = []
  }
  getRound() {
    return this.player.getScore().length + 1
  }
  getRoundScore() {
    return this.roundScore
  }
  getScore() {
    return this.player.getScore()
  }
  getTotalScore() {
    const scores = [...this.player.getScore(), this.roundScore]
    return scores.reduce(
      (pre, crr) =>
        pre +
        crr.reduce(
          (pre, crr) => pre + (crr.includes('BULL') ? convertScoreToNumber(crr, true) : 0),
          0,
        ),
      0,
    )
  }
  isFinish() {
    return this.getScore().length === 7 && this.roundScore.length === 3
  }
  getProgressJson() {
    return { round: this.roundScore, score: this.player.getScore() }
  }
  getGameResult(): EaglesEyeResult {
    return {
      result: this.getTotalScore(),
      scores: [...this.player.getScore(), this.roundScore],
      playedAt: new Date().toJSON(),
    }
  }
}
