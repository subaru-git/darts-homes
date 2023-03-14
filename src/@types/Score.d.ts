interface GameScore {
  Scored: string;
  ToGo: string;
  Hits: (point | '-')[] | null;
}
