import Team from "./Team";
import { List, Typography } from "antd";
const { Text } = Typography;
const TeamList = (props) => {
  const confOdds = props.confOdds;
  const champOdds = props.champOdds;
  return (
    <List
      header={<Text strong={true}>{props.conference}</Text>}
      dataSource={props.teams}
      renderItem={(item) => (
        <List.Item>
          <Team
            key={item?.abbr}
            team={item}
            odds={{
              conf: confOdds.find((o) => o.name.includes(item.nameEn)) ?? {
                name: "",
                odds: 0,
              },
              champ: champOdds.find((o) => o.name.includes(item.nameEn)) ?? {
                name: "",
                odds: 0,
              },
            }}
          ></Team>
        </List.Item>
      )}
    ></List>
  );
};

export default TeamList;
