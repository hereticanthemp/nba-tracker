import { Descriptions } from "antd";

const Team = (props) => {
  const team = props.team;
  return (
    <Descriptions title={`${team.abbr} ${team.city} ${team.name}`}>
      <Descriptions.Item label="W/L">{`${team.wins}/${team.losses}`}</Descriptions.Item>
      <Descriptions.Item label="streak">{team.streak}</Descriptions.Item>
      <Descriptions.Item label="Odds"></Descriptions.Item>
    </Descriptions>
  );
};

export default Team;
/*
"profile": {
    "abbr": "ATL",
    "city": "亞特蘭大",
    "cityEn": "Atlanta",
    "code": "hawks",
    "conference": "Eastern",
    "displayAbbr": "老鷹",
    "displayConference": "東區",
    "division": "東南組",
    "id": "1610612737",
    "isAllStarTeam": false,
    "isLeagueTeam": true,
    "leagueId": "00",
    "name": "老鷹",
    "nameEn": "Hawks"
},
"standings": {
    "aheadAtHalfLoss": "8",
    "aheadAtHalfWin": "20",
    "aheadAtThirdLoss": "6",
    "aheadAtThirdWin": "23",
    "behindAtHalfLoss": "21",
    "behindAtHalfWin": "5",
    "behindAtThirdLoss": "23",
    "behindAtThirdWin": "3",
    "clinched": null,
    "confGamesBehind": 9.5,
    "confLoss": 17,
    "confRank": 10,
    "confWin": 15,
    "divGameBehind": 9.5,
    "divLoss": 5,
    "divRank": 3,
    "divWin": 6,
    "fewerTurnoversLoss": "11",
    "fewerTurnoversWin": "14",
    "homeLoss": 13,
    "homeStreak": "負 1",
    "homeWin": 16,
    "last10": "6-4",
    "last10Home": "8-2",
    "last10Road": "3-7",
    "leadInFgpctloss": "4",
    "leadInFgpctwin": "22",
    "leadInRebLoss": "14",
    "leadInRebWin": "15",
    "loseStreak": "負 6",
    "losses": 29,
    "onHotStreak": "false",
    "oppover500Loss": "22",
    "oppover500Win": "13",
    "oppscore100PlusLoss": "27",
    "oppscore100PlusWin": "19",
    "otloss": "0",
    "otwin": "0",
    "pointsAgainst": 111.9,
    "pointsDiff": 0.1,
    "pointsFor": 112.0,
    "roadLoss": 16,
    "roadStreak": "負 2",
    "roadWin": 10,
    "score100PlusLoss": "17",
    "score100PlusWin": "25",
    "streak": "負 1",
    "tenPtsOrMoreLoss": "14",
    "tenPtsOrMoreWin": "16",
    "threePtsOrLessLoss": "2",
    "threePtsOrLessWin": "5",
    "tiedAtHalfLoss": "0",
    "tiedAtHalfWin": "1",
    "tiedAtThirdLoss": "0",
    "tiedAtThirdWin": "0",
    "winPct": 47.3,
    "winStreak": "勝 7",
    "wins": 26
}
*/
