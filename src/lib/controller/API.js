import getConfig from 'next/config';

// @get .config
const { publicRuntimeConfig } = getConfig();

const baseUrl = `https://api.coinfest.asia`;
const tokenApp = publicRuntimeConfig.token_api;

// @fetch-api
// @get(method)
export async function getFetch(url) {
  const res = await fetch(`${baseUrl}${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Origin: '*',
      Authorization: `Bearer ${tokenApp}`,
    },
    cache: 'no-store',
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });

  return res;
}

export async function getFetchUrl(url) {
  const res = await fetch(`${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Origin: '*',
    },
    cache: 'no-store',
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });

  return res;
}

// @put(method)
export async function putData(url, data) {
  const res = await fetch(`${baseUrl}${url}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Origin: '*',
      Authorization: `Bearer ${tokenApp}`,
    },
    body: JSON.stringify(data),
    cache: 'no-store',
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });

  return res;
}

// @post(method)
export async function pushSubmitData(url, data) {
  const res = await fetch(`${baseUrl}${url}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Origin: '*',
      Authorization: `Bearer ${tokenApp}`,
    },
    body: JSON.stringify(data),
    cache: 'no-store',
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });

  return res;
}

export async function submitForm(url, data) {
  const res = await fetch(`${baseUrl}${url}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Origin: '*',
      Authorization: `Bearer ${tokenApp}`,
    },
    body: JSON.stringify(data),
    cache: 'no-store',
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });

  return res;
}
