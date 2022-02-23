import Team from "./Team";
import { List, Typography } from "antd";
const { Text } = Typography;
const TeamList = (props) => {
  return (
    <List
      header={<Text strong={true}>{props.conference}</Text>}
      dataSource={props.teams}
      renderItem={(item) => (
        <List.Item>
          <Team
            key={item.abbr}
            team={item}
          ></Team>
        </List.Item>
      )}
    ></List>
  );
};

export default TeamList;
