import React from "react";
import { EstimateView } from "./components/views";
import { MantineProvider } from "@mantine/core";

function App(): React.ReactElement {
  return (
    <div className="App">
      <MantineProvider>
        <EstimateView />
      </MantineProvider>
    </div>
  );
}

export default App;
