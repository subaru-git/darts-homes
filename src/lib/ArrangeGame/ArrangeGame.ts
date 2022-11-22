import { doubleOut, masterOut, singleOut } from '../Helper/Arrange';
import { convertScoreToNumber } from '../Helper/Converter';
import { isBust, isDoubleOut, isMasterOut, isSingleOut } from '../Helper/OutOption';
import Player from '../Player/Player';

class ArrangeGame {
  private settings: ArrangeGameSettings;
  private targetOutCount: number = 8;
  private player: Player = new Player('Player1');
  private roundScore: point[] = [];
  private targets: number[] = [];

  constructor(
    settings: ArrangeGameSettings = { range: 0, out: 'single', simulation: true, separate: false },
  ) {
    this.settings = settings;
    this.targets.push(
      this.getNextTarget(this.targets.length, this.settings.out, this.settings.targets),
    );
  }
  resumeGame(progress: ArrangeGameProgress) {
    for (const round of progress.score) {
      this.player.roundScore(round);
    }
    this.targetOutCount = progress.targetOutCont;
    this.roundScore = progress.roundScore;
    this.targets = progress.targets;
    this.settings = progress.settings;
  }
  getSettings() {
    return this.settings;
  }
  addScore(score: point) {
    if (this.roundScore.length >= 3) return;
    this.roundScore.push(score);
    if (this.roundScore.length <= 2 && this.getCurrentTarget() <= 0) {
      while (this.roundScore.length < 3) this.roundScore.push('0');
    }
  }
  removeScore() {
    this.roundScore = [];
  }
  getRoundScore() {
    return this.roundScore;
  }
  roundChange() {
    if (this.roundScore.length > 3) return;
    if (this.getCurrentTarget() === 0)
      this.targets.push(
        this.getNextTarget(this.targets.length, this.settings.out, this.settings.targets),
      );
    this.player.roundScore(this.roundScore);
    this.roundScore = [];
  }
  getCurrentTarget() {
    const scores = [...this.player.getScore(), this.roundScore];
    return this.calcTargetCount(scores, this.targets, this.settings.out, this.settings.separate).t;
  }
  getLastTargetOutCount() {
    const scores = [...this.player.getScore(), this.roundScore, []];
    return this.calcTargetCount(scores, this.targets, this.settings.out, this.settings.separate).c;
  }
  getTargetOutCount() {
    return this.targetOutCount;
  }
  getRoundCount() {
    return this.player.getScore().length + 1;
  }
  isFinish() {
    const scores = [...this.player.getScore(), this.roundScore, []];
    return (
      this.calcTargetCount(scores, this.targets, this.settings.out, this.settings.separate).c === 0
    );
  }
  getTarget(): number {
    return this.targets.at(-1) || 0;
  }
  getTargets() {
    return this.targets;
  }
  getProgressJson(): ArrangeGameProgress {
    return {
      roundScore: this.roundScore,
      score: this.player.getScore(),
      targets: this.targets,
      targetOutCont: this.targetOutCount,
      settings: this.settings,
    };
  }
  private calcTargetCount(rounds: point[][], targets: number[], out: OutOption, separate: boolean) {
    let lastTarget = targets[0];
    return rounds.reduce(
      (pre, crr, i) => {
        if (pre.t < 0) pre.t = lastTarget;
        pre.t = this.calcRound(crr, pre.t, out, separate);
        if (pre.t > 0) lastTarget = pre.t;
        if (pre.t === 0 && i !== rounds.length - 1) {
          pre.i += 1;
          pre.c -= 1;
          pre.t = targets[pre.i] || 0;
          lastTarget = pre.t;
        }
        return pre;
      },
      { i: 0, c: this.targetOutCount, t: targets[0] },
    );
  }
  private calcRound(round: point[], target: number, out: OutOption, separate: boolean) {
    return round.reduce((pre, crr) => {
      return this.calcTarget(pre, crr, out, separate);
    }, target);
  }
  private calcTarget(t: number, s: point, out: OutOption, separate: boolean) {
    if (t === 0) return 0;
    const outOption = out === 'master' ? isMasterOut : out === 'double' ? isDoubleOut : isSingleOut;
    if (outOption(t, s, separate)) return 0;
    const target = t - convertScoreToNumber(s, separate);
    if (isBust(target, out)) return -1;
    return target;
  }
  private getNextTarget(index: number, out: OutOption, targets?: number[]) {
    if (targets && targets[index]) return targets[index];
    const table = out === 'master' ? masterOut : out === 'double' ? doubleOut : singleOut;
    return table[Math.floor(Math.random() * table.length)];
  }
}

export default ArrangeGame;
