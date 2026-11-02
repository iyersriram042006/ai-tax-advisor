import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function App() {
  const [status, setStatus] = useState("loading");
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(API_URL + "/api/health")
      .then((res) => {
        if (!res.ok) throw new Error("Bad response");
        return res.json();
      })
      .then((data) => {
        setInfo(data);
        setStatus("connected");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <h1>AI Tax Advisor</h1>
      {status === "loading" && <p>Checking backend...</p>}
      {status === "connected" && (
        <p>
          Backend connected: {info.service} (v{info.version})
        </p>
      )}
      {status === "error" && (
        <p>Backend not reachable. Is the server running on port 8000?</p>
      )}
    </main>
  );
}

export default App;
