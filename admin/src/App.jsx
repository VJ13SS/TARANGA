import { useEffect, useState } from "react";
import "./App.css";
import { addDoc, collection,getDocs,getDoc,updateDoc,doc } from "firebase/firestore";
import { db } from "./firebase";

export default function App() {
  const teamsCollectionRef = collection(db,"teams")
  const [teamData, setTeamData] = useState({ team: "", score: 0 });
  const [teams,setTeams] = useState([])

  const updateScore = (id,teamData) =>{
    const teamDoc = doc(db,"teams",id)
    return updateDoc(teamDoc,teamData)
  }

  const getTeam = (id) => {
    const teamDoc = doc(db,"teams",id)
    return getDoc(teamDoc)
  }
  
  const submitScore = async (e) => {
    e.preventDefault();
    for(let teamDetails of teams){
      if(teamDetails.team == teamData.team){
        teamDetails.score = teamDetails.score + teamData.score
        await updateScore(teamDetails.id,{id:teamDetails.id,...teamDetails})
      }
    }
    console.log(teams,'done')
    alert('Team Scores updated')
  };

  const getTeamScores = async () => {
    const response = await getDocs(teamsCollectionRef)
    console.log(response.docs)
    const list = response.docs.map(doc => ({id:doc.id,...doc.data()}))
    setTeams(list)
  }

  useEffect(() => {
    getTeamScores()
    
  },[])
 console.log(teams)
  return (
    <div className="app">
    {teams.length == 0 ? <h1>Fetching Information</h1> :
      <form action="" onSubmit={(e) => submitScore(e)}>
        <select
          name="team"
          id=""
          onChange={(e) =>
            setTeamData((prev) => ({ ...prev, team: e.target.value }))
          }
        >
          <option value="Select Team">Select Team</option>
          <option value="S2 ECE A">S2 ECE A</option>
          <option value="S2 ECE B">S2 ECE B</option>
          <option value="S4 ECE A">S4 ECE A</option>
          <option value="S4 ECE B">S4 ECE B</option>
          <option value="S6 ECE A">S6 ECE A</option>
          <option value="S6 ECE B">S6 ECE B</option>
          <option value="S8 ECE A">S8 ECE A</option>
          <option value="S8 ECE B">S8 ECE B</option>
        </select>
        <select
          name="score"
          id=""
          onChange={(e) =>
            setTeamData((prev) => ({
              ...prev,
              score:
                e.target.value == "first"
                  ? 15
                  : e.target.value == "second"
                  ? 10
                  : e.target.value == "third"
                  ? 5
                  : e.target.value == "participant"
                  ? 2
                  : 0,
            }))
          }
        >
          <option value="Select Team">Select Score Type</option>
          <option value="first">First</option>
          <option value="second">Second</option>
          <option value="third">Third</option>
          <option value="participant">Participant</option>
        </select>
        <button type="submit">Submit</button>
      </form>}
    </div>
  );
}
