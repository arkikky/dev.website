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
  const total = data?.reduce((acc, i) => {
    const price = i.priceSale ?? i.price ?? 0;
    return (
      acc +
      (i?.documentId === 'sn4ujm0d1ebbc8lme1ihzsa9'
        ? parseInt(price, 10)
        : i?.quantity * parseInt(price, 10))
    );
  }, 0);
  return total;
}

// @calculate(discount)
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

// @groupped-attendee
export function setGroupedAttendees(p, att) {
  const grpArr = p?.map((product) => {
    const attendeesForProduct = att
      .filter(
        ({ attendee }) => attendee?.product.documentId === product?.documentId
      )
      .map(({ attendee }) => ({
        id: attendee?.id,
        documentId: attendee?.documentId,
        firstName: attendee?.firstName,
        lastName: attendee?.lastName,
        email: attendee?.email,
        telephone: attendee?.telephone,
        telegramAccount: attendee?.telegramAccount || null,
        country: attendee?.country,
        attendeeId: attendee?.attendeeId,
        position: attendee?.position,
        company: attendee?.company,
        companyFocus: attendee?.companyFocus,
        companySize: attendee?.companySize,
        whatTypeOfConnectionsAndNetworkingDoYouHopeToAchieveAtTheEvent:
          attendee?.whatTypeOfConnectionsAndNetworkingDoYouHopeToAchieveAtTheEvent,
        whereDidYouHearAboutCoinfestAsia2024:
          attendee?.whereDidYouHearAboutCoinfestAsia2024,
        isApproved: attendee?.isApproved,
      }));

    return {
      attendees: attendeesForProduct,
      id: product?.id,
      documentId: product?.documentId,
      name: product?.name,
      price: product?.price,
      priceSale: product?.priceSale,
      quantity: attendeesForProduct.length,
    };
  });
  return grpArr;
}

// @biling-data
export function setBillingData(d, grp) {
  // @sanitize(fields)
  const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();
  const rs = {
    data: {
      customerId: sntzeFld(generateCreateOrderCode()),
      firstName: sntzeFld(d?.[`firstnameAttndee1_${grp}`]),
      lastName: sntzeFld(d?.[`lastnameAttndee1_${grp}`]),
      email: sntzeFld(d?.[`emailAttndee1_${grp}`].toLowerCase()),
      phone: sntzeFld(d?.[`phoneAttndee1_${grp}`]),
      company: sntzeFld(
        d?.[`haveCompanyAttndee1_${grp}`]
          ? d?.[`companyAttndee1_${grp}`]
            ? d?.[`companyAttndee1_${grp}`]
            : 'N/A'
          : 'N/A'
      ),
      websiteUrl: sntzeFld(
        d?.[`haveCompanyAttndee1_${grp}`]
          ? d?.[`websiteUrlAttndee1_${grp}`]
            ? d?.[`websiteUrlAttndee1_${grp}`]
            : '-'
          : '-'
      ),
    },
  };
  return rs;
}
// @biling-data-detail
export function setUpgradeBillingDetailData(d) {
  // @sanitize(fields)
  const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();
  const rs = {
    data: {
      customerId: sntzeFld(generateCreateOrderCode()),
      firstName: sntzeFld(d?.[`firstnameAttndeeDetail`]),
      lastName: sntzeFld(d?.[`lastnameAttndeeDetail`]),
      email: sntzeFld(d?.[`emailAttndeeDetail`].toLowerCase()),
      phone: sntzeFld(d?.[`phoneAttndeeDetail`]),
      company: sntzeFld(
        d?.[`haveCompanyAttndeeDetail`]
          ? d?.[`companyAttndeeDetail`]
            ? d?.[`companyAttndeeDetail`]
            : 'N/A'
          : 'N/A'
      ),
      websiteUrl: sntzeFld(
        d?.[`haveCompanyAttndeeDetail`]
          ? d?.[`websiteUrlAttndeeDetail`]
            ? d?.[`websiteUrlAttndeeDetail`]
            : '-'
          : '-'
      ),
    },
  };
  return rs;
}
export function setHbSptCustomerData(d, ip, isUpgrade) {
  const rs = {
    fields: [
      {
        objectTypeId: '0-1',
        name: 'firstname',
        value: d?.firstName,
      },
      {
        objectTypeId: '0-1',
        name: 'lastname',
        value: d?.lastName,
      },
      {
        objectTypeId: '0-1',
        name: 'email',
        value: d?.email,
      },
      {
        objectTypeId: '0-1',
        name: 'phone',
        value: d?.phone,
      },
      {
        objectTypeId: '0-2',
        name: 'name',
        value: d?.company,
      },
      {
        objectTypeId: '0-2',
        name: 'website',
        value: d?.websiteUrl,
      },
      {
        objectTypeId: '0-1',
        name: 'upgrade_ticket',
        value: isUpgrade,
      },
    ],
    context: {
      pageUri: 'https://coinfest.asia/checkout',
      pageName: 'Checkout | Coinfest Asia 2025',
      ipAddress: ip,
    },
  };
  return rs;
}
export function setHbSptAttendeeData(rslt, ip, isUpgrade) {
  // @sanitize(Fields)
  const rs = {
    fields: [
      {
        objectTypeId: '0-1',
        name: 'firstname',
        value: rslt?.firstName,
      },
      {
        objectTypeId: '0-1',
        name: 'lastname',
        value: rslt?.lastName,
      },
      {
        objectTypeId: '0-1',
        name: 'email',
        value: rslt?.email,
      },
      {
        objectTypeId: '0-1',
        name: 'phone',
        value: rslt?.telephone,
      },
      {
        objectTypeId: '0-1',
        name: 'telegram_account',
        value: rslt?.telegramAccount ? rslt?.telegramAccount : '-',
      },
      {
        objectTypeId: '0-1',
        name: 'country',
        value: rslt?.country,
      },
      {
        objectTypeId: '0-2',
        name: 'name',
        value: rslt?.company,
      },
      {
        objectTypeId: '0-1',
        name: 'job_title_position',
        value: rslt?.position,
      },
      {
        objectTypeId: '0-2',
        name: 'company_focus',
        value: rslt?.companyFocus,
      },
      {
        objectTypeId: '0-1',
        name: 'company_size',
        value: rslt?.companySize,
      },
      {
        objectTypeId: '0-1',
        name: 'what_type_of_connections_and_networking_do_you_hope_to_achieve_at_coinfest_asia_',
        value:
          rslt?.whatTypeOfConnectionsAndNetworkingDoYouHopeToAchieveAtTheEvent,
      },
      {
        objectTypeId: '0-1',
        name: 'where_did_you_hear_about_coinfest_asia_2024_',
        value: rslt?.whereDidYouHearAboutCoinfestAsia2024,
      },
      {
        objectTypeId: '0-1',
        name: 'upgrade_ticket',
        value: isUpgrade,
      },
    ],
    context: {
      pageUri: 'https://coinfest.asia/checkout',
      pageName: 'Attendee | Coinfest Asia 2025',
      ipAddress: ip,
    },
  };
  return rs;
}
export function setAttendeeData(data, attendee, group, idCustomer, idProducts) {
  // @sanitize(fields)
  const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();
  const rs = {
    attendeeId: sntzeFld(generateTicketAttendeeCode()),
    firstName: sntzeFld(data[`firstnameAttndee${attendee}_${group}`]),
    lastName: sntzeFld(data[`lastnameAttndee${attendee}_${group}`]),
    email: sntzeFld(data[`emailAttndee${attendee}_${group}`].toLowerCase()),
    telephone: sntzeFld(data[`phoneAttndee${attendee}_${group}`]),
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
    websiteUrl: sntzeFld(
      data[`haveCompanyAttndee${attendee}_${group}`]
        ? data[`websiteUrlAttndee${attendee}_${group}`]
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
export function setAttendeeDataDetail(data, idCustomer, idProducts) {
  // @sanitize(fields)
  const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();
  const rs = {
    attendeeId: sntzeFld(generateTicketAttendeeCode()),
    firstName: sntzeFld(data[`firstnameAttndeeDetail`]),
    lastName: sntzeFld(data[`lastnameAttndeeDetail`]),
    email: sntzeFld(data[`emailAttndeeDetail`].toLowerCase()),
    telephone: sntzeFld(data[`phoneAttndeeDetail`]),
    telegramAccount: sntzeFld(data[`telegramAccountAttndeeDetail`]),
    country: sntzeFld(data[`countryAttndeeDetail`]),
    company: sntzeFld(
      data[`haveCompanyAttndeeDetail`] ? data[`companyAttndeeDetail`] : 'N/A'
    ),
    position: sntzeFld(
      data[`haveCompanyAttndeeDetail`] ? data[`jobPositionAttndeeDetail`] : '-'
    ),
    companyFocus: sntzeFld(
      data[`haveCompanyAttndeeDetail`] ? data[`companyFocusAttndeeDetail`] : '-'
    ),
    companySize: sntzeFld(
      data[`haveCompanyAttndeeDetail`] ? data[`companySizeAttndeeDetail`] : '-'
    ),
    websiteUrl: sntzeFld(
      data[`haveCompanyAttndeeDetail`] ? data[`websiteUrlAttndeeDetail`] : '-'
    ),
    whatTypeOfConnectionsAndNetworkingDoYouHopeToAchieveAtTheEvent: sntzeFld(
      data[`whatTypeConnectionNetworkingAttndeeDetail`]
    ),
    whereDidYouHearAboutCoinfestAsia2024: sntzeFld(
      data[`didYouHearAboutAttndeeDetail`]
    ),
    customer: { connect: [{ documentId: idCustomer }] },
    product: { connect: [{ documentId: idProducts }] },
    isUpgrade: true,
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
// @create-order
export function getUpgradeCreateOrder(totalUpgrade, setIdCustomer, idProducts) {
  const rs = {
    data: {
      paymentStatus: 'Pending',
      orderTotal: totalUpgrade,
      customer: { connect: [{ documentId: setIdCustomer }] },
      products: { connect: [{ documentId: idProducts }] },
      coupons: null,
    },
  };
  return rs;
}
