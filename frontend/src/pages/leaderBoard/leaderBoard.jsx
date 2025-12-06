import { useEffect, useState } from "react";
import "./leaderBoard.css";
import Loader from "../../components/loader/loader";

export default function LeaderBoard() {
  const [displayLoader, setDisplayLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplayLoader(false);
    }, 2000);
  }, []);

  if (displayLoader) {
    return <Loader />;
  }
  const tableData = [
    {
      team: "S2 ECE A",
      score: 23,
    },
    {
      team: "S2 ECE A",
      score: 23,
    },
    {
      team: "S4 ECE A",
      score: 23,
    },
    {
      team: "S4 ECE A",
      score: 23,
    },
    {
      team: "S6 ECE A",
      score: 23,
    },
    {
      team: "S6 ECE A",
      score: 23,
    },
    {
      team: "S8 ECE A",
      score: 23,
    },
    {
      team: "S8 ECE A",
      score: 23,
    },
  ];

  const firstStyles = {
    color: "rgb(255,197,5)",
    fontSize:'27px',
    fontWeight:'bold'
  };
  const secondStyles = {
    color: "white",
    fontSize:'25px',
    fontWeight:'bold'
  };
  const thirdStyles = {
    color: "rgb(235,115,16)",
    fontSize:'23px',
    fontWeight:'bold'
      
  };
  return (
    <section className="leaderBoard">
      <table>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Team</td>
            <td>Points</td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, indx) => (
            <tr
              
            >
              <td style={
                indx == 0
                  ? firstStyles
                  : indx == 1
                  ? secondStyles
                  : indx == 2
                  ? thirdStyles
                  : {color:'gray'}
              }>{indx + 1}</td>
              <td style={
                indx == 0
                  ? firstStyles
                  : indx == 1
                  ? secondStyles
                  : indx == 2
                  ? thirdStyles
                  : {color:'gray'}
              }>{data.team}</td>
              <td style={
                indx == 0
                  ? firstStyles
                  : indx == 1
                  ? secondStyles
                  : indx == 2
                  ? thirdStyles
                  : {color:'gray'}
              }>{data.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
