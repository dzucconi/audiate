import { Howl } from "howler";
import paramters from "queryparams";

import sine from "./sine.mp3";
import { block, ambient } from "../dist";

const { mode } = paramters({ mode: null });

const play = () => {
  document.getElementById("root").innerHTML =
    "<center>playing sound...</center>";

  const sound = new Howl({
    src: [sine],
    loop: true,
    volume: 0.5
  });

  sound.play();
};

const init = () => {
  if (mode === "block") {
    block({ onEnable: play });
    return;
  }

  if (mode === "ambient") {
    ambient();
    play();
    return;
  }

  document.getElementById("root").innerHTML = `
    <center>
      <a href="/?mode=block">block</a>
      <a href="/?mode=ambient">ambient</a>
    </center>
  `;
};

document.addEventListener("DOMContentLoaded", init);
