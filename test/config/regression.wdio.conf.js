var merge = require("deepmerge");
var globalConfig = require("../../base.wdio.conf.js");

exports.config = merge.all(
  [
    globalConfig.config,
    {
      capabilities: [
        {
          browserName: "chrome",
          specs: ["../features/regression/searchJobs.regression.feature"],
        },
      ],
    },
  ],
  { clone: false },
);