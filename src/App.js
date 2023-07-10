import "./App.css";
import odvojene from "./funkcija.jsx";

function App() {
  const string1 = "Prvi const";
  const string2 = "Druga varijabla";

  return (
    <div>
      <p>{string1}</p>
      <p>{string2}</p>
      <p>
        {string1} {string2}
      </p>
      <p>{`${string1} ${string2}`}</p>

      <p>{odvojene()}</p>
    </div>
  );
}

export default App;
