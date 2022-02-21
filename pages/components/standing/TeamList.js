import Team from "./Team";

const TeamList = (props) => {
  return (
    <ul>
      {props.teams?.map((team) => (
        <Team
          key={team.abbr}
          abbr={team.abbr}
          city={team.city}
          name={team.name}
        ></Team>
      ))}
    </ul>
  );
};

export default TeamList;