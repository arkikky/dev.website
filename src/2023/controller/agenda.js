const bseURL = `${process.env.NEXT_PUBLIC_API}`;
const token =
  "3c8372fe1b9b20f7f5ab4ab80ca4df2d2b86c378909facf97c0b7ff74f747ca9996e64fbb24cb89d04736afff7b0361e06efa50fd77ad9fe0aa9ee22bf1c4d4656605b06a432de4507f7aacf65042265c7abd76eae11ae1dc7465565b463a1e3798b8d30c8f2f5ca145e66239db5088f75714c228d25689a8c318fb7b7cdd859";

export async function getFeed(slug) {
  const resJson = await fetch(
    bseURL +
      `/agendas?filters[slug][$eq]=${slug}&populate[speakers][populate][0]=profilePicture&populate[speakers][populate][1]=logoAgenda&populate[moderator][populate][2]=profilePicture&populate[moderator][populate][3]=logoAgenda`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      cache: "no-store",
    }
  )
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

export async function getFeedAgenda(url) {
  const resJson = await fetch(bseURL + url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "*",
      Authorization: `Bearer ${token}`,
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

export async function getQuestionAgenda(url) {
  const stData = await fetch(
    `${bseURL}/questions?populate=*&sort[0]=createdAt:desc&sort[1]=upvote:desc&filters[agenda][slug][$eq]=${url}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "*",
        Authorization: `Bearer ${token}`,
        Host: "hub.coinvestasi.com",
      },
      referrerPolicy: "no-referrer",
      cache: "no-store",
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });

  return stData;
}

function search(asKey, resArr) {
  var res = false;

  for (let i = 0; i < resArr.length; i++) {
    if ((resArr[i].attributes.Question === asKey) === true) {
      res = resArr[i].attributes.Question === asKey;

      return res;
    }
  }

  return res;
}

export async function PostQuestions(idAgenda, dataQuestion) {
  var resFeed = { name: "default", fallback: false };

  if (idAgenda && dataQuestion) {
    const dataQuestions = await getFeedAgenda(`/questions`);
    if (dataQuestions) {
      const checkQuestion = dataQuestions.data;
      if (checkQuestion) {
        const resultObject = search(dataQuestion, checkQuestion);

        if (resultObject === true) {
          resFeed = { name: "question", fallback: true };
        } else if (resultObject !== true) {
          const reqConfigs = {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Origin: "*",
              Authorization: `Bearer ${token}`,
              Host: "hub.coinvestasi.com",
            },
            referrerPolicy: "no-referrer",
            cache: "no-store",
            body: JSON.stringify({
              data: {
                Question: dataQuestion,
                upvote: 0,
                downvote: 0,
                score: 0,
                agenda: {
                  connect: [{ id: idAgenda }],
                },
              },
            }),
          };

          await fetch(bseURL + `/questions`, reqConfigs)
            .then((res) => {
              resFeed = { name: "success", fallback: true };
            })
            .catch(() => {
              resFeed = { name: "error", fallback: true };
            });
        }
      }
    }
  }

  return resFeed;
}

export async function UpVoteQuestions(idQuestion) {
  var resFeed;

  const dataQuestions = await getFeedAgenda(`/questions/${idQuestion}`);

  if (dataQuestions) {
    const checkDataUpVote =
      dataQuestions.data !== null
        ? Number(dataQuestions.data.attributes.upvote)
        : -1;

    if (checkDataUpVote === 0 || checkDataUpVote >= 0) {
      const checkDataScore = Number(dataQuestions.data.attributes.score);
      const setScore = Number(checkDataScore) + 1;
      const setUpVote = Number(checkDataUpVote) + 1;

      if (setUpVote) {
        const reqConfigs = {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Origin: "*",
            Authorization: `Bearer ${token}`,
            Host: "hub.coinvestasi.com",
          },
          body: JSON.stringify({
            data: {
              upvote: setUpVote,
              score: setScore,
            },
          }),
        };

        resFeed = await fetch(bseURL + `/questions/${idQuestion}`, reqConfigs)
          .then((res) => {
            return res;
          })
          .catch(() => {
            return false;
          });
      }
    }
  }

  return resFeed;
}

export async function DownVoteQuestions(idQuestion) {
  var resFeed;
  const dataQuestions = await getFeedAgenda(`/questions/${idQuestion}`);

  if (dataQuestions) {
    const checkDataScore = Number(dataQuestions.data.attributes.score);
    const checkDataDownVote =
      dataQuestions.data !== null
        ? Number(dataQuestions.data.attributes.downvote)
        : -1;
    if (checkDataScore > 0) {
      if (checkDataDownVote === 0 || checkDataDownVote >= 0) {
        const setScore =
          checkDataScore > 0
            ? Number(checkDataScore) - 1
            : Number(checkDataScore);
        const setDownVote = Number(checkDataDownVote) + 1;

        if (setDownVote) {
          const reqConfigs = {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Origin: "*",
              Authorization: `Bearer ${token}`,
              Host: "hub.coinvestasi.com",
            },
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
              data: {
                downvote: setDownVote,
                score: setScore,
              },
            }),
          };

          resFeed = await fetch(bseURL + `/questions/${idQuestion}`, reqConfigs)
            .then((res) => {
              return res;
            })
            .catch(() => {
              return false;
            });
        }
      }
    }
  }

  return resFeed;
}
