import { useRef } from "react";
import "./App.css";
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
  const Alice_Queen = useRef();
  const { ref, playState } = useWebAnimations({
    keyframes: [
      { transform: "translate(0px) " },
      { transform: "translate(500px) " },
    ],
    timing: {
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
    },
  });
  return (
    <div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div className="scenery">
          <img
            id="palm1"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
          />
          <img
            id="pawn1"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          />
          <img
            id="rook1"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
          />
        </div>
        <div id="#alice">
          <img
            ref={ref}
            id="alice_queen"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
