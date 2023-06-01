import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../../firebaseConfig";
import { GamesState } from "../../../Contexts/GamesContext";
import { v4 as uuid } from "uuid";

function AddQuestion({ id }) {
  //   const { Questions } = GamesState();
  const [Questions, setQuestions] = useState(GamesState().Questions);
  //   console.log(Questions);
  const [question, setQuestion] = useState("");
  const [waitingTime, setWaitingTime] = useState("");
  const [EndingTime, setEndingTime] = useState("");

  const submitHandle = async () => {
    let updatedQuestions = Questions.questions;
    const inputData = {
      uid: uuid(),
      id: id,
      question: question,
      waitingTime: waitingTime,
      EndingTime: EndingTime,
    };
    if (Questions.questions) {
      if (!Questions.questions <= 0) {
        updatedQuestions = Questions.questions;
        updatedQuestions.push(inputData);
      }
    }

    setQuestions({
      questions:
        Questions.questions && !Questions.questions.length <= 0
          ? updatedQuestions
          : [inputData],
    });
    await setDoc(doc(db, "admin", "games", "question-live", "live"), {
      questions:
        Questions.questions && !Questions.questions.length <= 0
          ? updatedQuestions
          : [inputData],
    });

    // await setDoc(doc(db, "admin", "games", "question-live", "live"), {
    //   questions: [{ id: 1, question: "who will win" }],
    // });
  };

  return (
    <div>
      <div className="px-2">
        <div class="bg-orange-950 text-white p-3 flex justify-between items-center border-b">
          <span class="text-xl">Add Question</span>
          <input type="text" />
        </div>
        <div>
          <div class="bg-green-800 text-white flex items-center p-2 mt-1 rounded text-sm">
            <span class="w-[120px] ml-2">Select Question</span>
            <select
              name="question"
              class="block w-full p-2 bg-transparent rounded appearance-none focus:outline-none"
            >
              <option value="">--- Select ---</option>
            </select>
          </div>
        </div>
        <div class="bg-green-800 text-white  flex items-center p-2 text-sm mt-1 rounded-t">
          <span class="w-[120px] ml-2 whitespace-pre-wrap text-left">
            Question
          </span>
          <input
            onInput={(e) => {
              setQuestion(e.target.value);
            }}
            class="w-full p-1 bg-transparent focus:outline-none "
            step="any"
            name="question"
            required=""
            placeholder="Question"
          />
        </div>

        <div class="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
          <span class="w-[120px] ml-2 whitespace-pre-wrap text-left">
            Waiting Time
          </span>
          <input
            onInput={(e) => {
              setWaitingTime(e.target.value);
            }}
            class="w-full p-1 bg-transparent focus:outline-none "
            step="any"
            name="waiting_time_before_bet"
            placeholder="Waiting Time"
          />
        </div>
        <div class="bg-green-800 text-white  flex items-center p-2 text-sm mb-2 rounded-b">
          <span class="w-[120px] ml-2 whitespace-pre-wrap text-left">
            Ending Time
          </span>
          <input
            onInput={(e) => {
              setEndingTime(e.target.value);
            }}
            class="w-full p-1 bg-transparent focus:outline-none "
            type="datetime-local"
            step="any"
            name="ending_time"
            placeholder="Ending Time"
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
  );
}

export default AddQuestion;
