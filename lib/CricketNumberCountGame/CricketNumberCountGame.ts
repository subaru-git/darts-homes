import { convertScoreToCount } from "../Helper/Converter";
import Player from "../Player/Player";

export default class CricketNumberCountGame {
  private static readonly beginTarget = 20;
  private targetCount: number;
  private player: Player = new Player("Player1");
  private roundScore: string[] = [];

  constructor(targetCount: number) {
    this.targetCount = targetCount;
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
  roundChange() {
    if (this.roundScore.length > 3) return;
    this.player.roundScore(this.roundScore);
    this.roundScore = [];
  }
  getScore() {
    let count = this.targetCount;
    let target = CricketNumberCountGame.beginTarget;
    const score = [...this.player.getScore(), this.roundScore];
    return score.map((round) =>
      round.map((s) => {
        if (parseInt(s) !== target) return "0";
        const c = convertScoreToCount(s);
        count -= c;
        if (count <= 0) {
          target -= 1;
          let result = c + count;
          count = this.targetCount;
          return `${target + 1}-${result}`;
        }
        return `${target}-${c}`;
      })
    );
  }
  getCurrentTarget() {
    let count = this.targetCount;
    let target = 20;
    const score = [...this.player.getScore(), this.roundScore];
    for (const round of score) {
      for (const s of round) {
        if (parseInt(s) !== target) continue;
        const c = convertScoreToCount(s);
        count -= c;
        if (count <= 0) {
          target -= 1;
          count = this.targetCount;
        }
      }
    }
    return target;
  }
}
