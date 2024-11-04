// @split-string
export function getSplitString(d) {
  const getString = d;

  const resString = getString.split(' ').join('_');
  return resString;
}

export function getSplitStringCapital(d) {
  const getString = d;

  const resString = getString
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join('');

  return resString;
}

// @random-characters
export function getRandomCharacters(q) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  // @generate a random 6-character string
  let randomString = '';

  for (let i = 0; i < q; i++) {
    const rndmIndex = Math.floor(Math.random() * chars.length);
    randomString += chars[rndmIndex];
  }

  return { data: randomString };
}

// @combine-array
export function getCombineArr(data1, data2) {
  const a = data1;
  const b = data2;

  const setMerged = a?.map((res, i) => {
    const productDetail = b?.find((i) => i.id_product === res.documentId);

    return {
      ...res,
      ...productDetail,
    };
  });

  return setMerged;
}
