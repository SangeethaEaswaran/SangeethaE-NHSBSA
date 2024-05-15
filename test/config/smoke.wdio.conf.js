var merge = require("deepmerge");
// import { merge } from 'deepmerge'

// import pkg from 'deepmerge';
// const { merge } = pkg;

var globalConfig = require("../../base.wdio.conf.js");
// import { config as globalConfig } from '../../base.wdio.conf.js'

exports.config = merge.all(
  [
    globalConfig.config,
    {
      maxInstances : 5, 
      capabilities: [
        {
        //   browserName: "chrome",
        //   'goog:chromeOptions': {
        //     args: [
        //       '--headless', 
        //       '--no-sandbox',
        //       '--disable-gpu',
        //       '--whitelisted-ips',
        //       '--start-maximized',
        //       '--incognito',
        //       '--disable-popup-blocking',
        //       '--ignore-certificate-errors',
        //       '--disable-extensions'
        //     ]
        //   },
          browserName: "firefox",
          "moz:firefoxOptions": {
            "args": [
              "--headless",
              '--start-maximized',
              '--incognito',
              '--remote'
            ],
            },
        }],
          specs: ["../features/smoke/searchJobs.smoke.feature",        

          ],
        },
      ],
  { clone: false },
);
