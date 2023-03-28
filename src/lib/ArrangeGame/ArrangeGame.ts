import { doubleOut, masterOut, singleOut } from '../Helper/Arrange';
import { convertScoreToNumber } from '../Helper/Converter';
import { isBust, isDoubleOut, isMasterOut, isSingleOut } from '../Helper/OutOption';
import Player from '../Player/Player';

class ArrangeGame implements Game, GameData<ArrangeProgress, ArrangeResult> {
  private settings: ArrangeSettings;
  private targetOutCount: number = 8;
  private player: Player = new Player('Player1');
  private roundScore: point[] = [];
  private roundVector: Vector2D[] = [];
  private targets: number[] = [];
  private static readonly defaultSettings: ArrangeSettings = {
    range: { x: 0, y: 0 },
    out: 'single',
    simulation: true,
    hard: false,
    separate: false,
    game: false,
    pro: false,
  };

  constructor(settings: ArrangeSettings = ArrangeGame.defaultSettings) {
    this.settings = settings;
    const { out, targets, game } = settings;
    if (game) {
      this.targetOutCount = 1;
      if (this.targets.length === 0) this.targets.push(501);
      return;
    }
    this.targets.push(this.getNextTarget(this.targets.length, out, targets));
  }
  getSettings() {
    return this.settings;
  }
  getCurrentTarget() {
    const { out, separate } = this.settings;
    return this.parseScore(this.getScore(), this.targets, out, separate).t;
  }
  getCurrentRoundTarget() {
    const { out, separate } = this.settings;
    return this.parseScore([...this.player.getScore(), []], this.targets, out, separate).t;
  }
  getLastTargetOutCount() {
    const scores = [...this.getScore(), []];
    const { out, separate } = this.settings;
    return this.parseScore(scores, this.targets, out, separate).c;
  }
  getTargetOutCount() {
    return this.targetOutCount;
  }
  getRoundCount() {
    return this.player.getScore().length + 1;
  }
  getDartsCount(): number {
    return this.getScore().flat().length;
  }
  getTarget(): number {
    return this.targets.at(-1) || 0;
  }
  getTargets() {
    return this.targets;
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
  addVector(vector: Vector2D) {
    if (this.roundVector.length >= 3) return;
    this.roundVector.push(vector);
    console.log('addVector', this.roundVector);
  }
  removeVectors() {
    this.roundVector = [];
    console.log('removeVectors', this.roundVector);
  }
  getVectors() {
    console.log('getVectors', this.roundVector);
    return this.roundVector;
  }
  getRoundScore() {
    return this.roundScore;
  }
  getArrangeScore() {
    const { out, separate } = this.settings;
    return this.parseScore(this.getScore(), this.targets, out, separate).r as ArrangeOut[];
  }
  getScore() {
    return [...this.player.getScore(), this.roundScore];
  }
  roundChange() {
    if (this.roundScore.length > 3) return;
    if (this.getCurrentTarget() === 0) {
      const { out, targets } = this.settings;
      this.targets.push(this.getNextTarget(this.targets.length, out, targets));
    }
    this.player.roundScore(this.roundScore);
    this.roundScore = [];
    this.roundVector = [];
  }
  isFinished() {
    const scores = [...this.player.getScore(), this.roundScore, []];
    const { out, separate } = this.settings;
    return this.parseScore(scores, this.targets, out, separate).c === 0;
  }
  resumeGame(progress: ArrangeProgress) {
    for (const round of progress.score) this.player.roundScore(round);
    this.targetOutCount = progress.targetOutCount;
    this.roundScore = progress.roundScore;
    this.roundVector = progress.vector;
    this.targets = progress.targets;
    this.settings = progress.settings;
  }
  getGameProgress(): ArrangeProgress {
    return {
      roundScore: this.roundScore,
      score: this.player.getScore(),
      vector: this.roundVector,
      targets: this.targets,
      targetOutCount: this.targetOutCount,
      settings: this.settings,
    };
  }
  getGameResult(): ArrangeResult {
    return {
      result: this.getArrangeScore(),
      settings: this.settings,
      playedAt: new Date().toJSON(),
    };
  }
  private parseScore(rounds: point[][], targets: number[], out: OutOption, separate: boolean) {
    return rounds.reduce(
      (pre, crr, i) => {
        if (pre.t < 0) pre.t = pre.l;
        pre.t = this.calcRound(crr, pre.t, out, separate);
        pre.r[pre.i].score.push(crr);
        if (pre.t > 0) pre.l = pre.t;
        if (pre.t === 0 && i !== rounds.length - 1) {
          pre.i += 1;
          pre.c -= 1;
          pre.t = targets[pre.i] || 0;
          pre.l = pre.t;
          pre.r.push({ target: pre.t, score: [] as point[][] });
        }
        return pre;
      },
      {
        i: 0,
        c: this.targetOutCount,
        t: targets[0],
        l: targets[0],
        r: [{ target: targets[0], score: [] as point[][] }],
      },
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
