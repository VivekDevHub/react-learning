import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [url, setUrl] = useState("");
  const [video, setVideo] = useState(null);
  const [type, setType] = useState("audio");
  const [quality, setQuality] = useState("128");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const API = "http://localhost:5000";

  // 🎧 Fetch Video Info
  const fetchInfo = async () => {
    if (!url) return alert("Please enter URL");

    try {
      setLoading(true);
      const res = await axios.get(`${API}/info?url=${url}`);
      setVideo(res.data);
    } catch {
      alert("Invalid YouTube URL");
    } finally {
      setLoading(false);
    }
  };

  // 🎬 Download Handler
  const handleDownload = async () => {
    if (!url) return alert("Enter URL first");

    try {
      setProgress(0);
      setLoading(true);

      const endpoint =
        type === "audio"
          ? `/audio?url=${url}&quality=${quality}`
          : `/video?url=${url}`;

      const response = await axios({
        url: `${API}${endpoint}`,
        method: "GET",
        responseType: "blob",
        onDownloadProgress: (e) => {
          if (e.total) {
            const percent = Math.round((e.loaded * 100) / e.total);
            setProgress(percent);
          }
        },
      });

      const blob = new Blob([response.data]);
      const link = document.createElement("a");

      link.href = window.URL.createObjectURL(blob);
      link.download = type === "audio" ? "audio.mp3" : "video.mp4";
      link.click();

    } catch {
      alert("Download failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="card">

        <h1>🎵 YT Converter PRO</h1>

        {/* 🔗 Input */}
        <input
          placeholder="Paste YouTube URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        {/* 🔍 Fetch Button */}
        <button onClick={fetchInfo} disabled={loading}>
          {loading ? "Fetching..." : "Fetch Info"}
        </button>

        {/* 🎥 Video Preview */}
        {video && (
          <div className="video">
            <img src={video.thumbnail} alt="thumbnail" />
            <p>{video.title}</p>
          </div>
        )}

        {/* 🎧 Type Toggle */}
        <div className="row">
          <button
            className={type === "audio" ? "active" : ""}
            onClick={() => setType("audio")}
          >
            🎵 Audio
          </button>

          <button
            className={type === "video" ? "active" : ""}
            onClick={() => setType("video")}
          >
            🎬 Video
          </button>
        </div>

        {/* 🎵 Quality Select */}
        {type === "audio" && (
          <select value={quality} onChange={(e) => setQuality(e.target.value)}>
            <option value="128">128 kbps</option>
            <option value="320">320 kbps</option>
          </select>
        )}

        {/* ⬇️ Download */}
        <button onClick={handleDownload} disabled={loading}>
          {loading ? "Processing..." : "Download"}
        </button>

        {/* 📊 Progress */}
        {progress > 0 && (
          <div className="progress">
            <div style={{ width: `${progress}%` }}></div>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;