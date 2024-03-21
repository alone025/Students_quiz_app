import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AsosiySahifa from "./asosiyPage";
import { Test } from "./test";
import { Finishe } from "./finishe";
import { List } from "./list";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AsosiySahifa />} />
          <Route path="/list-type" element={<List />} />
          <Route path="/tests-quiz_for_students-1" element={<Test />} />
          <Route
            path="/tests-quiz_for_students-1/:numbeer"
            element={<Finishe />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
