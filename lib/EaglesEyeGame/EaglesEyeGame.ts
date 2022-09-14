import { convertScoreToNumber } from "../Helper/Converter";
import Player from "../Player/Player";

export default class EaglesEyeGame {
  private player: Player = new Player("Player1");
  private roundScore: string[] = [];

  roundChange() {
    if (this.roundScore.length > 3) return;
    this.player.roundScore(this.roundScore);
    this.roundScore = [];
  }
  addScore(score: string) {
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
    return this.player
      .getScore()
      .map((score) => score.map((s) => convertScoreToNumber(s)));
  }
}
