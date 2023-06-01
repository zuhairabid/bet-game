import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Games = createContext();

const GamesContext = ({ children }) => {
  const [GamesData, setGamesData] = useState([]);
  const [Questions, setQuestions] = useState([]);

  const updateGameData = async () => {
    const GameRef = doc(db, "admin", "games", "show", "live");
    var unsubscribe = await onSnapshot(GameRef, (game) => {
      if (game.exists()) {
        // console.log(game.data());
        setGamesData(game.data());
      }
    });
    return () => unsubscribe();
  };

  const updateQuestionData = async () => {
    const questionRef = doc(db, "admin", "games", "question-live", "live");
    var unsubscribe = await onSnapshot(questionRef, (question) => {
      if (question.exists()) {
        // console.log(question.data());
        setQuestions(question.data());
      }
    });
    return () => unsubscribe();
  };

  useEffect(() => {
    updateGameData();
    updateQuestionData();
  }, []);

  return (
    <Games.Provider value={{ GamesData, Questions }}>{children}</Games.Provider>
  );
};

export default GamesContext;

export const GamesState = () => {
  return useContext(Games);
};
