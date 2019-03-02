export interface ScoreDataObejct {
  value: number,
  income: number,
  health: number,
  past: number,
  future: number,
  management: number,
  misc: number,
  total: number,
  sentence: string
}

export interface InfoDataObejct {
  description: string,
  cover_small_url: string,
  logo_url: string
}

export interface ScoreObject {
  data: ScoreDataObejct
}

export interface InfoObject {
  data: InfoDataObejct
}

export interface GridState {
  offset: number;
  isLastFetch: boolean;
  loading: boolean;
  stocks: Array<StockObject>;
}

export default interface StockObject {
  name: string,
  score: ScoreObject,
  info: InfoObject,
  unique_symbol: string
}