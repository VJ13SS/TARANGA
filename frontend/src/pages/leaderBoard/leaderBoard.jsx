import { useEffect, useState } from "react";
import "./leaderBoard.css";
import Loader from "../../components/loader/loader";
import { db } from "../../firebase";
import { addDoc, collection,getDocs,getDoc,updateDoc,doc } from "firebase/firestore";


export default function LeaderBoard() {
  const [displayLoader, setDisplayLoader] = useState(true);
  const [teams, setTeams] = useState([]);
  const teamsCollectionRef = collection(db,"teams")
  const getTeamScores = async () => {
    const response = await getDocs(teamsCollectionRef);
    console.log(response.docs);
    const list = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setTeams(list.sort((a,b) => (b.score - a.score)));
  };

  useEffect(() => {
    setTimeout(() => {
      setDisplayLoader(false);
    }, 2000);
     getTeamScores()
  }, []);



  if (displayLoader) {
    return <Loader />;
  }
  const tableData = [
    {
      team: "S2 ECE A",
      score: 0,
    },
    {
      team: "S2 ECE A",
      score: 0,
    },
    {
      team: "S4 ECE A",
      score: 0,
    },
    {
      team: "S4 ECE A",
      score: 0,
    },
    {
      team: "S6 ECE A",
      score: 0,
    },
    {
      team: "S6 ECE A",
      score: 0,
    },
    {
      team: "S8 ECE A",
      score: 0,
    },
    {
      team: "S8 ECE A",
      score: 0,
    },
  ];

  

 console.log(teams)

  const firstStyles = {
    color: "rgb(255,197,5)",
    fontSize: "27px",
    fontWeight: "bold",
  };
  const secondStyles = {
    color: "white",
    fontSize: "25px",
    fontWeight: "bold",
  };
  const thirdStyles = {
    color: "rgb(235,115,16)",
    fontSize: "23px",
    fontWeight: "bold",
  };
  return (
    <section className="leaderBoard">
      <h1>
        <i>Leader Board</i>
      </h1>
      {tableData.length == 0 ? <h2>Fetching Information..!</h2> :
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
            <tr>
              <td
                style={
                  data.score == 0?{ color: "gray" }:
                  indx == 0
                    ? firstStyles
                    : indx == 1
                    ? secondStyles
                    : indx == 2
                    ? thirdStyles
                    : { color: "gray" }
                }
              >
                {indx + 1}
              </td>
              <td
                style={
                  data.score == 0?{ color: "gray" }:
                  indx == 0
                    ? firstStyles
                    : indx == 1
                    ? secondStyles
                    : indx == 2
                    ? thirdStyles
                    : { color: "gray" }
                }
              >
                {data.team}
              </td>
              <td
                style={
                  data.score == 0?{ color: "gray" }:
                  indx == 0
                    ? firstStyles
                    : indx == 1
                    ? secondStyles
                    : indx == 2
                    ? thirdStyles
                    : { color: "gray" }
                }
              >
                {data.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>}
    </section>
  );
}
