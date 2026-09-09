import { useEffect, useState } from "react";

export default function useTypewriter(words, { speed = 70, pause = 1600, deleteSpeed = 40 } = {}) {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [phase, setPhase] = useState(reduced ? "done" : "typing");

  useEffect(() => {
    if (reduced || !words.length || phase === "done") {
      return undefined;
    }

    const current = words[index % words.length];
    let timeoutId;

    if (phase === "typing") {
      if (text === current) {
        timeoutId = setTimeout(() => setPhase("pausing"), pause);
      } else {
        timeoutId = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, speed);
      }
    } else if (phase === "pausing") {
      timeoutId = setTimeout(() => setPhase("deleting"), 200);
    } else if (phase === "deleting") {
      if (text.length === 0) {
        timeoutId = setTimeout(() => {
          setIndex((value) => (value + 1) % words.length);
          setPhase("typing");
        }, deleteSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setText((value) => value.slice(0, -1));
        }, deleteSpeed);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [words, index, text, phase, speed, pause, deleteSpeed, reduced]);

  return { text, done: phase === "done" };
}
