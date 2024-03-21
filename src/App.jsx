import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AsosiySahifa from "./asosiyPage";
import { Finishe } from "./finishe";
import { List } from "./list";
import { EnglishTest } from "./englishTest";
import { Test } from "./hamshiralik";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AsosiySahifa />} />
          <Route path="/list-type" element={<List />} />
          <Route
            path="/tests-quiz_for_students-1-hamshiralik"
            element={<Test />}
          />
          <Route
            path="/tests-quiz_for_students-1-english"
            element={<EnglishTest />}
          />
          <Route
            path="/tests-quiz_for_students-1-all_test-finish_result"
            element={<Finishe />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
