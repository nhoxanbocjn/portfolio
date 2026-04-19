
import React, { useEffect, useState } from "react";

const TypingText = ({ text, speed = 150, pause = 1500 }) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (index < text.length) {
          setDisplayed(text.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (index > 0) {
          setDisplayed(text.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed]);

  useEffect(() => {
    if (index === text.length && !isDeleting) {
      const pauseTimeout = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(pauseTimeout);
    }
  }, [index, isDeleting, pause, text]);

  return <span>{displayed}</span>;
};

export default TypingText;