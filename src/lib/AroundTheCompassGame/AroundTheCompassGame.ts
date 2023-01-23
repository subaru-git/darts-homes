import { convertScoreToNumber } from '../Helper/Converter';
import { isDoubleOut } from '../Helper/OutOption';
import Player from '../Player/Player';

class AroundTheCompassGame
  implements Game, GameData<AroundTheCompassProgress, AroundTheCompassResult>
{
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
    return this.calcRound(this.roundScore).target;
  }
  getTotalScore() {
    const scores = [...this.player.getScore(), this.roundScore];
    console.log('score', scores);
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
  resumeGame(progress: AroundTheCompassProgress) {
    for (const round of progress.score) this.player.roundScore(round);
    this.roundScore = progress.roundScore;
    this.round = progress.round;
  }
  getGameProgress(): AroundTheCompassProgress {
    return { roundScore: this.roundScore, score: this.player.getScore(), round: this.round };
  }
  getGameResult(): AroundTheCompassResult {
    return {
      result: this.getTotalScore(),
      scores: [...this.player.getScore(), this.roundScore],
      round: this.round,
      playedAt: new Date().toJSON(),
    };
  }
  private calcRound(round: point[]) {
    const target = 24;
    return round.reduce(
      (pre, crr) => {
        const { target, point } = this.calcTarget(pre.target, crr);
        return { target, point: pre.point + point };
      },
      { target, point: 0 },
    );
  }
  private calcTarget(t: number, s: point) {
    console.log('calcTarget', t, s);
    if (isDoubleOut(t, s, true)) return { target: 24, point: 5 };
    let target = t - convertScoreToNumber(s, true);
    if (target <= 0) target = t;
    return { target, point: 0 };
  }
}

export default AroundTheCompassGame;
