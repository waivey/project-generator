const { mkdir, writeFile, readFile } = require("fs");
const data = new Uint8Array(Buffer.from(""));
let eslintTemp = require("./template-eslint");
eslintTemp = JSON.stringify(eslintTemp);
// const package = package.json file template

const directFunc = cb => {
  mkdir("./my_new_project", { recursive: true }, err => {
    if (err) throw err;
    console.log("Created main directory!");
    mkdir("./my_new_project/spec", { recursive: true }, err => {
      if (err) throw err;
      console.log("Created spec folder!");
      writeFile("./my_new_project/spec/index.spec.js", data, err => {
        if (err) throw err;
        console.log("spec folder and file are made!");
      });
    });
    writeFile("./my_new_project/index.js", data, err => {
      if (err) throw err;
      console.log("index.js file made!");
    });
    writeFile("./my_new_project/package.json", "", err => {
      if (err) throw err;
      console.log("empty package.json file made!");
      readFile("./template-package.json", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
        cb(null, "did you work??");
      });
    });
    writeFile("./my_new_project/README.md", "", err => {
      if (err) throw err;
      console.log("README.md file made!");
    });
    writeFile(
      "./my_new_project/eslint.js",
      `module.exports = ${eslintTemp}`,
      err => {
        if (err) throw err;
        console.log("eslint.js file made!");
      }
    );
    writeFile("./my_new_project/.gitignore", "node_modules", err => {
      if (err) throw err;
      console.log(".gitignore file made!");
    });
  });
};
directFunc((err, data) => {
  console.log(data);
});
