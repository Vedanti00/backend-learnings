import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Hello Vedanti</h1>
      <p>Welcome to the Joke App!</p>
      <p>Total jokes are {jokes.length}</p>
      <div>
        {jokes.map((joke, id) => (
          <div key={id}>
            <h2>{joke.title}</h2>
            <p>{joke.joke}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
