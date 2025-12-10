import { useContext, useState } from "react";
import "./eventInfo.css";
import { AppContext } from "../../context/appContext";
import { FiClock, FiMapPin } from "react-icons/fi";
export default function EventInfo() {
  const [chosenDay, setChosenDay] = useState("day1");
  const { eventType, setEventType } = useContext(AppContext);
  const preEvents = [
    {
      name: "Code And Predict",
      mode: "Offline",
    },
    {
      name: "Poster Designing Contest",
      mode: "Online",
    },
    {
      name: "AI & ML : Talk Session & Project",
      mode: "Hybrid",
    },
    {
      name: "Snap Hunt Challenge",
      mode: "Hybrid",
    },
    {
      name: "Fox Hunting (Treasure Hunt)",
      mode: "Offline",
    },
    {
      name: "Digital Doodle Challenge",
      mode: "Online",
    },
    {
      name: "Reels Challenge : Engineering - Expectation v/s Reality",
      mode: "Online",
    },
  ];

  /*{
      name: "Welcome Address",
      time: "10:30 - 10:45 AM",
      venue: "College Auditorium",
    },
    {
      name: "Faculty Speech",
      time: "10:45 - 11:15 AM",
      venue: "College Auditorium",
    },
    {
      name: "Keynote Talk By Chief Guest",
      time: "11:15 - 11:30 AM",
      venue: "College Auditorium",
    },
    {
      name: "Magazine Publish",
      time: "11:30 - 11:45 AM",
      venue: "College Auditorium",
    },
    {
      name: "Flash Intro Video",
      time: "11:45 AM - 12 PM",
      venue: "College Auditorium",
    }, */

  const day1Events = [
    {
      name: "Inauguration  Ceremony",
      time: "10 AM - 12 PM",
      venue: "College Auditorium",
    },

    {
      name: "Alumni Talk Session",
      time: "1 - 2 PM",
      venue: "College Auditorium",
    },
    {
      name: "Project Exhibition",
      time: "2 - 5 PM",
      venue: "College Auditorium",
    },
  ];

  const day2Events = [
    {
      name: "FPGA Workshop",
      time: "9 AM - 4 PM",
      venue: "EC Lab",
    },
    {
      name: "Tech Pictionary Game",
      time: "9:30 AM - 12 PM",
      venue: "EC Classroom",
    },
    {
      name: "Resistor Color Code Race",
      time: "9:30 AM - 12 PM",
      venue: "EC Classroom",
    },
    {
      name: "Hackathon Kickoff",
      time: "2 PM - Ongoing",
      venue: "Skill DeveloPMent Centre",
    },
    {
      name: "CAD Session (Tentative)",
      time: "1 - 5 PM",
      venue: "CAD Lab (Mechanical)",
    },
  ];

  const day3Events = [
    {
      name: "AR/VR Workshop",
      time: "9 AM - 4 PM",
      venue: "EC Seminar Hall",
    },
    {
      name: "Component Memory Game",
      time: "9:30 AM - 12 PM",
      venue: "EC Classroom",
    },
    {
      name: "Emoji Quiz - Tech Edition",
      time: "9:30 AM - 12 PM",
      venue: "EC Classroom",
    },
    {
      name: "Hackathon Final Demonstration & Judging",
      time: "10 AM - 12 PM",
      venue: "Skill DeveloPMent Center",
    },
    {
      name: "Cultural Programs",
      time: "3 - 7 PM",
      venue: "Auditorium",
    },
  ];

  const dayStyle = {
    backgroundColor: "white",
    color: "#0c192c",
  };

  const cardAnimations = [
    "fadeRight 3.5s linear",
    "fadeLeft 3.5s linear",
    "fadeUp 3.5s linear",
    "fadeDown 3.5s linear",
  ];

  return (
    <section className="eventInfo">
      {eventType === "Pre Events" ? (
        <>
          <h1>
            <i>Pre Events</i>
          </h1>
          <div className="plannedEvents">
            {preEvents.map((event, indx) => (
              <div className="plannedEvent">
                <h2>
                  <i>{event.name}</i>
                </h2>
                <span>
                  <i>{event.mode}</i>
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1>
            <i>Major Events</i>
          </h1>
          <div className="days">
            <div
              className="day"
              onClick={() => setChosenDay("day1")}
              style={chosenDay == "day1" ? dayStyle : {}}
            >
              <i>JAN 9</i>
            </div>
            <div
              className="day"
              onClick={() => setChosenDay("day2")}
              style={chosenDay == "day2" ? dayStyle : {}}
            >
              <i>JAN 10</i>
            </div>
            <div
              className="day"
              onClick={() => setChosenDay("day3")}
              style={chosenDay == "day3" ? dayStyle : {}}
            >
              <i>JAN 11</i>
            </div>
          </div>
          <div className="plannedEvents">
            {chosenDay === "day1"
              ? day1Events.map((event, indx) => (
                  <div className="plannedEvent">
                    <h2>
                      <i>{event.name}</i>
                    </h2>
                    <span>
                      <i>
                        <FiClock /> {event.time}
                      </i>
                    </span>
                    <span>
                      <i>
                        <FiMapPin /> {event.venue}{" "}
                      </i>
                    </span>
                  </div>
                ))
              : chosenDay === "day2"
              ? day2Events.map((event, indx) => (
                  <div className="plannedEvent">
                    <h2>
                      <i>{event.name}</i>
                    </h2>
                    <span>
                      <i>
                        <FiClock /> {event.time}
                      </i>
                    </span>
                    <span>
                      <i>
                        <FiMapPin /> {event.venue}{" "}
                      </i>
                    </span>
                  </div>
                ))
              : day3Events.map((event, indx) => (
                  <div className="plannedEvent">
                    <h2>
                      <i>{event.name}</i>
                    </h2>
                    <span>
                      <i>
                        <FiClock /> {event.time}
                      </i>
                    </span>
                    <span>
                      <i>
                        <FiMapPin /> {event.venue}{" "}
                      </i>
                    </span>
                  </div>
                ))}
          </div>
        </>
      )}
    </section>
  );
}
