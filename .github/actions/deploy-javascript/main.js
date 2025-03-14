const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

funtion run() {
  core.notice('hello from my custom javascript action');
}

run()