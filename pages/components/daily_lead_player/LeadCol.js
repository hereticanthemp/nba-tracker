import { Col } from "antd";

const LeadCol = (props) => {
  const players = props.players?.map((p) => (
    <li key={p.playerProfile.code}>{p.playerProfile.displayName}</li>
  ));

  return (
    <Col span={4}>
      <h3>{props.title.replace("Leaders","").toUpperCase()}</h3>
      <ul>{players}</ul>
    </Col>
  );
};

export default LeadCol;
