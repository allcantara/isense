import React, { useEffect } from "react";
import { SnackbarProvider } from "notistack";
import "./App.css";

import audio from "./assets/audio.mp3";

import Routes from "./routes";

export default () => {
  useEffect(() => {
    onPlayAudio();
  }, []);

  function onPlayAudio() {
    new Audio(audio).autoplay = true;
  }

  return (
    <SnackbarProvider
      maxSnack={2}
      autoHideDuration={2000}
      dense={false}
      preventDuplicate={true}
      anchorOrigin={{ vertical: "center", horizontal: "center" }}
    >
      <Routes />
    </SnackbarProvider>
  );
};
