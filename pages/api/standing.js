const dataFormatter = (data) => ({
  season: data.payload.season,
  standingGroups: data.payload.standingGroups,
});

export default function handler(req, res) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://tw.global.nba.com/stats2/season/conferencestanding.json?locale=zh_TW",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      res.status(200).json(JSON.stringify(dataFormatter(result)));
    })
    .catch((error) => console.log("error", error));
}
