const isGameHistory = (instance: any) => {
  if (!instance) return false
  if (typeof instance !== 'object') return false
  for (const i of instance) {
    if (typeof i.game !== 'string') return false
    if (typeof i.setting !== 'object') return false
    if (typeof i.setting.targetCount !== 'number') return false
    if (typeof i.result !== 'object') return false
    if (typeof i.result.count !== 'number') return false
    if (typeof i.scores !== 'object') return false
    for (const s of i.scores) {
      if (typeof s !== 'object') return false
      if (typeof s.number !== 'number') return false
      if (typeof s.count !== 'number') return false
      if (typeof s.total !== 'number') return false
    }
    if (typeof i.playedAt !== 'string') return false
  }
  return true
}

export { isGameHistory }
