import { useState } from "react";
import data from "./assets/data.json";
import List from "./List";

const App: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)} type="button">
        Click
      </button>
      <List items={data} />
    </div>
  );
};

export default App;
