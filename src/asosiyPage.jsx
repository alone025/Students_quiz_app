import { Link } from "react-router-dom";
import "./App.css";

function AsosiySahifa() {
  return (
    <div className="questions-for-students-container">
      <div className="logo-page">
        <h3>Abiturentlar uchun maxsus tayyorlangan saytga</h3>
        <h2>Xush kelibsiz</h2>
        <div className="button-div">
          <Link to="/list-type">
            <button>Testni boshlash uchun bosing</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AsosiySahifa;
