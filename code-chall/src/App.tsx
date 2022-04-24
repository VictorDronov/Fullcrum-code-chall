import React from "react";
import { EstimateView } from "./components/views";
// 3 costs to be calculated for an estimate

// Material Costs
// Labor Costs & All Inclusive costs(Total?)

function App(): React.ReactElement {
  return (
    <div className="App">
      <EstimateView />
    </div>
  );
}

export default App;
