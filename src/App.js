import React from "react";
import { SnackbarProvider } from "notistack";
import "./App.css";

import Routes from "./routes";

import audio from "./assets/audio.mp3";
new Audio(audio).autoplay = true;

export default () => {
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
