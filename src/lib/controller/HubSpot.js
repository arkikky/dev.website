// @init
const baseUrl = `https://api.hubapi.com`;
const tokenKey = 'pat-na1-68646d39-14c0-4c60-a133-11611743c279';

export async function getFecthHbSpt(url) {
  const res = await fetch(`${baseUrl}${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Origin: '*',
      Authorization: `Bearer ${tokenKey}`,
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

export async function submitFormHbSpt(data, key) {
  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/21063184/${key}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Origin: '*',
        Authorization: `Bearer ${tokenKey}`,
      },
      body: JSON.stringify(data),
      cache: 'no-store',
    }
  )
    .then((res) => {
      if (res.ok) {
        return true;
      }
    })
    .catch((e) => {
      return false;
    });

  return res;
}
