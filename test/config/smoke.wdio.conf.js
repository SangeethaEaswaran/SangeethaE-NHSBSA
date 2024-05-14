var merge = require("deepmerge");
var globalConfig = require("../../base.wdio.conf.js");
exports.config = merge.all(
  [
    globalConfig.config,
    {
      capabilities: [
        {
          maxInstances: parseInt(process.env.MAXINSTANCES),
          browserName: "chrome",
          // browserVersion: 'stable' ,
          'goog:chromeOptions': {
            '--headless'
          },
          specs: ["../features/smoke/searchJobs.smoke.feature"],
        },
      ],
    },
  ],
  { clone: false },
);
