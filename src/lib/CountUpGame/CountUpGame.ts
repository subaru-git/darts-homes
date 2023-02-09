class CountUpGame implements Game, GameData<CountUpProgress, CountUpResult> {
  static round = 8;
  private score: number[] = [];
  private roundScore: number | null = null;

  getRound() {
    return this.score.length + 1;
  }
  getTotalScore() {
    const scores = [...this.score, this.roundScore];
    return scores.reduce((p: number, c) => p + (c ? c : 0), 0);
  }
  addScore() {}
  addRoundScoreNumber(score: number) {
    this.roundScore = score;
  }
  removeScore() {
    this.roundScore = null;
  }
  getRoundScore() {
    return [];
  }
  getRoundScoreNumber() {
    return this.roundScore;
  }
  getScore() {
    return [];
  }
  getScoreNumber() {
    return this.score;
  }
  roundChange() {
    if (this.roundScore === null) return;
    this.score.push(this.roundScore);
    this.roundScore = null;
  }
  isFinished() {
    return this.score.length === 7 && this.roundScore !== null;
  }
  resumeGame(progress: CountUpProgress) {
    for (const round of progress.score) this.score.push(round);
    this.roundScore = progress.round;
  }
  getGameProgress(): CountUpProgress {
    return { round: this.roundScore, score: this.score };
  }
  getGameResult(): CountUpResult {
    return {
      result: this.getTotalScore(),
      scores: [...this.score, this.roundScore ? this.roundScore : 0],
      playedAt: new Date().toJSON(),
    };
  }
}

export default CountUpGame;
