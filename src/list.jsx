import React from "react";
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
          <button>Hamshiralik</button>
          <button>Ingiliz tili</button>
        </ul>
      </div>
    </div>
  );
};
