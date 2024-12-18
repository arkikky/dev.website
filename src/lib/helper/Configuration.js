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
export function getJoinString(d) {
  const getString = d;
  const resString = getString.split(' ').join('');
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
  const randomNumber = Math.floor(100000000000 + Math.random() * 900000000000);
  return `C-${randomNumber}`;
}

// @generate(Ticket Attendee Code)
export function generateTicketAttendeeCode() {
  const randomNumber = Math.floor(100000000000 + Math.random() * 900000000000);
  return `A-${randomNumber}`;
}

// @calculat-countdown(Date)
export function calculateCountdown(date) {
  const mrgdDate = Math.max(0, date - new Date());
  const toTimeUnits = (unit) =>
    Math.floor(mrgdDate / unit) %
    (unit === 1000 * 60 * 60 * 24 ? Infinity : 24);
  return {
    days: toTimeUnits(1000 * 60 * 60 * 24),
    hours: toTimeUnits(1000 * 60 * 60),
    minutes: toTimeUnits(1000 * 60),
    seconds: toTimeUnits(1000),
  };
}

// @combine(Array)
export function getCombineMerged(data1, data2) {
  const a = data1;
  const b = data2;
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
    stock: parseInt(product?.stock),
    quantity: product.quantity >= 15 ? 15 : product.quantity,
  }));
  return filteredProducts;
}
