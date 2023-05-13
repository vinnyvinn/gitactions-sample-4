const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

function run() {
  //Get Input values
  const bucket = core.getInput('bucket',{required:true});
  const bucketRegion = core.getInput('bucket-region',{required:true});
  const distFolder = core.getInput('dist-folder',{required:true});

  //Upload Files
  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);
  core.notice("Hello from custom actions");
}

run();