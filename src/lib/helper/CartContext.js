import DOMPurify from 'dompurify';
import {
  generateTicketAttendeeCode,
  generateCreateOrderCode,
} from '@lib/helper/Configuration';

// @total-product(Cart)
export function getTotalProduct(quantity, price) {
  return quantity * price;
}
// @total(Cart)
export function getTotalCart(data) {
  const getTotal_IDR = data?.reduce((acc, item) => {
    const price = item.priceSale ?? item.price ?? 0;
    return acc + parseInt(price, 10) * (item.quantity || 0);
  }, 0);
  return getTotal_IDR;
}

// @calculate(discont)
export function calculateDiscount(setCoupon, totalCart, setPrice) {
  const discountAmount = parseFloat(setCoupon?.amount) || 0;
  const calculatedDiscount =
    discountAmount === 100
      ? totalCart * (discountAmount / 100)
      : setPrice * (discountAmount / 100);
  return calculatedDiscount;
}
export function calculateDiscountCheckout(setCoupon, totalCart, setPrice) {
  const setTax_Rate = 0.11;
  const discountAmount = parseFloat(setCoupon?.amount) || 0;
  const calculatedDiscount =
    discountAmount === 100
      ? totalCart * (discountAmount / 100)
      : setPrice * (discountAmount / 100);
  const totalDiscount = totalCart - calculatedDiscount;
  const taxAmount = totalDiscount * setTax_Rate;
  const totalWithTax = totalDiscount + taxAmount;
  return totalWithTax;
}

// @biling-data
export function setBillingData(data) {
  // @sanitize(Fields)
  const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();
  const rs = {
    data: {
      customerId: sntzeFld(generateCreateOrderCode()),
      firstName: sntzeFld(data.firstname),
      lastName: sntzeFld(data.lastname),
      email: sntzeFld(data.email.toLowerCase()),
      phone: sntzeFld(data.phone),
      company: sntzeFld(data.company),
      websiteUrl: sntzeFld(
        data.haveCompany ? (data.websiteUrl ? data.websiteUrl : '-') : '-'
      ),
    },
  };
  return rs;
}
export function setHbSptCustomerData(rsCustomer, ipAdress) {
  const rs = {
    fields: [
      {
        objectTypeId: '0-1',
        name: 'firstname',
        value: rsCustomer?.firstName,
      },
      {
        objectTypeId: '0-1',
        name: 'lastname',
        value: rsCustomer?.lastName,
      },
      {
        objectTypeId: '0-1',
        name: 'email',
        value: rsCustomer?.email,
      },
      {
        objectTypeId: '0-1',
        name: 'phone',
        value: rsCustomer?.phone,
      },
      {
        objectTypeId: '0-2',
        name: 'name',
        value: rsCustomer?.company,
      },
      {
        objectTypeId: '0-2',
        name: 'website',
        value: rsCustomer?.websiteUrl,
      },
    ],
    context: {
      pageUri: 'https://coinfest.asia/checkout',
      pageName: 'Checkout | Coinfest Asia 2025',
      ipAddress: ipAdress,
    },
  };
  return rs;
}
export function setHbSptAttendeeData(data, i, group, ipAdress) {
  // @sanitize(Fields)
  const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();
  const prefix = `Attndee${i + 1}_${group}`;
  const getField = (field) => sntzeFld(data[`${field}${prefix}`]);
  const rs = {
    fields: [
      {
        objectTypeId: '0-1',
        name: 'firstname',
        value: getField('firstname'),
      },
      { objectTypeId: '0-1', name: 'lastname', value: getField('lastname') },
      {
        objectTypeId: '0-1',
        name: 'email',
        value: getField('email').toLowerCase(),
      },
      {
        objectTypeId: '0-1',
        name: 'phone',
        value: sntzeFld(`phone${i + 1}_${group}`),
      },
      {
        objectTypeId: '0-1',
        name: 'telegram_account',
        value: getField('telegramAccount'),
      },
      { objectTypeId: '0-1', name: 'country', value: getField('country') },
      {
        objectTypeId: '0-2',
        name: 'name',
        value: data.haveCompany ? getField('company') : 'N/A',
      },
      {
        objectTypeId: '0-1',
        name: 'job_title_position',
        value: data.haveCompany ? getField('jobPosition') : '-',
      },
      {
        objectTypeId: '0-2',
        name: 'company_focus',
        value: data.haveCompany ? getField('companyFocus') : '-',
      },
      {
        objectTypeId: '0-1',
        name: 'company_size',
        value: data.haveCompany ? getField('companySize') : '-',
      },
      {
        objectTypeId: '0-1',
        name: 'what_type_of_connections_and_networking_do_you_hope_to_achieve_at_coinfest_asia_',
        value: getField('whatTypeConnectionNetworking'),
      },
      {
        objectTypeId: '0-1',
        name: 'where_did_you_hear_about_coinfest_asia_2024_',
        value: Array.isArray(data[`didYouHearAbout${prefix}`])
          ? data[`didYouHearAbout${prefix}`].join(';')
          : getField('didYouHearAbout'),
      },
    ],
    context: {
      pageUri: 'https://coinfest.asia/checkout',
      pageName: 'Attendee | Coinfest Asia 2025',
      ipAddress: ipAdress,
    },
  };
  return rs;
}
export function setAttendeeData(data, attendee, group, idCustomer, idProducts) {
  // @sanitize(Fields)
  const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();
  const rs = {
    attendeeId: sntzeFld(generateTicketAttendeeCode()),
    firstName: sntzeFld(data[`firstnameAttndee${attendee}_${group}`]),
    lastName: sntzeFld(data[`lastnameAttndee${attendee}_${group}`]),
    email: sntzeFld(data[`emailAttndee${attendee}_${group}`].toLowerCase()),
    telephone: sntzeFld(data[`phone${attendee}_${group}`]),
    telegramAccount: sntzeFld(
      data[`telegramAccountAttndee${attendee}_${group}`]
    ),
    country: sntzeFld(data[`countryAttndee${attendee}_${group}`]),
    company: sntzeFld(
      data[`haveCompanyAttndee${attendee}_${group}`]
        ? data[`companyAttndee${attendee}_${group}`]
        : 'N/A'
    ),
    position: sntzeFld(
      data[`haveCompanyAttndee${attendee}_${group}`]
        ? data[`jobPositionAttndee${attendee}_${group}`]
        : '-'
    ),
    companyFocus: sntzeFld(
      data[`haveCompanyAttndee${attendee}_${group}`]
        ? data[`companyFocusAttndee${attendee}_${group}`]
        : '-'
    ),
    companySize: sntzeFld(
      data[`haveCompanyAttndee${attendee}_${group}`]
        ? data[`companySizeAttndee${attendee}_${group}`]
        : '-'
    ),
    whatTypeOfConnectionsAndNetworkingDoYouHopeToAchieveAtTheEvent: sntzeFld(
      data[`whatTypeConnectionNetworkingAttndee${attendee}_${group}`]
    ),
    whereDidYouHearAboutCoinfestAsia2024: sntzeFld(
      data[`didYouHearAboutAttndee${attendee}_${group}`]
    ),
    customer: { connect: [{ documentId: idCustomer }] },
    product: { connect: [{ documentId: idProducts }] },
  };
  return rs;
}

// @create-order
export function getCreateOrder(
  totalWithDiscount,
  setIdCustomer,
  setProducts,
  setCoupon
) {
  const rs = {
    data: {
      paymentStatus: 'Pending',
      orderTotal: totalWithDiscount,
      customer: { connect: [{ documentId: setIdCustomer }] },
      products: {
        connect: setProducts?.map((product) => ({
          documentId: product.documentId,
        })),
      },
      coupons: setCoupon
        ? { connect: [{ documentId: setCoupon?.documentId }] }
        : null,
    },
  };
  return rs;
}
