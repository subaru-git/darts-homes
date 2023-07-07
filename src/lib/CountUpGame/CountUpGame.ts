class CountUpGame implements Game, GameData<CountUpProgress, CountUpResult> {
  static round = 8;
  private score: number[] = [];

  getRound() {
    return this.score.length + 1;
  }
  getTotalScore() {
    return this.score.reduce((p: number, c) => p + (c ? c : 0), 0);
  }
  addScore() {}
  addScoreNumber(score: number) {
    if (this.isFinished()) return;
    this.score.push(score);
  }
  removeScore() {}
  getRoundScore() {
    return [];
  }
  getScore() {
    return [];
  }
  getScoreNumber() {
    return this.score;
  }
  setScoreNumber(score: number[]) {
    this.score = [...score];
  }
  roundChange() {}
  isFinished() {
    return this.score.length === 8;
  }
  resumeGame(progress: CountUpProgress) {
    for (const round of progress.score) this.score.push(round);
  }
  getGameProgress(): CountUpProgress {
    return { score: this.score };
  }
  getGameResult(): CountUpResult {
    return {
      result: this.getTotalScore(),
      scores: this.score,
      playedAt: new Date().toJSON(),
    };
  }
}

export default CountUpGame;
