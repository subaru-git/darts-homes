import equal from 'fast-deep-equal';
import { convertScoreToNumber } from '../Helper/Converter';
import { isDoubleOut } from '../Helper/OutOption';
import Player from '../Player/Player';

class ShanghaiNightsGame {
  private round: number = 20;
  private player: Player = new Player('Player1');
  private roundScore: point[] = [];

  constructor(round: number) {
    this.round = round;
  }
  resumeGame(progress: ShanghaiNightsProgress) {
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
  getProgressJson(): ShanghaiNightsProgress {
    return { roundScore: this.roundScore, score: this.player.getScore(), round: this.round };
  }
  getGameResult(): ShanghaiNightsResult {
    return {
      result: this.getTotalScore(),
      scores: [...this.player.getScore(), this.roundScore],
      round: this.round,
      playedAt: new Date().toJSON(),
    };
  }
  private calcRound(round: point[]) {
    if (equal(round, ['20D', '20D', '20D'])) return { target: 0, point: 20 };
    return round.reduce(
      (pre, crr) => {
        const { target, point } = this.calcTarget(pre.target, crr);
        return { target, point: pre.point + point };
      },
      { target: 120, point: 0 },
    );
  }
  private calcTarget(t: number, s: point) {
    if (isDoubleOut(t, s, true)) return { target: 0, point: 10 };
    let target = t - convertScoreToNumber(s, true);
    if (target <= 0) target = t;
    return { target: target, point: 0 };
  }
}

export default ShanghaiNightsGame;
