import { useState } from "react";
import "./styles.css";

export default function App() {
  const [createUTMActive, setCreateUTMActive] = useState(false);
  return (
    <div className="body">
      <div
        className="createUTMBtn"
        onClick={() => setCreateUTMActive(() => !createUTMActive)}
      >
        <span className={createUTMActive ? "activated" : ""}></span>
        <span className={createUTMActive ? "activated" : ""}></span>
      </div>
    </div>
  );
}
