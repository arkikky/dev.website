import CryptoJS from 'crypto-js';

// @lib/controller & helper
import { getFetchUrl_FormData, updateData } from '@lib/controller/API';

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
// @render(text using boren style)
export function renderText(t, styLetters, dfltCls, specialCls) {
  return t?.split('').map((char, i) =>
    styLetters.includes(char) ? (
      <span key={i} className={specialCls}>
        {char}
      </span>
    ) : (
      <span key={i} className={dfltCls}>
        {char}
      </span>
    )
  );
}
// @format(count board)
export const formatCount = (c) => {
  let formatted = c?.toLocaleString();
  return formatted + '+';
};

// @dom-count
export const getDOMParseCount = (t) => {
  if (typeof t === 'undefined' || t === null) return;
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(t, 'text/html');
  const plainText = parsedDocument.body.textContent || '';
  return plainText.trim().length;
};

// @truncate(text)
export const truncateText = (t, maxLength) => {
  if (t?.length <= maxLength) {
    return t;
  }
  return t?.slice(0, maxLength) + '...';
};

// @split(string)
export const getSplitString = (d) => {
  const getString = d;
  const resString = getString.split(' ').join('_');
  return resString;
};
export const getJoinString = (d) => {
  const getString = d;
  const resString = getString.split(' ').join('');
  return resString;
};
export const getSplitStringCapital = (d) => {
  const getString = d;
  const resString = getString
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join('');
  return resString;
};

// @random(characters)
export const getRandomCharacters = (q) => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  // @generate a random 6-character string
  let randomString = '';
  for (let i = 0; i < q; i++) {
    const rndmIndex = Math.floor(Math.random() * chars.length);
    randomString += chars[rndmIndex];
  }
  return { data: randomString };
};
// @generate(order code)
export const generateCreateOrderCode = () => {
  const randomNumber = Math.floor(100000000000 + Math.random() * 900000000000);
  return `C-${randomNumber}`;
};
// @generate(ticket attendee code)
export const generateTicketAttendeeCode = () => {
  const randomNumber = Math.floor(100000000000 + Math.random() * 900000000000);
  return `A-${randomNumber}`;
};
// @split-groups
export const splitIntoGroups = (d, grpCount) => {
  const groups = Array?.from({ length: grpCount }, () => []);
  d?.forEach((items, i) => {
    const groupIndex = i % grpCount;
    groups[groupIndex].push(items);
  });
  return groups;
};

// @calculate-countdown(date)
export const calculateCountdown = (date) => {
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
};
// @discount-price
export const getPriceDiscountDisplay = (d) => {
  if (!d?.price || !d?.priceSale) return null;
  return d.price;
};

// @reduce-array
export const getReduceArray = (arr, selctdIndex) => {
  const selectedIdx = selctdIndex;
  const rs = arr?.filter((item, idx) => selectedIdx.includes(idx));
  return rs;
};

// @combine(array)
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
    id: product?.id,
    documentId: product?.documentId,
    productId: product?.productId,
    name: product?.name,
    price: product?.price,
    priceSale: product?.priceSale,
    stock: parseInt(product?.stock),
    quantity: product?.quantity >= 15 ? 15 : product?.quantity,
  }));
  return filteredProducts;
}

// @valid-time(payment)
export function isValidationMoreTimeMinutes(paidAt, duration = 6) {
  const paidAtTime = new Date(paidAt).getTime();
  const currentTime = new Date().getTime();
  // @calculate-time
  const differenceInMilliseconds = currentTime - paidAtTime;
  const rs = differenceInMilliseconds > duration * 60 * 1000;
  return rs;
}

// @encrypt-code
export function encodeData(d) {
  const wordArray = CryptoJS.enc.Utf8.parse(JSON.stringify(d));
  return CryptoJS.enc.Base64.stringify(wordArray);
}
export function decodeData(ed) {
  const wordArray = CryptoJS.enc.Base64.parse(ed);
  return JSON.parse(CryptoJS.enc.Utf8.stringify(wordArray));
}

// @convert-url(to blob)
export async function convertQrCodeToBlob(
  qrCodeUrl,
  id,
  attendeeId,
  documentId,
  fullname
) {
  const [header, base64Data] = qrCodeUrl?.split(',');
  const mimeString = header.match(/:(.*?);/)[1];
  const byteString = atob(base64Data);
  const buffer = Uint8Array.from(byteString, (char) => char?.charCodeAt(0));
  const pngBlobQrCode = new Blob([buffer], {
    type: mimeString,
  });
  const newImageInformtn = {
    name: `QrCode_${attendeeId}.png`,
    alternativeText: `Coinfest Asia 2025 ${fullname} Attendee`,
    caption: `Coinfest Asia 2025 ${fullname} Attendee`,
  };
  const formData = new FormData();
  formData.append('files', pngBlobQrCode, `QrCode_${attendeeId}.png`);
  formData.append('fileInfo', JSON.stringify(newImageInformtn));
  formData.append('ref', 'api::attendee.attendee');
  formData.append('refId', `${id + 1}`);
  formData.append('field', `qrCode`);
  const rsQrCodeGenerate = await getFetchUrl_FormData(
    'https://api.coinfest.asia/api/upload?',
    formData
  );
  if (rsQrCodeGenerate) {
    const addedQrCode_Attendee = await updateData(
      `/api/attendees/${documentId}?populate=*`,
      {
        data: {
          qrCodeUID: rsQrCodeGenerate[0]?.hash,
          qrCode: rsQrCodeGenerate[0]?.id,
        },
      }
    );
    return rsQrCodeGenerate[0];
  }
}
