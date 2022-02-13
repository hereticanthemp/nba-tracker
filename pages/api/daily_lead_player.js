const dataFormatter = (data) => ({
  pointLeaders: data.payload.pointLeaders,
  reboundLeaders: data.payload.reboundLeaders,
  assistLeaders: data.payload.assistLeaders,
  blockLeaders: data.payload.blockLeaders,
  stealLeaders: data.payload.stealLeaders,
});

export default function handler(req, res) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://tw.global.nba.com/stats2/league/dailyplayerleader.json?locale=zh_TW", //&statType=points
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      res.status(200).json(JSON.stringify(dataFormatter(result)));
    })
    .catch((error) => console.log("error", error));
}
