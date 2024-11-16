// @total(Cart)
export function getTotalCart(data) {
  const getTotal_IDR = data?.reduce(
    (acc, items) =>
      acc + parseInt(items.price ?? items.priceSale) * items.quantity,
    0
  );

  return getTotal_IDR;
}

// // @calculate(discont)
export function calculateDiscountCheckout(setCoupon, totalCart, setPrice) {
  const setTax_Rate = 0.11;

  const discountAmount = parseFloat(setCoupon.amount) || 0;
  const calculatedDiscount =
    discountAmount === 100
      ? totalCart * (discountAmount / 100)
      : setPrice * (discountAmount / 100);

  const totalDiscount = totalCart - calculatedDiscount;
  const taxAmount = totalDiscount * setTax_Rate;
  const totalWithTax = totalDiscount + taxAmount;

  return totalWithTax;
}

// // @auth-token
// export async function authSession_Token(products) {
//   const authToken = hasCookie('_athutkca25') ? hasCookie('_athutkca25') : null;

//   if (authToken !== true) {
//     if (products !== undefined) {
//       try {
//         const fetchAuth = await fetch('/api/auth/auth-token', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
//           },
//           body: JSON.stringify({ products }),
//         });

//         if (!fetchAuth) {
//           throw new Error('Network response was not ok');
//         }

//         const rsAuth = await fetchAuth.json();

//         if (rsAuth.status === true) {
//           setCookie('_athutkca25', rsAuth.token, {
//             maxAge: 3600,
//             // httpOnly: true,
//             // secure: true,
//             sameSite: 'strict',
//           });

//           return true;
//         } else {
//           console.error('Failed to add to cart');
//           return false;
//         }
//       } catch (error) {
//         console.error('Error adding to cart:', error);
//         return false;
//       }
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }

// // @verify-token
// export async function verifySession_Token(token) {
//   const authToken = hasCookie('_athutkca25') ? hasCookie('_athutkca25') : null;

//   if (authToken === true) {
//     if (token !== undefined) {
//       try {
//         const fetchAuth = await fetch('/api/auth-verify/verify-token', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ token }),
//         });

//         if (!fetchAuth) {
//           throw new Error('Network response was not ok');
//         }

//         const rsAuth = await fetchAuth.json();

//         if (rsAuth.status === true) {
//           return true;
//         } else {
//           return false;
//         }
//       } catch (error) {
//         console.error('Error adding to cart:', error);
//         return false;
//       }
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }
