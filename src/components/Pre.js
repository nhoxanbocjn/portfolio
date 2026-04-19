import React, { useMemo } from "react";
import loading1 from "../Assets/loading.gif";
import loading2 from "../Assets/bot.gif";

function Pre(props) {
  const randomLoader = useMemo(() => {
    const loaders = [loading1, loading2];
    return loaders[Math.floor(Math.random() * loaders.length)];
  }, []);

  return (
    <div
      id={props.load ? "preloader" : "preloader-none"}
      style={{
        backgroundImage: props.load ? `url(${randomLoader})` : "none",
      }}
    />
  );
}

export default Pre;