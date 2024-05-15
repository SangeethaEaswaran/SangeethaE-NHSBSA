var merge = require("deepmerge");
var globalConfig = require("../../base.wdio.conf.js");
exports.config = merge.all(
  [
    globalConfig.config,
    {
      capabilities: [
        {
          // maxInstances: parseInt(process.env.MAXINSTANCES),
          // browserName: "chrome",
          browserName: "firefox",

          // browserVersion: '117' ,
          // 'goog:chromeOptions': {
          //   args: [
          //     // '--headless', 
          //     '--disable-gpu',
          //     '--whitelisted-ips',
          //     '--start-maximized',
          //     '--incognito',
          //     '--disable-popup-blocking',
          //     '--ignore-certificate-errors',
          //     '--disable-extensions'
          //   ]
          // },
          "moz:firefoxOptions": {
            "args": [
              // "--headless",
              '--start-maximized',
              '--incognito',
            ],
            },
    
          specs: ["../features/smoke/searchJobs.smoke.feature"],
        },
      ],
    },
  ],
  { clone: false },
);
