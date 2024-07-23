import { resolve } from 'path';
import { readFileSync } from 'fs';

export const getGames = () => {
  const filePath = resolve('./src/locales/en.json');
  const fileContents = readFileSync(filePath, 'utf8');
  const translations = JSON.parse(fileContents);

  return Object.keys(translations.games);
};
