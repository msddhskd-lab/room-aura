import { useEffect, useState } from "react";

export default function Result() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage(localStorage.getItem("roomImage"));
  }, []);

  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Your Room, Reimagined ✨</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div>
          <p>Before</p>
          {image && <img src={image} style={{ width: "250px" }} />}
        </div>

        <div>
          <p>After</p>
          <div
            style={{
              width: "250px",
              height: "180px",
              background: "#ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            AI Design
          </div>
        </div>
      </div>

      <p style={{ marginTop: "20px" }}>
        Makes your room feel cleaner and more spacious
      </p>

      <a href="https://www.amazon.in" target="_blank">
        <button style={{ marginTop: "20px" }}>
          Recreate this room
        </button>
      </a>
    </div>
  );
}
