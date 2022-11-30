import { convertScoreToNumber } from '../Helper/Converter';
import { isDoubleOut } from '../Helper/OutOption';
import Player from '../Player/Player';

class TwoDartCombinationsGame
  implements Game, GameData<TwoDartCombinationsProgress, TwoDartCombinationsResult>
{
  private player: Player = new Player('Player1');
  private roundScore: point[] = [];

  getRound() {
    return this.player.getScore().length + 1;
  }
  getCurrentTarget() {
    return this.calcRound(this.roundScore, this.player.getScore().length).target;
  }
  getTotalScore() {
    const scores = [...this.player.getScore(), this.roundScore];
    return scores.reduce((pre, crr, i) => pre + this.calcRound(crr, i).point, 0);
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
    return this.getScore().length === 19 && this.roundScore.length === 3;
  }
  resumeGame(progress: TwoDartCombinationsProgress) {
    for (const round of progress.score) this.player.roundScore(round);
    this.roundScore = progress.roundScore;
  }
  getGameProgress(): TwoDartCombinationsProgress {
    return { roundScore: this.roundScore, score: this.player.getScore() };
  }
  getGameResult(): TwoDartCombinationsResult {
    return {
      result: this.getTotalScore(),
      scores: [...this.player.getScore(), this.roundScore],
      playedAt: new Date().toJSON(),
    };
  }
  private calcRound(round: point[], index: number) {
    const target = 41 + index;
    return round.reduce(
      (pre, crr) => {
        const { target, point } = this.calcTarget(pre.target, crr);
        return { target, point: pre.point + point };
      },
      { target, point: 0 },
    );
  }
  private calcTarget(t: number, s: point) {
    if (isDoubleOut(t, s, true)) return { target: 0, point: 15 };
    let target = t - convertScoreToNumber(s, true);
    if (target <= 0) target = t;
    return { target, point: 0 };
  }
}

export default TwoDartCombinationsGame;
