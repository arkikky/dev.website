// @split-string
export function getSplitString(data) {
  const getString = data;

  const resString = getString.split(' ').join('_');

  return resString;
}

export function getSplitStringCapital(data) {
  const getString = data;

  const resString = getString
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

  return resString;
}

// @random-characters
export function getRandomCharacters(qty) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // @generate a random 6-character string
  let randomString = '';

  for (let i = 0; i < qty; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }

  return { data: randomString };
}