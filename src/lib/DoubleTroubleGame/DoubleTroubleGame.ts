import Player from '@/lib/Player/Player';

class DoubleTroubleGame {
  private player: Player = new Player('Player1');
  private roundScore: point[] = [];

  resumeGame(progress: { round: point[]; score: point[][] }) {
    for (const round of progress.score) {
      this.player.roundScore(round);
    }
    this.roundScore = progress.round;
  }
  roundChange() {
    if (this.roundScore.length > 3) return;
    if (this.isFinish()) return;
    this.player.roundScore(this.roundScore);
    this.roundScore = [];
  }
  addScore(score: point) {
    if (this.roundScore.length >= 3) return;
    this.roundScore.push(score);
  }
  removeScore() {
    this.roundScore = [];
  }
  getCurrentTarget() {
    return this.getRound();
  }
  getRound() {
    return this.player.getScore().length + 1;
  }
  getScore() {
    return this.player.getScore();
  }
  getRoundScore() {
    return this.roundScore;
  }
  getTotalScore() {
    const scores = [...this.player.getScore(), this.roundScore];
    return scores.reduce((pre, crr, i) => {
      const target = `${i + 1}D` as point;
      const roundScore = crr.reduce((pre, crr) => pre + (crr === target ? 5 : 0), 0);
      return pre + roundScore;
    }, 0);
  }
  isFinish() {
    return this.getScore().length === 19 && this.roundScore.length === 3;
  }
  getProgressJson() {
    return { round: this.roundScore, score: this.player.getScore() };
  }
  getGameResult(): DoubleTroubleResult {
    return {
      result: this.getTotalScore(),
      scores: [...this.player.getScore(), this.roundScore],
      playedAt: new Date().toJSON(),
    };
  }
}

export default DoubleTroubleGame;
