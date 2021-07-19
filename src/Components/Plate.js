import plate from "../images/plate.png";
import img1 from "../images/fail.png";
import cover from "../images/cover.png";
import img0 from "../images/win.png";
import img2 from "../images/win2.png";

import { CSSTransition } from "react-transition-group";
import { useState, useEffect } from "react";

const Plate = ({ toggleLoseGame, toggleWinGame, toggleGame }) => {
  const [openPlate, setOpenPlate] = useState(true);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const images = [img1, img0, img2];

    const num = Math.floor(Math.random() * 3);
    setImage(images[num]);
  }, []);

  const togglePlate = (event) => {
    console.log(event.currentTarget.dataset.img);
    setOpenPlate(!openPlate);
    if (event.currentTarget.dataset.img.includes("fail")) {
      toggleLoseGame();
    } else {
      toggleWinGame();
    }
    toggleGame();
  };

  return (
    <div className="item">
      <CSSTransition
        in={openPlate}
        timeout={500}
        classNames="open"
        unmountOnExit
      >
        <button
          data-img={image}
          className="cover-button "
          type="button"
          onClick={togglePlate}
        >
          <img className="cover" src={cover} alt="" />
        </button>
      </CSSTransition>
      <img className="plate" src={plate} alt="" />
      <img className="fruit" src={image} alt="" />
    </div>
  );
};

export default Plate;
