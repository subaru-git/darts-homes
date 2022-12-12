import { convertScoreToNumber } from '../Helper/Converter';
import { isDoubleOut } from '../Helper/OutOption';
import Player from '../Player/Player';

class TopsAndTensGame implements Game, GameData<TopsAndTensProgress, TopsAndTensResult> {
  private round = 10;
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
    return this.calcRound(this.roundScore).target;
  }
  getTotalScore() {
    const scores = [...this.player.getScore(), this.roundScore];
    return scores.reduce((pre, crr) => pre + this.calcRound(crr).point, 0);
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
  resumeGame(progress: TopsAndTensProgress) {
    for (const round of progress.score) {
      this.player.roundScore(round);
    }
    this.roundScore = progress.roundScore;
    this.round = progress.round;
  }
  getGameProgress(): TopsAndTensProgress {
    return { roundScore: this.roundScore, score: this.player.getScore(), round: this.round };
  }
  getGameResult(): TopsAndTensResult {
    return {
      result: this.getTotalScore(),
      scores: [...this.player.getScore(), this.roundScore],
      playedAt: new Date().toJSON(),
    };
  }
  private calcRound(round: point[]) {
    return round.reduce(
      (pre, crr) => {
        const { target, point } = this.calcTarget(pre.target, crr);
        return { target, point: pre.point + point };
      },
      { target: 40, point: 0 },
    );
  }
  private calcTarget(t: number, s: point) {
    const availablePoint = ['20D', '20', '10D', '10', '5D'];
    const score = availablePoint.includes(s) ? s : '0';
    if (isDoubleOut(t, score, true)) return { target: 40, point: 5 };
    let target = t - convertScoreToNumber(score, true);
    if (target === 0) target = 40;
    return { target, point: 0 };
  }
}

export default TopsAndTensGame;
