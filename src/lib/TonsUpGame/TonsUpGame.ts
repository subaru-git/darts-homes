import equal from 'fast-deep-equal';
import { convertScoreToNumber } from '../Helper/Converter';
import { isDoubleOut } from '../Helper/OutOption';
import Player from '../Player/Player';

class TonsUpGame implements Game, GameData<TonsUpProgress, TonsUpResult> {
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
    return scores.reduce((pre, crr) => pre + this.calcRound(crr).point, 0);
  }
  addScore(score: point) {
    if (this.roundScore.length >= 3) return;
    this.roundScore.push(score);
    if (this.getCurrentTarget() === 0) this.addScore('0');
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
  resumeGame(progress: TonsUpProgress) {
    for (const round of progress.score) this.player.roundScore(round);
    this.roundScore = progress.roundScore;
    this.round = progress.round;
  }
  getGameProgress(): TonsUpProgress {
    return { roundScore: this.roundScore, score: this.player.getScore(), round: this.round };
  }
  getGameResult(): TonsUpResult {
    return {
      result: this.getTotalScore(),
      scores: [...this.player.getScore(), this.roundScore],
      round: this.round,
      playedAt: new Date().toJSON(),
    };
  }
  private calcRound(round: point[]) {
    if (equal(round.slice(0, 2), ['T20', 'D20'])) return { target: 0, point: 20 };
    return round.reduce(
      (pre, crr) => {
        const { target, point } = this.calcTarget(pre.target, crr);
        return { target, point: pre.point + point };
      },
      { target: 100, point: 0 },
    );
  }
  private calcTarget(t: number, s: point) {
    if (isDoubleOut(t, s, true)) return { target: 0, point: 10 };
    let target = t - convertScoreToNumber(s, true);
    if (target === 0) target = t;
    return { target: target, point: 0 };
  }
}

export default TonsUpGame;
