import React, { useState } from "react";
import { GamesState } from "../../../Contexts/GamesContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

function AddOption({ questionUid }) {
  const [Questions, setQuestions] = useState(GamesState().Questions);
  const [answer, setAnswer] = useState();
  const [rate, setRate] = useState();
  const submitHandle = async () => {
    // let updatedQuestions = Questions.questions;
    const inputData = {
      answer: answer,
      rate: rate,
    };

    console.log(Questions);
    console.log(questionUid);
    let QuestionofOptions = Questions.questions.filter((i) => {
      return i.uid == questionUid;
    });
    console.log(QuestionofOptions);
    QuestionofOptions = QuestionofOptions[0];
    if (!QuestionofOptions.options || QuestionofOptions.options.length <= 0) {
      QuestionofOptions.options = [inputData];
    } else {
      QuestionofOptions.options.push(inputData);
    }

    console.log(QuestionofOptions);
    let updatedQuestions = Questions.questions.map((i) => {
      if (i.uid == QuestionofOptions.uid) {
        return QuestionofOptions;
      } else {
        return i;
      }
    });
    console.log(updatedQuestions);

    await setDoc(doc(db, "admin", "games", "question-live", "live"), {
      questions: updatedQuestions,
    });
  };
  return (
    <div>
      <div>
        <div className="px-2">
          <div class="bg-orange-950 text-white p-3 flex justify-between items-center border-b">
            <span class="text-xl">Add Answer</span>
            <input type="text" />
          </div>

          <div class="bg-green-800 text-white  flex items-center p-2 text-sm mt-1 rounded-t">
            <span class="w-[120px] ml-2 whitespace-pre-wrap text-left">
              Answer
            </span>
            <input
              onInput={(e) => {
                setAnswer(e.target.value);
              }}
              class="w-full p-1 bg-transparent focus:outline-none "
              step="any"
              name="question"
              required=""
              placeholder="Question"
            />
          </div>
          <div class="bg-green-800 text-white  flex items-center p-2 text-sm mt-1 rounded-t">
            <span class="w-[120px] ml-2 whitespace-pre-wrap text-left">
              Rate
            </span>
            <input
              onInput={(e) => {
                setRate(e.target.value);
              }}
              class="w-full p-1 bg-transparent focus:outline-none "
              step="any"
              name="question"
              required=""
              placeholder="Question"
            />
          </div>

          <button
            onClick={submitHandle}
            type="submit"
            class="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddOption;
