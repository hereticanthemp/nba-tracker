import { Descriptions } from "antd";

const Team = (props) => {
  const team = props.team ?? {
    abbr: "",
    city: "",
    name: "",
    wins: 0,
    losses: 0,
    streak: "",
  };
  const odds = props.odds ?? {
    champ: { name: "", odds: 0 },
  };
  return (
    <Descriptions title={`${team.abbr} ${team.city} ${team.name}`}>
      <Descriptions.Item label="W/L">{`${team.wins}/${team.losses}`}</Descriptions.Item>
      <Descriptions.Item>{team.streak}</Descriptions.Item>
      <Descriptions.Item>{`+${odds.champ?.odds}`}</Descriptions.Item>
    </Descriptions>
  );
};

export default Team;
