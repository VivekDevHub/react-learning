const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static");

ffmpeg.setFfmpegPath(ffmpegPath);

const app = express();
app.use(cors());

/* 🎧 VIDEO INFO */
app.get("/info", async (req, res) => {
  try {
    const info = await ytdl.getInfo(req.query.url);

    res.json({
      title: info.videoDetails.title,
      thumbnail: info.videoDetails.thumbnails[0].url,
    });
  } catch {
    res.status(500).send("Error");
  }
});

/* 🎵 AUDIO DOWNLOAD */
app.get("/audio", async (req, res) => {
  try {
    const { url, quality } = req.query;

    if (!ytdl.validateURL(url)) {
      return res.status(400).send("Invalid URL");
    }

    res.header("Content-Disposition", 'attachment; filename="audio.mp3"');

    const stream = ytdl(url, { quality: "highestaudio" });

    ffmpeg(stream)
      .audioBitrate(quality === "320" ? 320 : 128)
      .toFormat("mp3")
      .pipe(res, { end: true });

  } catch {
    res.status(500).send("Audio error");
  }
});

/* 🎬 VIDEO DOWNLOAD */
app.get("/video", async (req, res) => {
  try {
    const { url } = req.query;

    if (!ytdl.validateURL(url)) {
      return res.status(400).send("Invalid URL");
    }

    res.header("Content-Disposition", 'attachment; filename="video.mp4"');

    ytdl(url, { quality: "highestvideo" }).pipe(res);

  } catch {
    res.status(500).send("Video error");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));