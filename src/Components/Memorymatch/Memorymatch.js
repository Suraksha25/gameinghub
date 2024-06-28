import React, { useState, useEffect, useRef } from "react";
import GameController from "./GameController";
import "./Memorymatch.css";
export default function Memorymatch() {


  return (
    <div className="twozero">
      <div className="two">
      <GameController />
      </div>
    </div>
  );
}
