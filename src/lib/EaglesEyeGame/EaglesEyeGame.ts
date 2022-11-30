import { convertScoreToNumber } from '../Helper/Converter';
import Player from '@/lib/Player/Player';

class EaglesEyeGame implements Game, GameData<EaglesEyeProgress, EaglesEyeResult> {
  static round = 8;
  private player: Player = new Player('Player1');
  private roundScore: point[] = [];

  getRound() {
    return this.player.getScore().length + 1;
  }
  getTotalScore() {
    const scores = [...this.player.getScore(), this.roundScore];
    return scores.reduce(
      (p, c) =>
        p + c.reduce((p, c) => p + (c.includes('BULL') ? convertScoreToNumber(c, true) : 0), 0),
      0,
    );
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
    return this.getScore().length === 7 && this.roundScore.length === 3;
  }
  resumeGame(progress: EaglesEyeProgress) {
    for (const round of progress.score) this.player.roundScore(round);
    this.roundScore = progress.round;
  }
  getGameProgress(): EaglesEyeProgress {
    return { round: this.roundScore, score: this.player.getScore() };
  }
  getGameResult(): EaglesEyeResult {
    return {
      result: this.getTotalScore(),
      scores: [...this.player.getScore(), this.roundScore],
      playedAt: new Date().toJSON(),
    };
  }
}

export default EaglesEyeGame;
