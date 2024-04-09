import { useState } from "react";
import { fetchAdvice } from "./api";
import { useEffect } from "react";

function App() {
  const [adviceData, setAdviceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getNewAdvice = async () => {
    try {
      setLoading(true);
      const advice = await fetchAdvice();
      setAdviceData(advice);
      setLoading(false);
    } catch (error) {
      setError("Hubo un error al obtener el consejo.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getNewAdvice();
  }, []);

  return (
    <main className="bg-slate-900 h-screen">
      {loading ? (
        <p className="text-white">Cargando...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="flex flex-col h-full justify-center items-center">
          <div className="bg-slate-700 lg:w-1/3 w-1/2 rounded-lg flex flex-col items-center place-content-center">
            <p className="text-emerald-300 pt-6 tracking-widest text-xs">
              ADVICE #{adviceData.id}
            </p>
            <h3 className="text-gray-400 mt-5 text-lg text-center">
              {adviceData.advice}
            </h3>
            <img
              className="pt-10 pb-12"
              src="../images/pattern-divider-desktop.svg"
              alt="img footer"
            />


          </div>
          <button
          className="bg-emerald-300 rounded-full p-3 -mt-6 hover:bg-emerald-400"
          onClick={getNewAdvice}
        >
          <img className="w-5" src="../images/icon-dice.svg" alt="dice" />
        </button>
        </div>
      )}
    </main>
  );
}

export default App;
