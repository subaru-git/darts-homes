---
to: src/lib/<%= name %>Game/<%= name %>Game.ts
---
import Player from '../Player/Player';

class <%= name %>Game implements Game, GameData<<%= name %>Progress, <%= name %>Result>{
  private player: Player = new Player('Player1');
  private roundScore: point[] = [];

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
    return false;
  }
  resumeGame(progress: <%= name %>Progress) {
    for (const round of progress.score) this.player.roundScore(round);
    this.roundScore = progress.round;
  }
  getGameProgress(): <%= name %>Progress {
    return { round: this.roundScore, score: this.player.getScore() };
  }
  getGameResult(): <%= name %>Result {
    return {
      result: 0,
      scores: [...this.player.getScore(), this.roundScore],
      playedAt: new Date().toJSON(),
    };
  }
}

export default <%= name %>Game;
