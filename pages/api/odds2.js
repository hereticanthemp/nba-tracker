import cheerio from "cheerio";

const dataFormatter = (html) => {
  const $ = cheerio.load(html);
  var elements = $(".listicle-header-text").toArray();
  const mapper = (obj) => {
    console.log($(obj));
    let arr = $(obj).text().split("+");
    return {
      name: arr[0],
      odds: arr[1],
    };
  };

  let data = elements.map((ele) => mapper(ele));
  return {
    championship: data,
  };
};

export default function handler(req, res) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  let time_t = new Date().getTime();
  return fetch(
    "https://sportsbookwire.usatoday.com/lists/updated-odds-for-all-30-teams-to-win-the-nba-championship/" +
      time_t,
    requestOptions
  )
    .then((response) => response.blob())
    .then((blob) => blob.text())
    .then((resultHtml) => {
      res.status(200).json(JSON.stringify(dataFormatter(resultHtml)));
    })
    .catch((error) => console.log("error", error));
}
