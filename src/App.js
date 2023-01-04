import "./App.css";
import * as components from "./components";

function App() {
  return (
    <div className="App">
      <body>
        <components.NavigationBar />

        <div className="content">
          <h1>Welcome to my website!</h1>
          <p>This is the default content for the website.</p>
        </div>
      </body>
    </div>
  );
}

export default App;
