import Cat from "./Components/Cat";
import Final from "./Components/FinalScreen/Final";
import Plate from "./Components/Plate";

import fail from "./images/failStamp.png";
import win from "./images/winStamp.png";
import logo from "./images/logo.png";
import copyright from "./images/copyright.png";

import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function App() {
  const [gameStart, setGameStart] = useState(true);
  const [gameLose, setGameLose] = useState(false);
  const [gameWin, setGameWin] = useState(false);

  const restart = () => {
    setGameStart(true);
    setGameLose(false);
    setGameWin(false);
  };
  const toggleGame = () => {
    setGameStart(!gameStart);
  };
  const toggleLoseGame = () => {
    setGameLose(!gameLose);
  };
  const toggleWinGame = () => {
    setGameWin(!gameWin);
  };
  return (
    <div className="App">
      <CSSTransition
        in={gameStart}
        timeout={1250}
        classNames="game"
        unmountOnExit
      >
        <div className="first-screen">
          <div className="container">
            <div className="game">
              <img className="logo" src={logo} alt="logo" />

              <div className="items">
                <Plate
                  toggleLoseGame={toggleLoseGame}
                  toggleWinGame={toggleWinGame}
                  toggleGame={toggleGame}
                />
                <Plate
                  toggleLoseGame={toggleLoseGame}
                  toggleWinGame={toggleWinGame}
                  toggleGame={toggleGame}
                />
                <Plate
                  toggleLoseGame={toggleLoseGame}
                  toggleWinGame={toggleWinGame}
                  toggleGame={toggleGame}
                />
              </div>
              {gameLose && (
                <CSSTransition
                  in={gameLose}
                  appear={gameLose}
                  timeout={500}
                  classNames="over"
                >
                  <img className="fail" src={fail} alt="failstump" />
                </CSSTransition>
              )}
              {gameWin && (
                <CSSTransition
                  in={gameWin}
                  appear={gameWin}
                  timeout={500}
                  classNames="over"
                >
                  <img className="fail" src={win} alt="" />
                </CSSTransition>
              )}
              <Cat />
            </div>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={!gameStart}
        appear={!gameWin}
        classNames="second-screen"
        timeout={1500}
        unmountOnExit
      >
        <Final onRestart={restart} gameStart={gameStart} />
      </CSSTransition>
      <img className="copyright" src={copyright} alt="copyright" />
    </div>
  );
}

export default App;
