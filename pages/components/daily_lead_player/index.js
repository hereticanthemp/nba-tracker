import react, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "antd";
import LeadCol from "./LeadCol";

export default () => {
  const [colData, setColData] = useState([]);

  const FetchData = () => {
    fetch("/api/daily_lead_player")
      .then((resp) => resp.json())
      .then((data) => {
        let col = Object.keys(data).map((key) => {
          return {
            title: key,
            players: data[key],
          };
        });
        setColData(col);
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  const refreshBtnHandler = FetchData;

  return (
    <div>
      <Card title="Daily Leaders">
        <Row>
          {colData.map((col) => (
            <LeadCol key={col.title} title={col.title} players={col.players}></LeadCol>
          ))}
        </Row>
      </Card>
    </div>
  );
};
