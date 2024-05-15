var merge = require("deepmerge");
var globalConfig = require("../../base.wdio.conf.js");

exports.config = merge.all(
  [
    globalConfig.config,
    {
      capabilities: [
        {
          browserName: "chrome",
          'goog:chromeOptions': {
            args: [
              '--headless', 
              '--disable-gpu',
              '--whitelisted-ips',
              '--start-maximized',
              '--incognito',
              '--disable-popup-blocking',
              '--ignore-certificate-errors',
              '--disable-extensions'
            ]
          },
          // browserName: "firefox",
          // "moz:firefoxOptions": {
          //   "args": [
          //     // "--headless",
          //     '--start-maximized',
          //     '--incognito',
          //     '--remote'
          //   ],
          //   },
          specs: ["../features/regression/searchJobs.regression.feature"],
        },
      ],
    },
  ],
  { clone: false },
);
