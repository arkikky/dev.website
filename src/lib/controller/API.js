const bUrl = process.env.BASEAPI_URL;
const tApp = process.env.API_TOKEN_KEY;

// @get
export async function getFetch(url) {
  const rs = await fetch(`${bUrl}${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tApp}`,
    },
    cache: 'no-store',
  })
    .then((res) => {
      if (res?.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });
  return rs;
}
export async function getFetchUrl(url) {
  const rs = await fetch(`${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })
    .then((res) => {
      if (res?.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });
  return rs;
}

export async function getFetchUrl_FormData(url, data) {
  const rs = await fetch(`${url}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${tApp}`,
    },
    body: data,
    cache: 'no-store',
  })
    .then((res) => {
      if (res?.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });
  return rs;
}

// @put
export async function updateData(url, data) {
  const rs = await fetch(`${bUrl}${url}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tApp}`,
    },
    body: JSON.stringify(data),
    cache: 'no-store',
  })
    .then((res) => {
      if (res?.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });
  return rs;
}
export async function updateSubmitData(url, data) {
  const rs = await fetch(`${bUrl}${url}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tApp}`,
    },
    body: JSON.stringify(data),
    cache: 'no-store',
  })
    .then((res) => {
      if (res?.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });
  return rs;
}

// @post
export async function pushSubmitData(url, data) {
  const rs = await fetch(`${bUrl}${url}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tApp}`,
    },
    body: JSON.stringify(data),
    cache: 'no-store',
  })
    .then((res) => {
      if (res?.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });
  return rs;
}
export async function submitForm(url, data) {
  const rs = await fetch(`${bUrl}${url}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tApp}`,
    },
    body: JSON.stringify(data),
    cache: 'no-store',
  })
    .then((res) => {
      if (res?.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });
  return rs;
}
