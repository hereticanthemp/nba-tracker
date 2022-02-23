import Head from "next/head";
import react, { useEffect, useState } from "react";

import { Card, Calendar } from "antd";

export default function Game() {
  const [games, setGames] = useState([])

  const onChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
    fetch(`/api/schedule?date=${value.format("YYYY-MM-DD")}`)
    .then(response=>response.json())
    .then(data=>setGames(data.games));
  };

  const cardStyle = {
    width: "400px",
    border: "1px solid #f0f0f0",
    borderRadius: "2px",
  };

  return (
    <div>
      <Head>
        <title>Game</title>
        <meta name="description" content="game schedule" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Game Schedule</h1>
        <Card style={cardStyle}>
          <Calendar
            fullscreen={false}
            onPanelChange={onChange}
            onSelect={onChange}
          />
        </Card>
        <Card>
          <ul>
            {games.map(g=>{
              return <li key={g.id}>{`${g.home.city}${g.home.name} ${g.box.home} vs ${g.box.away} ${g.away.city}${g.away.name}`}</li>
            })}
          </ul>
        </Card>
      </main>
    </div>
  );
}
