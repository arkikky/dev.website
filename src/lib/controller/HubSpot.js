const bseURL = `https://api.hubapi.com`;
const tokenApp = "pat-na1-68646d39-14c0-4c60-a133-11611743c279";

// Fetch API
export async function getFetch(url) {
  const rs = await fetch(`${bseURL}${url}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "*",
      Authorization: `Bearer ${tokenApp}`,
    },
    cache: "no-store",
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

export async function SubmitForm(isData, isKey) {
  const rs = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/21063184/${isKey}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenApp}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(isData),
      cache: "no-store",
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
