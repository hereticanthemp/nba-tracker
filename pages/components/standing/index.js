import react, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "antd";

import TeamList from "./TeamList";

const Standing = () => {
  const [westTeams, setWestTeams] = useState([]);
  const [eastTeams, setEastTeams] = useState([]);

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
            }));
          if (group.conference == "Eastern") {
            setEastTeams(teams);
          } else {
            setWestTeams(teams);
          }
        });
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  const refreshBtnHandler = FetchData;

  return (
    <div>
      <Card title="Conference Standing">
        <Row>
          <Col span={12}>
            <TeamList teams={westTeams}></TeamList>
          </Col>
          <Col span={12}>
            <TeamList teams={eastTeams}></TeamList>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={refreshBtnHandler}>Refresh</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Standing;
