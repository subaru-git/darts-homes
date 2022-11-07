import Player from '../Player/Player';

class BullyBullyGame {
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
    return 50;
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
  getGameResult(): BullyBullyResult {
    return {
      result: this.getTotalScore(),
      scores: [...this.player.getScore(), this.roundScore],
      playedAt: new Date().toJSON(),
    };
  }
  private calcRound(round: point[]) {
    const points = round.reduce(
      (pre, crr) => (crr === 'S-BULL' ? pre + 2 : crr === 'D-BULL' ? pre + 5 : pre),
      0,
    );
    if (round.length === 3 && round.every((point) => point.includes('BULL'))) return points + 10;
    return points;
  }
}

export default BullyBullyGame;
