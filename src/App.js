import logo from "./logo.svg";
import "./App.css";
import { CardGrid } from "./Components/CardGrid/CardGrid";
import { UseCasesModule } from "./Components/UseCasesModule/UseCasesModule";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <b>SmartQ SMS Bot</b>
        </h1>
        <p>Your AI powered virtual assistant, available via sms.</p>
        <button
          className="Signup-Button"
          onClick={() =>
            (window.location.href = "https://buy.stripe.com/3cs5kV9uW39N1s4288")
          }
        >
          Sign Up
        </button>
      </header>
      <UseCasesModule />
    </div>
  );
}

export default App;
