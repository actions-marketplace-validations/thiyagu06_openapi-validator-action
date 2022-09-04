const core = require('@actions/core');
const validate = require('./validator')

try {
  const filePath = core.getInput('filepath');
  console.log(`file path ${filePath}`);
  validate(filePath)
} catch (error) {
  core.setFailed(error.message);
}
