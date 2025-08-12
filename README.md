
##  File Upload App (Node.js + Multer + EJS)

A simple web app that allows users to upload image files using a drag-and-drop style UI. The backend is powered by **Express.js** and **Multer**, while the frontend uses **EJS** templates for rendering.

---

###  Features

*  Drag-and-drop or traditional file selection
*  Image uploads stored on the local file system (`/uploads`)
*  Simple and modern frontend built with HTML + CSS
*  Form data parsing with Express and Multer

---

###  Requirements

* [Node.js](https://nodejs.org/) (v14 or later recommended)
* npm (Node package manager)

---

###  Folder Structure

```
project/
├── uploads/              # Where uploaded files are saved
├── views/
│   └── homepage.ejs      # Main UI template
├── index.js              # Main Express server
├── package.json
└── README.md
```

---

###  Setup Instructions

1. **Clone this repository** or download the source files.

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the app**:

   ```bash
   node index.js
   ```

4. **Open in browser**:

   Visit [http://localhost:3000](http://localhost:3000) to view the upload UI.

---

###  Uploading Files

* Files are uploaded via a form with `multipart/form-data` encoding.
* Multer saves them into the `/uploads` folder with a unique timestamp-based filename.
* You can modify allowed file types, size limits, etc., in the Multer config inside `index.js`.

---

###  Uploaded Files

All uploaded files are saved locally in the `uploads/` directory. Make sure this directory:

* Exists before running the app (or it will be auto-created)
* Is writable by the server

>  **Note**: This app does not yet display uploaded images. It only stores them.

---

###  Security Considerations

This demo does **not** include:

* File type validation
* File size limits
* File preview/display
* Upload progress or cloud storage integration

For production use, consider:

* Validating file types (e.g., only images)
* Storing uploads in services like Cloudinary, S3, etc.
* Adding error handling and logging
* Setting size limits in the Multer config

---


