import Player from '../Player/Player';

class BullyBullyGame implements Game, GameData<BullyBullyProgress, BullyBullyResult> {
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
    return 50;
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
  resumeGame(progress: BullyBullyProgress) {
    for (const round of progress.score) this.player.roundScore(round);
    this.roundScore = progress.roundScore;
    this.round = progress.round;
  }
  getGameProgress(): BullyBullyProgress {
    return { roundScore: this.roundScore, score: this.player.getScore(), round: this.round };
  }
  getGameResult(): BullyBullyResult {
    return {
      result: this.getTotalScore(),
      scores: [...this.player.getScore(), this.roundScore],
      round: this.round,
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
