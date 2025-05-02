#!/usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const { removeSync, copySync } = require("fs-extra");

const projectName = "ssu-catch-lyrics"
const currentPath = process.cwd();
const isCurrentPathProject = projectName === ".";

const tempPath = path.join(currentPath, "temp");
const projectPath = isCurrentPathProject
  ? currentPath
  : path.join(currentPath, projectName);

const GIT_REPO = "https://github.com/AshtonYoon/ssu-catch-lyrics-boilerplate.git";

// project-name 입력시
if (!isCurrentPathProject) {
  try {
    fs.mkdirSync(projectPath);
  } catch (err) {
    if (err.code === "EXIST") {
      console.log(
        `[ERROR]: The file ${projectName} already exist in the current directory.`
      );
    } else {
      console.log(error);
    }
    process.exit(1);
  }
}

async function generator() {
  try {
    console.log("[INFO]: Downloading ssu-catch-lyrics...");
    execSync(`git clone ${GIT_REPO} ${tempPath}`);

    console.log("[INFO]: Copying files...");
    copySync(`${tempPath}/react-boilerplate`, projectPath);

    removeSync(tempPath);

    console.log("[INFO]: Moving into directory...");
    if (!isCurrentPathProject) {
      process.chdir(projectPath);
    }

    console.log("[INFO]: install dependencies...");
    execSync("npm install");

    console.log("[SUCCESS]: Success to ssu-catch-lyrics. Available now !");
  } catch (error) {
    console.log(error);
  }
}

generator();