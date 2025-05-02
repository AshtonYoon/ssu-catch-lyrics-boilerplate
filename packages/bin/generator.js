// generator.js
// #! /usr/bin/env node
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
      // 이미 해당 경로 존재
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
    // git clone
    console.log("[INFO]: Downloading ssu-catch-lyrics...");
    execSync(`git clone ${GIT_REPO} ${tempPath}`);

    // 임시 폴더에서 react-boilerplate만 복사
    console.log("[INFO]: Copying files...");
    copySync(`${tempPath}/react-boilerplate`, projectPath);

    // 임시 폴더 삭제
    removeSync(tempPath);

    // 현재 경로 이동
    console.log("[INFO]: Moving into directory...");
    if (!isCurrentPathProject) {
      process.chdir(projectPath);
    }

    // 의존성 설치
    console.log("[INFO]: install dependencies...");
    execSync("npm install");

    // SUCCESS !
    console.log("[SUCCESS]: Success to ssu-catch-lyrics. Available now !");
  } catch (error) {
    console.log(error);
  }
}

generator();