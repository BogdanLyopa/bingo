import blitzy from "../images/blitzy.png";
import arm from "../images/group.png";
import { CSSTransition } from "react-transition-group";

export default function Cat() {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={4000}
      classNames="cat"
      unmountOnExit
    >
      <div className="cat">
        <img className="blitz" src={blitzy} alt="" />
        <img className="arm" src={arm} alt="" />
      </div>
    </CSSTransition>
  );
}
