import react, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Divider } from "antd";

import TeamList from "./TeamList";

const Standing = () => {
  const [westTeams, setWestTeams] = useState([]);
  const [eastTeams, setEastTeams] = useState([]);
  const [odds, setOdds] = useState({});

  const FetchData = () => {
    fetch("/api/standing")
      .then((resp) => resp.json())
      .then((data) => {
        data.standingGroups.forEach((group) => {
          const teams = group.teams
            .sort((a, b) => a.standings.confRank - b.standings.confRank)
            .map((team) => ({
              abbr: team.profile.abbr,
              city: team.profile.city,
              name: team.profile.name,
              wins: team.standings.wins,
              losses: team.standings.losses,
              streak: team.standings.streak
            }));
          if (group.conference == "Eastern") {
            setEastTeams(teams);
          } else {
            setWestTeams(teams);
          }
        });
      });
  };

  const FetchOdds = () => {
    fetch("/api/odds")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    FetchData();
    FetchOdds();
  }, []);

  const refreshBtnHandler = FetchData;

  return (
    <Card title="Conference Standing">
      <Row>
        <Col span={12}>
          <TeamList conference={"Western"} teams={westTeams}></TeamList>
        </Col>
        <Col span={12}>
          <TeamList conference={"Eastern"} teams={eastTeams}></TeamList>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={18}></Col>
        <Col span={6}>
          <Button onClick={refreshBtnHandler}>Refresh</Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Standing;
