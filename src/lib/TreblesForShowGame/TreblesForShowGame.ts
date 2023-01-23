import equal from 'fast-deep-equal';
import Player from '../Player/Player';

class TreblesForShowGame implements Game, GameData<TreblesForShowProgress, TreblesForShowResult> {
  private round: number = 20;
  private player: Player = new Player('Player1');
  private roundScore: point[] = [];

  constructor(round: number) {
    this.round = round;
  }
  getTargetRound() {
    return this.round;
  }
  getRound() {
    return this.player.getScore().length + 1;
  }
  getCurrentTarget() {
    return 20;
  }
  getTotalScore() {
    const scores = [...this.player.getScore(), this.roundScore];
    return scores.reduce((pre, crr) => pre + this.calcRound(crr), 0);
  }
  addScore(score: point) {
    if (this.roundScore.length >= 3) return;
    this.roundScore.push(score);
  }
  removeScore() {
    this.roundScore = [];
  }
  getRoundScore() {
    return this.roundScore;
  }
  getScore() {
    return this.player.getScore();
  }
  roundChange() {
    if (this.roundScore.length > 3) return;
    this.player.roundScore(this.roundScore);
    this.roundScore = [];
  }
  isFinished() {
    return this.getScore().length === this.round - 1 && this.roundScore.length === 3;
  }
  resumeGame(progress: TreblesForShowProgress) {
    for (const round of progress.score) this.player.roundScore(round);
    this.roundScore = progress.roundScore;
    this.round = progress.round;
  }
  getGameProgress(): TreblesForShowProgress {
    return { roundScore: this.roundScore, score: this.player.getScore(), round: this.round };
  }
  getGameResult(): TreblesForShowResult {
    return {
      result: this.getTotalScore(),
      scores: [...this.player.getScore(), this.roundScore],
      round: this.round,
      playedAt: new Date().toJSON(),
    };
  }
  private calcRound(round: point[]) {
    if (equal(round, ['T20', 'T20', 'T20'])) return 30;
    return round.reduce((pre, crr) => {
      if (crr === '20') return pre + 2;
      if (crr === 'D20') return pre + 2;
      if (crr === 'T20') return pre + 5;
      return pre;
    }, 0);
  }
}

export default TreblesForShowGame;
