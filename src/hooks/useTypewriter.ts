import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  speed?: number; // ms per character
  delay?: number; // initial delay before starting
  onDone?: () => void;
}

/**
 * useTypewriter - animates text character by character.
 * @param text The full string to animate
 * @param options speed (ms), delay (ms), onDone callback
 * @returns The currently displayed text
 */
export function useTypewriter(
  text: string,
  options: UseTypewriterOptions = {}
) {
  const { speed = 35, delay = 0, onDone } = options;
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let timeout: NodeJS.Timeout;
    let cancelled = false;

    const start = () => {
      let i = 0;
      function type() {
        if (cancelled) return;
        setDisplayed(text.slice(0, i + 1));
        if (i < text.length - 1) {
          i++;
          timeout = setTimeout(type, speed);
        } else if (onDone) {
          onDone();
        }
      }
      type();
    };

    if (delay > 0) {
      timeout = setTimeout(start, delay);
    } else {
      start();
    }

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
    // Only restart if text or options change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, delay]);

  return displayed;
} 