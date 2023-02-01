import React, { useEffect, useState } from "react";
import TTable from "./TTable.jsx";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/users")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
        console.table(json);
      });
  }, []);
  return (
    <>
      <TTable data={[...data]} loading={loading} />
    </>
  );
}

export default App;
