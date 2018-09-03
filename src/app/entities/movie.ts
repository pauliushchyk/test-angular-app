import { GenreType } from './genre-type';

export interface Movie {
  id: number;
  key: string;
  name: string;
  description: string;
  genres: Array<GenreType>;
  rate: number;
  length: string;
  img: string;
}
