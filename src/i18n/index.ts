import fr from '../../content/fr.json';

export type Dict = typeof fr;

const dict = fr;

export function t(): Dict {
  return dict;
}
