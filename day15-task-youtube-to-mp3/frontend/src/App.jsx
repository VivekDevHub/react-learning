import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000";

export default function App() {
  const [url, setUrl] = useState("");
  const [video, setVideo] = useState(null);
  const [type, setType] = useState("audio");
  const [quality, setQuality] = useState("128");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const fetchInfo = async () => {
    if (!url) return alert("Enter URL");

    try {
      setLoading(true);

      const res = await axios.get(
        `${API}/info?url=${encodeURIComponent(url)}`
      );

      setVideo(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch video info");
    } finally {
      setLoading(false);
    }
  };

  const download = async () => {
    try {
      setLoading(true);
      setProgress(0);

      const endpoint =
        type === "audio"
          ? `/audio?url=${encodeURIComponent(url)}&quality=${quality}`
          : `/video?url=${encodeURIComponent(url)}`;

      const res = await axios({
        url: `${API}${endpoint}`,
        method: "GET",
        responseType: "blob",
        onDownloadProgress: (e) => {
          if (e.total) {
            setProgress(Math.round((e.loaded * 100) / e.total));
          }
        },
      });

      const blob = new Blob([res.data]);
      const link = document.createElement("a");

      link.href = window.URL.createObjectURL(blob);
      link.download = type === "audio" ? "audio.mp3" : "video.mp4";
      link.click();

    } catch (err) {
      console.log(err);
      alert("Download failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>YT Downloader PRO</h1>

      <div className="input-box">
        <input
          placeholder="Paste YouTube URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={fetchInfo}>
          {loading ? "Loading..." : "Fetch"}
        </button>
      </div>

      {video && (
        <div className="card">
          <img src={video.thumbnail} alt="" />
          <p>{video.title}</p>

          <div className="row">
            <button onClick={() => setType("audio")}>🎵 Audio</button>
            <button onClick={() => setType("video")}>🎬 Video</button>
          </div>

          {type === "audio" && (
            <select
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
            >
              <option value="128">128 kbps</option>
              <option value="320">320 kbps</option>
            </select>
          )}

          <button onClick={download}>
            {loading ? "Downloading..." : "⬇ Download"}
          </button>

          {progress > 0 && (
            <div className="progress">
              <div style={{ width: `${progress}%` }}></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}