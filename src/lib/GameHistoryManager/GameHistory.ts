import fileDownload from 'js-file-download'
import { db } from '@/db/db'

const saveGameHistory = (history: GameResult) => {
  saveDB(history)
}

const deleteGameHistory = async (id: number | undefined) => {
  if (!id) return
  try {
    await db.gameResult.delete(id)
  } catch (error) {
    console.error(error)
  }
}

const importGameHistory = (gameHistory: GameResult[], overwrite: boolean) => {
  try {
    db.transaction('rw', db.gameResult, () => {
      if (overwrite) db.gameResult.clear()
      for (const history of gameHistory) {
        saveDB(history)
      }
    })
  } catch (error) {
    console.log(error)
  }
}

const exportGameHistory = async () => {
  try {
    const results = await db.gameResult.toArray()
    const json = results.map((r) => {
      delete r.id
      return r
    })
    fileDownload(JSON.stringify(json), 'darts-games-history.json')
  } catch (error) {
    console.error(error)
  }
}

const saveDB = async (history: GameResult) => {
  try {
    await db.gameResult.add(history)
  } catch (error) {
    console.error(error)
  }
}

export { saveGameHistory, deleteGameHistory, importGameHistory, exportGameHistory }
