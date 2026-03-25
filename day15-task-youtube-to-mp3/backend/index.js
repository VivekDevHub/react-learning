const express = require("express");
const cors = require("cors");
const ytdl = require("@distube/ytdl-core");
const { Innertube } = require("youtubei.js");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static");

ffmpeg.setFfmpegPath(ffmpegPath);

const app = express();
app.use(cors());

// 🔥 Normalize Shorts → Watch
const normalizeURL = (url) => {
  try {
    const parsed = new URL(url);

    if (parsed.pathname.includes("/shorts/")) {
      const id = parsed.pathname.split("/shorts/")[1];
      return `https://www.youtube.com/watch?v=${id}`;
    }

    return url;
  } catch {
    return url;
  }
};

// 🔥 Clean extra params (?si= etc)
const cleanURL = (url) => {
  try {
    const parsed = new URL(url);
    const id = parsed.searchParams.get("v");

    if (id) {
      return `https://www.youtube.com/watch?v=${id}`;
    }

    return url;
  } catch {
    return url;
  }
};

// 🔥 YTDL with headers
const getYTDL = (url, quality) => {
  return ytdl(url, {
    quality,
    requestOptions: {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
      },
    },
  });
};

/* 🎥 VIDEO INFO */
app.get("/info", async (req, res) => {
  try {
    let { url } = req.query;

    url = normalizeURL(url);
    url = cleanURL(url);

    const id = new URL(url).searchParams.get("v");

    const yt = await Innertube.create();
    const info = await yt.getInfo(id);

    res.json({
      title: info.basic_info.title,
      thumbnail: info.basic_info.thumbnail[0].url,
    });

  } catch (err) {
    console.log("❌ INFO ERROR:", err.message);
    res.status(500).send("Failed to fetch info");
  }
});

/* 🎵 AUDIO DOWNLOAD */
app.get("/audio", async (req, res) => {
  try {
    let { url, quality } = req.query;

    url = normalizeURL(url);
    url = cleanURL(url);

    if (!ytdl.validateURL(url)) {
      return res.status(400).send("Invalid URL");
    }

    console.log("🎵 Audio:", url);

    res.header("Content-Disposition", 'attachment; filename="audio.mp3"');

    const stream = getYTDL(url, "highestaudio");

    ffmpeg(stream)
      .audioBitrate(quality === "320" ? 320 : 128)
      .toFormat("mp3")
      .on("error", (err) => {
        console.log("❌ AUDIO ERROR:", err.message);
        res.status(500).end();
      })
      .pipe(res, { end: true });

  } catch (err) {
    console.log(err);
    res.status(500).send("Audio error");
  }
});

/* 🎬 VIDEO DOWNLOAD */
app.get("/video", async (req, res) => {
  try {
    let { url } = req.query;

    url = normalizeURL(url);
    url = cleanURL(url);

    if (!ytdl.validateURL(url)) {
      return res.status(400).send("Invalid URL");
    }

    console.log("🎬 Video:", url);

    res.header("Content-Disposition", 'attachment; filename="video.mp4"');

    const videoStream = getYTDL(url, "highestvideo");
    const audioStream = getYTDL(url, "highestaudio");

    ffmpeg()
      .input(videoStream)
      .input(audioStream)
      .outputOptions([
        "-c:v copy",
        "-c:a aac",
        "-map 0:v:0",
        "-map 1:a:0",
      ])
      .format("mp4")
      .on("start", (cmd) => {
        console.log("🔥 FFmpeg:", cmd);
      })
      .on("error", (err) => {
        console.log("❌ VIDEO ERROR:", err.message);
        res.status(500).end();
      })
      .on("end", () => {
        console.log("✅ Done");
      })
      .pipe(res, { end: true });

  } catch (err) {
    console.log(err);
    res.status(500).send("Video error");
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));