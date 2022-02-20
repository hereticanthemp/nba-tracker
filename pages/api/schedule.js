const dataFormatter = (data) =>
  data.payload.dates.map((d) => ({
    gameCount: d.gamecount,
    games: d.games.map((g) => ({
      id: g.profile.gameId,
      home: {
        city: g.homeTeam.profile.city,
        name: g.homeTeam.profile.displayAbbr,
      },
      away: {
        city: g.awayTeam.profile.city,
        name: g.awayTeam.profile.displayAbbr,
      },
      box: {
        home: g.boxscore.homeScore,
        away: g.boxscore.awayScore,
      },
    })),
  }))[0] ?? null;

export default function handler(req, res) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const query = req.query;
  return fetch(
    `https://tw.global.nba.com/stats2/season/schedule.json?countryCode=TW&days=1&gameDate=${query.date}&locale=zh_TW&tz=%2B8`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      res.status(200).json(JSON.stringify(dataFormatter(result)));
    })
    .catch((error) => console.log("error", error));
}
