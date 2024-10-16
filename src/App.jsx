import "./App.css";
import Counter from "./Count";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./User";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }

  const handleClick2 = () => {
    alert("Button 2 Clicked");
  };

  const addToFour = (num) => {
    alert(num + 4);
  };

  return (
    <>
      <h2>React Core concepts 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button
        onClick={() => {
          alert("Button 3 clicked");
        }}
      >
        Click 3
      </button>
      <button onClick={()=>addToFour(5)}>Clicked 4</button>
    </>
  );
}

export default App;
