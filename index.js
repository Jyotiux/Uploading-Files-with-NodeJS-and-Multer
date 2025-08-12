const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Ensure uploads folder exists
const uploadPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Configure Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('homepage');
});

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    console.log(' File not received!');
  } else {
    console.log(' File received:', req.file);
  }

  console.log('Form Data:', req.body);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
