import { CHARACTERS } from "../components/Character/constants";

export const random = (min = 0, max = 256) => {
  const range = max - min + 1;
  const bytes_needed = Math.ceil(Math.log2(range) / 8);
  const cutoff = Math.floor(256 ** bytes_needed / range) * range;
  const bytes = new Uint8Array(bytes_needed);
  let value;
  do {
    crypto.getRandomValues(bytes);
    value = bytes.reduce((acc, x, n) => acc + x * 256 ** n, 0);
  } while (value >= cutoff);
  return min + (value % range);
};
export const randomCharacter = () => {
  const max = CHARACTERS.length;
  const r = random(0, max - 1);
  return CHARACTERS[r];
};

export const randomMax = () => {
  return random(25, 2000);
};
