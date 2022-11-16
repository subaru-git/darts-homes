import { convertScoreToNumber } from '../Helper/Converter';
import { isDoubleOut } from '../Helper/Validation';
import Player from '../Player/Player';

class Route64Game {
  private round: number = 20;
  private player: Player = new Player('Player1');
  private roundScore: point[] = [];

  constructor(round: number) {
    this.round = round;
  }
  resumeGame(progress: Route64Progress) {
    for (const round of progress.score) {
      this.player.roundScore(round);
    }
    this.roundScore = progress.roundScore;
    this.round = progress.round;
  }
  getTargetRound() {
    return this.round;
  }
  getRound() {
    return this.player.getScore().length + 1;
  }
  getCurrentTarget() {
    return this.calcRound(this.roundScore).target;
  }
  addScore(score: point) {
    if (this.roundScore.length >= 3) return;
    this.roundScore.push(score);
    if (this.getCurrentTarget() === 0) this.addScore('0');
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
    return scores.reduce((pre, crr) => pre + this.calcRound(crr).point, 0);
  }
  isFinish() {
    return this.getScore().length === this.round - 1 && this.roundScore.length === 3;
  }
  getProgressJson(): Route64Progress {
    return { roundScore: this.roundScore, score: this.player.getScore(), round: this.round };
  }
  getGameResult(): Route64Result {
    return {
      result: this.getTotalScore(),
      scores: [...this.player.getScore(), this.roundScore],
      round: this.round,
      playedAt: new Date().toJSON(),
    };
  }
  private calcRound(round: point[]) {
    return round.reduce(
      (pre, crr, i) => {
        const { target, point } = this.calcTarget(pre.target, crr);
        if (i === 1 && target === 0) return { target: 0, point: 20 };
        return { target, point: pre.point + point };
      },
      { target: 64, point: 0 },
    );
  }
  private calcTarget(t: number, s: point) {
    if (isDoubleOut(t, s)) return { target: 0, point: 10 };
    let target = t - convertScoreToNumber(s, true);
    if (target <= 0) target = t;
    return { target: target, point: 0 };
  }
}

export default Route64Game;
