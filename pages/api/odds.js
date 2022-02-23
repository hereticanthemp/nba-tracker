const dataFormatter = (data) => {
  const division = data[0];
  const conference = data[1];

  const mapper = (obj) => {
    return {
      name: obj.name[1],
      odds: obj.o,
    };
  };

  return {
    western: division.ms[0].cs[0].map(mapper),
    eastern: division.ms[1].cs[0].map(mapper),
    championship: division.ms[2].cs[0].map(mapper),
  };
};

export default function handler(req, res) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  let time_t = new Date().getTime();
  return fetch(
    "https://blob.sportslottery.com.tw/apidata/Pre/ListByLeague/4102.json?" +
      time_t,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      res.status(200).json(JSON.stringify(dataFormatter(result)));
    })
    .catch((error) => console.log("error", error));
}
