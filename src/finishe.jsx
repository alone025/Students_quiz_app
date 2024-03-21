import { Link, useParams } from "react-router-dom";
import { data_questions } from "./data/hamshiralikQuestionData";

export const Finishe = () => {
  const { numbeer } = useParams();
  console.log(numbeer);

  const startIndex = numbeer.indexOf("correct") + 7;
  const endIndex = numbeer.indexOf("incorrect");
  const slicedData = numbeer.slice(startIndex, endIndex);
  const number = parseInt(slicedData, 10);

  const startIndex2 = numbeer.indexOf("incorrect") + "incorrect".length;
  const endIndex2 = numbeer.indexOf("notclicked");
  const extractedNumber = numbeer.slice(startIndex2, endIndex2);

  const endIndex3 = numbeer.lastIndexOf("d") + 1;
  const slicedData3 = numbeer.slice(endIndex3);
  const number3 = parseInt(slicedData3, 10);

  return (
    <div className="finished-content">
      <div className="tessst-top">
        <h3>Test yakunlandi</h3>
      </div>
      <div className="test-btm">
        <p>Siz {data_questions.length} ta savolga javob berdingiz:</p>
        <ul>
          <li>
            ✅ Toʻgʻri – <strong>{number}</strong>{" "}
          </li>
          <li>
            ❌ Xato – <strong>{extractedNumber}</strong>{" "}
          </li>
          <li>
            ⌛️ Tashlab ketilgan – <strong>{number3}</strong>{" "}
          </li>
        </ul>
      </div>
      <div className="bttm-navigate">
        <Link to="/">
          <button>Asosiy sahifaga qaytish</button>
        </Link>
      </div>
    </div>
  );
};
