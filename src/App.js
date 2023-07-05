import { useState } from "react";

function App() {
  const [excuses, setExcuses] = useState(null);

  const getExcuse = (category) => {
    fetch(`https://excuser-three.vercel.app/v1/excuse/${category}`)
      .then((result) => result.json())
      .then((data) => setExcuses(data[0]));
  };

  console.log(excuses);

  return (
    <div className="bg-green-500container mx-auto py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Generate an Excuse</h1>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
          onClick={() => getExcuse("party")}
        >
          Party
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
          onClick={() => getExcuse("family")}
        >
          Family
        </button>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
          onClick={() => getExcuse("office")}
        >
          Office
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
          onClick={() => getExcuse("developers")}
        >
          Developers
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
          onClick={() => getExcuse("funny")}
        >
          Funny
        </button>
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
          onClick={() => getExcuse("gaming")}
        >
          Gaming
        </button>
      </div>

      {excuses && <h3 className="text-xl mt-4">{excuses?.excuse}</h3>}
    </div>
  );
}

export default App;
