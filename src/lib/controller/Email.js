export async function Email(usrEmail) {
  const data = {
    email: usrEmail,
  };
  const rsFetch = await fetch(
    "https://coinvestasi-l0v.mailtrgt.com/form/6523d4b38f4a350001606207",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "*",
      },
      body: JSON.stringify(data),
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

  return rsFetch;
}
