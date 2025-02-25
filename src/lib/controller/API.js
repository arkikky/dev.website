const bUrl = 'https://api.coinfest.asia';
const tApp =
  'cfc96001db50fba346834ffb1141d4ee4dfac327fd3f7d03909b556fd959f35e8a9e0e410b070486e953412e8cb654bccb7e88275893f037aac117b598e72e5c54ea8073df7b300dcee4bd48b81d3d903a494fbb78822da3cf3f4c16a38146cf6d27975da803057e43b4f0476566a5edb8104f4b7b2cf1068027eda66e152c5b';

// @get
export async function getFetch(url) {
  const rs = await fetch(`${bUrl}${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Origin: '*',
      Authorization: `Bearer ${tApp}`,
    },
    credentials: 'include',
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
    credentials: 'include',
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

// @get-all(paginated)
export async function getFetchPaginatedData(endpoints) {
  const rsAll = await fetch(
    `${process.env.GENERAL_BASEAPI_URL}${endpoints}?sort=rank:asc&populate=*&pagination[page]=1&pagination[pageSize]=100`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Origin: '*',
      },
      credentials: 'include',
    }
  )
    .then((res) => {
      if (res?.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });

  const tlPages = rsAll?.meta?.pagination.pageCount;
  const fetchPromises = [];

  for (let i = 1; i <= tlPages; i++) {
    fetchPromises.push(
      getFetchUrl(
        `${process.env.GENERAL_BASEAPI_URL}${endpoints}?sort=rank:asc&populate=*&pagination[page]=${i}&pagination[pageSize]=100`
      )
    );
  }

  const rs = await Promise.all(fetchPromises);
  return rs.flatMap((rslt) => rslt?.data);
}

export async function getFetchUrl_FormData(url, data) {
  const rs = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${tApp}`,
    },
    body: data,
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
