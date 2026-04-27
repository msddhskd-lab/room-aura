import { useState } from "react";
import { useRouter } from "next/router";

export default function Upload() {
  const [image, setImage] = useState(null);
  const router = useRouter();

  const handleSubmit = () => {
    localStorage.setItem("roomImage", image);
    router.push("/result");
  };

  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Upload your room</h1>

      <input
        type="file"
        onChange={(e) =>
          setImage(URL.createObjectURL(e.target.files[0]))
        }
      />

      {image && (
        <img
          src={image}
          alt="preview"
          style={{ width: "300px", marginTop: "20px" }}
        />
      )}

      <br />

      <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
        Generate Design
      </button>
    </div>
  );
}
