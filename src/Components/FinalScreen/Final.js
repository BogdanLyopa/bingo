import play from "../../images/play.png";
import cancice from "../../images/Candice.png";
import finalCat from "../../images/finalCat.png";
import log from "../../images/log.png";
import foregraund from "../../images/foregraund.png";
import restart from "../../images/restart.png";
import { CSSTransition } from "react-transition-group";
import "./final.css";

export default function Final({ onRestart, gameStart }) {
  return (
    <div className="final-screen">
      <div className="container">
        <div className="final">
          <CSSTransition
            in={!gameStart}
            timeout={1600}
            appear={!gameStart}
            classNames="log"
            unmountOnExit
          >
            <img className="log" src={log} alt="" />
          </CSSTransition>
          <CSSTransition
            in={!gameStart}
            timeout={2000}
            appear={!gameStart}
            classNames="press"
            unmountOnExit
          >
            <img className="play" src={play} alt="" />
          </CSSTransition>
          <CSSTransition
            in={!gameStart}
            timeout={1700}
            appear={!gameStart}
            classNames="candice"
            unmountOnExit
          >
            <img className="candice" src={cancice} alt="" />
          </CSSTransition>
          <CSSTransition
            in={!gameStart}
            timeout={1700}
            appear={!gameStart}
            classNames="finalCat"
            unmountOnExit
          >
            <img className="finalCat" src={finalCat} alt="" />
          </CSSTransition>
          <CSSTransition
            in={!gameStart}
            timeout={2500}
            appear={!gameStart}
            classNames="restart"
            unmountOnExit
          >
            <button type="button" className="restart">
              <img src={restart} alt="" onClick={onRestart} />
            </button>
          </CSSTransition>
          <CSSTransition
            in={!gameStart}
            timeout={600}
            appear={!gameStart}
            classNames="foregraund"
            unmountOnExit
          >
            <img className="foregraund" src={foregraund} alt="" />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}
