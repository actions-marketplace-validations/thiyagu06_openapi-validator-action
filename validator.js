const core = require('@actions/core');
const fs = require('fs')
const path = require('path')

const validate = async(filePath) => {
if (typeof filePath !== 'string'){
  throw Error("path is not string")
}
const dir = process.env.GITHUB_WORKSPACE || __dirname
const fullPath = path.resolve(dir, filePath)
console.log(`schema file full path:${fullPath}`)
try {
  const SwaggerParser = require("@apidevtools/swagger-parser");
  let api = await SwaggerParser.validate(fullPath, {continueOnError:true, validate:{spec: false}});
  console.log("API specification is  valid ")
}
catch(err) {
  console.error(err.message);
  core.setFailed("API specification is invalid")
}
}

module.exports = validate