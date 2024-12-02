// @dom-count
export function getDOMParseCount(t) {
  if (typeof t === 'undefined' || t === null) return;

  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(t, 'text/html');
  const plainText = parsedDocument.body.textContent || '';

  return plainText.trim().length;
}

// @split(String)
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

// @random(Characters)
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

// @generate(Order Code)
export function generateCreateOrderCode() {
  const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
  return `C-${randomNumber}`;
}

// @generate(Ticket Attendee Code)
export function generateTicketAttendeeCode() {
  const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
  return `A-${randomNumber}`;
}

// @combine(Array)
export function getCombineMerged(data1, data2) {
  const a = data1;
  const b = data2;

  // console.log(data2);

  const merged = a?.map((res, i) => {
    const productDetail = b?.find((i) => i.id_product === res.documentId);

    return {
      ...res,
      ...productDetail,
    };
  });

  const filteredProducts = merged?.map((product) => ({
    id: product.id,
    documentId: product.documentId,
    productId: product.productId,
    name: product.name,
    price: product.price,
    priceSale: product.priceSale,
    qty: product.qty,
    quantity: product.quantity >= 5 ? 5 : product.quantity,
  }));

  return filteredProducts;
}
