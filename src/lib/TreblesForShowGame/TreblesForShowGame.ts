import equal from 'fast-deep-equal';
import Player from '../Player/Player';

class TreblesForShowGame {
  private round: number = 20;
  private player: Player = new Player('Player1');
  private roundScore: point[] = [];

  constructor(round: number) {
    this.round = round;
  }
  resumeGame(progress: { round: point[]; score: point[][] }) {
    for (const round of progress.score) {
      this.player.roundScore(round);
    }
    this.roundScore = progress.round;
  }
  getRound() {
    return this.player.getScore().length + 1;
  }
  getCurrentTarget() {
    return 20;
  }
  addScore(score: point) {
    if (this.roundScore.length >= 3) return;
    this.roundScore.push(score);
  }
  removeScore() {
    this.roundScore = [];
  }
  getScore() {
    return this.player.getScore();
  }
  getRoundScore() {
    return this.roundScore;
  }
  roundChange() {
    if (this.roundScore.length > 3) return;
    this.player.roundScore(this.roundScore);
    this.roundScore = [];
  }
  getTotalScore() {
    const scores = [...this.player.getScore(), this.roundScore];
    return scores.reduce((pre, crr) => pre + this.calcRound(crr), 0);
  }
  isFinish() {
    return this.getScore().length === this.round - 1 && this.roundScore.length === 3;
  }
  getProgressJson() {
    return { round: this.roundScore, score: this.player.getScore() };
  }
  getGameResult(): TreblesForShowResult {
    return {
      result: this.getTotalScore(),
      scores: [...this.player.getScore(), this.roundScore],
      playedAt: new Date().toJSON(),
    };
  }
  private calcRound(round: point[]) {
    if (equal(round, ['20T', '20T', '20T'])) return 30;
    return round.reduce((pre, crr) => {
      if (crr === '20') return pre + 2;
      if (crr === '20D') return pre + 2;
      if (crr === '20T') return pre + 5;
      return pre;
    }, 0);
  }
}

export default TreblesForShowGame;
