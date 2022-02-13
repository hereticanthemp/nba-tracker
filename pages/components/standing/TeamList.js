import Team from "./Team";

export default (props) => {
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
