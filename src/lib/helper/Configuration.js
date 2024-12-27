// @smooth-scroll
export function smoothLeftScroll(container, targetScroll, duration = 1000) {
  const startScroll = container.scrollLeft;
  const distance = targetScroll - startScroll;
  const startTime = performance.now();

  const animateScroll = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easeOutQuad = 1 - Math.pow(1 - progress, 2);
    container.scrollLeft = startScroll + distance * easeOutQuad;
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };
  requestAnimationFrame(animateScroll);
}

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

// @discount-price
export function getPriceDiscountDisplay(d) {
  if (!d?.price || !d?.priceSale) return null;
  return d.price;
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

// @valid-time(Payment)
export function isValidationMoreTimeMinutes(paidAt, duration = 6) {
  const paidAtTime = new Date(paidAt).getTime();
  const currentTime = new Date().getTime();
  // @calculate-time
  const differenceInMilliseconds = currentTime - paidAtTime;
  const rs = differenceInMilliseconds > duration * 60 * 1000;
  return rs;
}
