import { useEffect, useState } from "react";
import { data_questions } from "./data/hamshiralikQuestionData";
import Converter from "./data/converter";
import MyDialog from "./dialog";

export const Test = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [time, setTime] = useState(30);

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setINCorrectAnswers] = useState(0);

  const nextQuestion = () => {
    setShowAnswer(true);
    if (data_questions.length !== count + 1) {
      setTimeout(() => {
        setCount(count + 1);
        setShowAnswer(false);
        setTime(30);
      }, 1500);
    } else {
      setTimeout(() => {
        setShowAnswer(false);
        console.log(correctAnswers);
        console.log(incorrectAnswers);
        const notcl = data_questions.length - correctAnswers - incorrectAnswers;
        window.location.href = `/tests-quiz_for_students-1-all_test-finish_result`;
        localStorage.setItem(
          "testResult",
          `correct${correctAnswers}incorrect${incorrectAnswers}notclicked${notcl}`
        );
      }, 1500);
    }
  };

  useEffect(() => {
    tim();

    const timer = setTimeout(() => {
      if (time == 0) {
        setTime(time + 0);
        nextQuestion();
      } else {
        setTime(time - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  function tim() {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
      const message =
        "Are you sure you want to leave this page? Your changes may not be saved.";
      e.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const inputData = data_questions[count].Id;

  return (
    <>
      <div className="test-content">
        <div className="test-body">
          <div className="test-top">
            <div className="back-to-main-page">
              <button
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Go back
              </button>
            </div>
            <div className="timer-tab">{formatTime(time)}</div>
          </div>
          <div className="test-btm">
            <Converter
              inputData={inputData}
              showAnswer={showAnswer}
              setShowAnswer={setShowAnswer}
              nextq={nextQuestion}
              correct={setCorrectAnswers}
              cr={correctAnswers}
              incorrect={setINCorrectAnswers}
              inc={incorrectAnswers}
            />
          </div>
          <div className="nextButton_prevButton">
            {data_questions.length == count + 1 ? null : (
              <button
                disabled={showAnswer}
                onClick={() => {
                  nextQuestion();
                }}
              >
                Keyingi savol
              </button>
            )}
            {data_questions.length == count + 1 ? (
              <button
                disabled={showAnswer}
                onClick={() => {
                  nextQuestion();
                }}
              >
                Testni tugatish
              </button>
            ) : null}
            <p>
              {count + 1}/{data_questions.length}
            </p>
          </div>
        </div>
      </div>
      <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
