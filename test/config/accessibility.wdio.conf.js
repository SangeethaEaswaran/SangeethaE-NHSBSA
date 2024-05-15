var merge = require("deepmerge");
var globalConfig = require("../../base.wdio.conf.js");
exports.config = merge.all(
  [
    globalConfig.config,
    {
      capabilities: [
        {
          // browserName: "chrome",
          browserName: "firefox",
          specs: ["../features/accessibility/searchJobs.accessibility.feature"],
        },
      ],
    },
  ],
  { clone: false },
);
