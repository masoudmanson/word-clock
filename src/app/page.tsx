"use client";

import { useState } from "react";
import Clock from "./components/clock";
import TexturePicker from "./components/texturePicker";
import { ClockContext } from "./context";
import { Suspense } from 'react';

export default function Home() {
  const [texture, setTexture] = useState("bg-rust-1");
  const [ledColor, setLedColor] = useState("white");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <ClockContext.Provider value={{ texture, setTexture, ledColor, setLedColor }}>
        <Clock />
        <TexturePicker />
      </ClockContext.Provider>
    </main>
  );
}
