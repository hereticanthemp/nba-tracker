import { Col } from "antd";

export default (props) => {
  const players = props.players.map((p) => <li key={p.playerProfile.code}>{p.playerProfile.displayName}</li>);

  return (
    <Col span={4}>
      <h3>{props.title}</h3>
      <ul>{players}</ul>
    </Col>
  );
};