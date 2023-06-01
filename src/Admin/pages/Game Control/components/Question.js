import React from "react";
import "./question.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import QuestionOptions from "./QuestionOptions";
import AddOption from "./AddOption";
import { ModalState } from "../../../Contexts/ModalContext";

function Question({ question_title, questionOptions, question }) {
  const { setShowComponent, setShowModal } = ModalState();
  return (
    <div>
      <div id="question-options">
        <span>{question_title}</span> ||
        <span
          className="bg-orange-600"
          onClick={() => {
            setShowModal(true);
            setShowComponent(<AddOption questionUid={question.uid} />);
          }}
        >
          Add
        </span>
        <span className="bg-orange-600">Edit</span>
        <span className="bg-orange-400">Copy</span>
        <span className="bg-green-400">Show</span>
        <span className="bg-green-400">Bet</span>
        <span className="bg-orange-600">Close</span>
        <span className="bg-orange-400">Area-Show</span>
        <span className="bg-orange-400">
          <FontAwesomeIcon icon={faEyeSlash} />
        </span>
        <span>(0,0$)</span>
        <span>(0)</span>
      </div>
      <div>
        <table id="question-table">
          <thead>
            <tr>
              <td>Ans.</td>
              <td>Rate</td>
              <td>C-Rate</td>
              <td>Bets</td>
              <td>Return</td>
              <td>C-Out</td>
              <td>Refund</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {questionOptions
              ? questionOptions.map((i) => {
                  return <QuestionOptions option={i.answer} rate={i.rate} />;
                })
              : ""}
            {/* <QuestionOptions />
            <QuestionOptions />
            <QuestionOptions /> */}
          </tbody>{" "}
        </table>
      </div>
    </div>
  );
}

export default Question;
