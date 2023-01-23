import {
  convertCountScoreToNumberOfCount,
  convertNumberToSinglePoint,
  convertPointToTarget,
  convertScoreToCount,
} from '@/lib/Helper/Converter';
import Player from '@/lib/Player/Player';

class CricketMarkUpGame implements Game, GameData<CricketMarkUpProgress, CricketMarkUpResult> {
  private static readonly beginTarget = 20;
  private static readonly endTarget = 15;
  private targetCount: number;
  private player: Player = new Player('Player1');
  private roundScore: point[] = [];

  constructor(targetCount: number) {
    this.targetCount = targetCount;
  }
  getCurrentTarget() {
    let count = this.targetCount;
    let target = 20;
    const score = [...this.player.getScore(), this.roundScore];
    for (const round of score) {
      for (const s of round) {
        if (convertPointToTarget(s) !== target && !(target === 25 && s.includes('BULL'))) continue;
        const c = convertScoreToCount(s);
        count -= c;
        if (count <= 0) {
          if (target === 25) return '-1';
          target -= 1;
          if (target < CricketMarkUpGame.endTarget) target = 25;
          count = this.targetCount;
        }
      }
    }
    return convertNumberToSinglePoint(target);
  }
  getCount() {
    const score = this.getCountScore();
    return score.flat().filter((s) => s !== '-1').length;
  }
  getTargetCount() {
    return this.targetCount;
  }
  getNumberOfCount() {
    return convertCountScoreToNumberOfCount(this.getCountScore(), 15, 20);
  }
  getCountScore() {
    let count = this.targetCount;
    let target = CricketMarkUpGame.beginTarget;
    const score = [...this.player.getScore(), this.roundScore];
    return score.map((round) =>
      round.map((s) => {
        if (target === -1) return '-1';
        if (convertPointToTarget(s) !== target && !(target === 25 && s.includes('BULL')))
          return `${target}-0`;
        const c = convertScoreToCount(s);
        count -= c;
        if (count <= 0) {
          let resultTarget = target;
          target -= 1;
          if (resultTarget === 25) target = -1;
          else if (target < CricketMarkUpGame.endTarget) target = 25;
          let resultCount = c + count;
          count = this.targetCount;
          return `${resultTarget}-${resultCount}`;
        }
        return `${target}-${c}`;
      }),
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
    return this.getCurrentTarget() === '-1';
  }
  resumeGame(progress: CricketMarkUpProgress) {
    for (const round of progress.score) this.player.roundScore(round);
    this.targetCount = progress.targetCount;
    this.roundScore = progress.round;
  }
  getGameProgress(): CricketMarkUpProgress {
    return { targetCount: this.targetCount, round: this.roundScore, score: this.player.getScore() };
  }
  getGameResult(): CricketMarkUpResult {
    return {
      targetCount: this.targetCount,
      result: this.getCount(),
      scores: this.getNumberOfCount(),
      playedAt: new Date().toJSON(),
    };
  }
}

export default CricketMarkUpGame;
