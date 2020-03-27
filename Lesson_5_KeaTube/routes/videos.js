const router = require("express").Router();
const uuid = require("uuid").v4;

const crypto = require("crypto");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "videos/");
  },
  filename: (req, file, cb) => {
    cb(null, crypto.randomBytes(18).toString("hex"));
  }
});

const upload = multer({ storage: storage });

const videos = [
  {
    id: "",
    title: "NightSky",
    thumbnail: "",
    description: "Watch this beautiful sky and enjoy the stars!",
    fileName: "b2f89296-94f8-4c00-b4a0-1a1c05b2d68c.mp4",
    category: "Science",
    tags: ["stars", "sky"]
  }
];

const videosPerPage = 12;

router.get("/videos", (req, res) => {
  const page = req.query.page ? Number(req.query.page) : 1;
  const start = (page - 1) * videosPerPage;
  const end = start + videosPerPage;

  return res.send({ response: videos.slice(start, end) });
});

router.get("/videos/:videoId", (req, res) => {
  const video = videos.find(video => video.fileName === req.params.videoId);
  return res.send({ response: video });
});

router.post("videos/", upload.single("uploadedVideo"), (req, res) => {
  // let newVideo = req.body
  // newVideo.id = videos.length
  // videos.push(newVideo);

  // return res.send(videos);

  return res.redirect("/");
});

module.exports = router;
