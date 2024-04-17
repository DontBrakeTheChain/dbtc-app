import { useState } from "react";
import "./styles.css";
import CalendarPage from "./CalendarPage";

export default function App() {
  const [buttonStatus, setButtonStatus] = useState(true);

  function handleStatusChange() {
    setButtonStatus((prev) => !prev);
  }

  return (
    <div className="ui-container">
        <>
          <CalendarPage />
          <button onClick={handleStatusChange} className="ui-button logout">
            Log out
          </button>
          
        </>
    </div>
  );
}