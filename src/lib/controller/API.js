const baseUrl = `https://api.coinfest.asia`;
const tokenApp =
  'cfc96001db50fba346834ffb1141d4ee4dfac327fd3f7d03909b556fd959f35e8a9e0e410b070486e953412e8cb654bccb7e88275893f037aac117b598e72e5c54ea8073df7b300dcee4bd48b81d3d903a494fbb78822da3cf3f4c16a38146cf6d27975da803057e43b4f0476566a5edb8104f4b7b2cf1068027eda66e152c5b';

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
export async function updateData(url, data) {
  const res = await fetch(`${baseUrl}${url}`, {
    method: 'PUT',
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
export async function updateSubmitData(url, data) {
  const res = await fetch(`${baseUrl}${url}`, {
    method: 'PUT',
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
