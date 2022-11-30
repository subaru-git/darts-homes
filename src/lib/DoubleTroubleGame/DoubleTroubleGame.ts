import Player from '@/lib/Player/Player';

class DoubleTroubleGame implements Game, GameData<DoubleTroubleProgress, DoubleTroubleResult> {
  private player: Player = new Player('Player1');
  private roundScore: point[] = [];

  getCurrentTarget() {
    return this.getRound();
  }
  getRound() {
    return this.player.getScore().length + 1;
  }
  getTotalScore() {
    const scores = [...this.player.getScore(), this.roundScore];
    return scores.reduce((pre, crr, i) => {
      const target = `${i + 1}D` as point;
      const roundScore = crr.reduce((pre, crr) => pre + (crr === target ? 5 : 0), 0);
      return pre + roundScore;
    }, 0);
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
    if (this.isFinished()) return;
    this.player.roundScore(this.roundScore);
    this.roundScore = [];
  }
  isFinished() {
    return this.getScore().length === 19 && this.roundScore.length === 3;
  }
  resumeGame(progress: DoubleTroubleProgress) {
    for (const round of progress.score) this.player.roundScore(round);
    this.roundScore = progress.roundScore;
  }
  getGameProgress(): DoubleTroubleProgress {
    return { roundScore: this.roundScore, score: this.player.getScore() };
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
