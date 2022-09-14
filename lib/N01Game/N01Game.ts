import { convertScoreToNumber } from "../Helper/Converter";
import Player from "../Player/Player";

export default class N01Game {
  private fixedScore: number;
  private players: Player[] = [];
  private currentPlayer: Player | null = null;
  private roundScore: string[] = [];

  constructor(fixedScore: number) {
    this.fixedScore = fixedScore;
    this.players.push(new Player("Player1"));
    this.players.push(new Player("Player2"));
    this.gameOn();
  }
  gameOn() {
    this.currentPlayer = this.players[0];
  }
  addScore(score: string) {
    if (this.currentPlayer === null) return;
    if (this.roundScore.length >= 3) return;
    this.roundScore.push(score);
  }
  removeScore() {
    this.roundScore = [];
  }
  changePlayer() {
    if (this.currentPlayer === null) return;
    const index = this.players.indexOf(this.currentPlayer);
    this.currentPlayer = this.players[(index + 1) % this.players.length];
  }
  getRoundScore() {
    return this.roundScore;
  }
  getTargetScore() {
    if (this.currentPlayer === null) return;
    const score = this.getTargetScoreFromPlayer(this.currentPlayer);
    const now = score[score.length - 1];
    return this.roundScore.reduce((a, b) => a - convertScoreToNumber(b), now);
  }
  getScore() {
    return this.players.map((player) => this.getTargetScoreFromPlayer(player));
  }
  roundChange() {
    if (this.currentPlayer === null) return;
    this.currentPlayer.roundScore(this.roundScore);
    this.roundScore = [];
  }
  getCurrentPlayer() {
    return this.currentPlayer;
  }
  getPlayers() {
    return this.players;
  }
  changePlayerName(name: string[]) {
    for (const n in name) {
      this.players[n].updateName(name[n]);
    }
  }
  private getTargetScoreFromPlayer(player: Player) {
    let score = this.fixedScore;
    const rounds = player.getScore();
    return [
      this.fixedScore,
      ...rounds.map((round) => {
        const now = score;
        score -= round.reduce((a, b) => a + convertScoreToNumber(b), 0);
        if (score < 0) score = now;
        return score;
      }),
    ];
  }
}
