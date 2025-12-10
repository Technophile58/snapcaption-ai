import React, { useState, useContext } from "react";
import API from "../api";
import { AuthContext } from "../context/AuthContext";

export default function Caption() {
  const { logout, token } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", file);

    try {
      setLoading(true);
      const res = await API.post("/ai/caption", fd, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCaption(res.data.caption);
    } catch {
      setCaption("Error generating caption");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container fade-in">
      <div className="card glass slide-up">
        <h2>Generate Caption</h2>

        <form onSubmit={submit}>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <button className="btn-primary">Generate</button>
        </form>

        {file && (
          <img src={URL.createObjectURL(file)} className="preview fade-in" alt="preview" />
        )}

        {loading && <div className="loader"></div>}

        {caption && (
          <div className="caption-box fade-in">{caption}</div>
        )}
      </div>
    </div>
  );
}
