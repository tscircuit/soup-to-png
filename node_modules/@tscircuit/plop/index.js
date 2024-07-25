#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');
const prompts = require('prompts');

async function getTemplateFiles() {
  try {
    const files = await fs.readdir(path.resolve(__dirname, 'template-files'));
    return files;
  } catch (error) {
    console.error('Error reading template-files directory:', error.message);
    process.exit(1);
  }
}

async function selectFile(files) {
  const response = await prompts({
    type: 'autocomplete',
    name: 'file',
    message: 'Select a file to copy:',
    choices: files.map(file => ({ title: file, value: file })),
  });

  return response.file;
}

async function copyFile(file) {
  const sourcePath = path.resolve(__dirname, 'template-files', file);
  const destinationPath = path.join(process.cwd(), file);

  try {
    await fs.copyFile(sourcePath, destinationPath);
    console.log(`File "${file}" copied successfully to the current directory.`);
  } catch (error) {
    console.error('Error copying file:', error.message);
  }
}

async function main() {
  const files = await getTemplateFiles();
  const selectedFile = await selectFile(files);

  if (selectedFile) {
    await copyFile(selectedFile);
  } else {
    console.log('No file selected. Exiting...');
  }
}

main();
