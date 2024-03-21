import { Link } from "react-router-dom";

export const List = () => {
  return (
    <div className="list-of-tests">
      <div className="back-btn">
        <Link to="/">
          <button>Go back</button>
        </Link>
      </div>
      <div className="list-top">
        <h2>Testlar ro'yxati</h2>
        <p>Boshlash uchun tanlang</p>
      </div>
      <div className="list-content">
        <ul>
          <Link to="/tests-quiz_for_students-1-hamshiralik">
            <button>Hamshiralik</button>
          </Link>
          <Link to="/tests-quiz_for_students-1-english">
            <button>Ingiliz tili</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};
