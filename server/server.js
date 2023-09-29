const  express =  require("express");
const  mongoose =  require("mongoose");
const  cors =  require("cors");
const  dotenv =  require("dotenv");
const  multer = require("multer");
const  app = express();
dotenv.config();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(multer({ storage, fileFilter }).single("img"));



//Routes
const blogsRoutes = require("./Routes/blogs.js");
const authRoutes = require("./Routes/auth.js");
// Middlewares
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/blogs", blogsRoutes);
app.use("/auth", authRoutes);

// Mongose DB
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Runnging on port :  ${PORT}`))
  )
  .catch((err) => console.log(err.message));
