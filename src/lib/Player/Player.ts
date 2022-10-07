export default class Player {
  private name: string
  private rounds: point[][] = []

  constructor(name: string) {
    this.name = name
  }
  getName() {
    return this.name
  }
  roundScore(score: point[]) {
    this.rounds.push(score)
  }
  getScore() {
    return this.rounds
  }
  updateName(name: string) {
    this.name = name
  }
}
