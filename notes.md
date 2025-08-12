

#  File Upload with Node.js, Express, Multer, and EJS

## Project Goal

To create a file upload system using:

* **Node.js** – runtime environment
* **Express** – web server framework
* **Multer** – middleware for handling file uploads
* **EJS** – templating engine for rendering views

---

## Folder Structure

```
project-root/
├── index.js                 # Main server file
├── package.json             # Project metadata and dependencies
├── views/
│   └── homepage.ejs         # Upload form (frontend)
├── uploads/                 # Uploaded files stored here
├── node_modules/            # Installed dependencies
```

---

## Step 1: Initialize Project

Open your terminal and run:

```bash
mkdir file-upload-app
cd file-upload-app
npm init -y
```

This creates a basic `package.json` file.

---

## Step 2: Install Required Packages

Install the required packages:

```bash
npm install express multer ejs
```

For development with auto-reloading, install `nodemon`:

```bash
npm install --save-dev nodemon
```

Update your `package.json` to include the following scripts:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

---
