const bUrl = `https://api.hubapi.com`;
const tApp = 'pat-na1-68646d39-14c0-4c60-a133-11611743c279';

export async function getFecthHbSpt(url) {
  const rs = await fetch(`${bUrl}${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tApp}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });
  return rs;
}

export async function submitFormHbSpt(data, key) {
  const rs = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/21063184/${key}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tApp}`,
      },
      body: JSON.stringify(data),
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
  return rs;
}
