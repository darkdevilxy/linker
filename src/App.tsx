import "./App.scss";

import Navbar from "./Components/Navbar/Navbar";
import Links from "./Components/Links/Links";

function App() {
  return (
    <div className="app_container">
      <div className="app">
        <Navbar />
        <div className="scrollabel_section">
          <Links />
          <div className="add_button_container">
            Add
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
