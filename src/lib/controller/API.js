// Config
const bseURL = `${process.env.NEXT_PUBLIC_API}`;
const tokenApp =
  "3c8372fe1b9b20f7f5ab4ab80ca4df2d2b86c378909facf97c0b7ff74f747ca9996e64fbb24cb89d04736afff7b0361e06efa50fd77ad9fe0aa9ee22bf1c4d4656605b06a432de4507f7aacf65042265c7abd76eae11ae1dc7465565b463a1e3798b8d30c8f2f5ca145e66239db5088f75714c228d25689a8c318fb7b7cdd859";

// Fetch API
export async function getFetchUrl(url) {
  const rsFetch = await fetch(`${url}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "*",
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

  return rsFetch;
}

export async function getFetch(url) {
  const resJson = await fetch(`${bseURL}${url}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "*",
      Host: "hub.coinvestasi.com",
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

  return resJson;
}
