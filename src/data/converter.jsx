function Converter({
  inputData,
  showAnswer,
  nextq,
  correct,
  incorrect,
  cr,
  inc,
}) {
  const convertData = (data) => {
    const lines = data.split("\n");
    const question = lines[0];
    const answers = [];

    for (let i = 1; i < lines.length; i++) {
      let line = lines[i].trim();
      let answer = line.substring(3).trim();

      if (line.startsWith("A.")) {
        if (line.includes("*")) {
          answers.push({
            option: "A",
            correct_answer: answer.replace("*", ""),
          });
        } else {
          answers.push({ option: "A", text: answer });
        }
      } else if (line.startsWith("B.")) {
        if (line.includes("*")) {
          answers.push({
            option: "B",
            correct_answer: answer.replace("*", ""),
          });
        } else {
          answers.push({ option: "B", text: answer });
        }
      } else if (line.startsWith("C.")) {
        if (line.includes("*")) {
          answers.push({
            option: "C",
            correct_answer: answer.replace("*", ""),
          });
        } else {
          answers.push({ option: "C", text: answer });
        }
      } else if (line.startsWith("D.")) {
        if (line.includes("*")) {
          answers.push({
            option: "D",
            correct_answer: answer.replace("*", ""),
          });
        } else {
          answers.push({ option: "D", text: answer });
        }
      }
    }

    return {
      question,
      answers,
    };
  };

  const convertedData = convertData(inputData);

  return (
    <div>
      <p>{convertedData.question}</p>
      <ul>
        {convertedData.answers.map((answer, index) => (
          <button
            disabled={showAnswer}
            onClick={() => {
              correct(answer.correct_answer !== undefined ? cr + 1 : cr + 0);
              incorrect(answer.correct_answer == undefined ? inc + 1 : inc + 0);
              console.log(answer.correct_answer);
              nextq();
            }}
            style={{
              listStyle: "none",
              cursor: showAnswer ? "not-allowed" : "pointer",
              background: showAnswer
                ? answer.correct_answer == undefined
                  ? "rgb(153 5 5 / 88%)"
                  : "#089f08b8"
                : "",
            }}
            key={index}
          >
            {answer.option}. {answer.text}
            {answer.correct_answer && <strong>{answer.correct_answer}</strong>}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default Converter;
