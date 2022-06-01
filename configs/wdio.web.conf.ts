const apiLogin = process.env.API_LOGIN;
const apiPassword = process.env.API_PASSWORD;
const apiURL = process.env.API_URL;
const baseURL = process.env.BASE_URL;
const path = require("path");
const fs = require("fs");

export const config = {
  specs: ["tests/**/*.spec.ts"],
  maxInstancesPerCapability: 1,
  maxInstances: 10,
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          "--silent",
          "--disable-infobars",
          "--disable-extensions",
          "--disable-popup-blocking",
          "--disable-notifications",
          "--headless",
        ],
      },
    },
  ],
  services: [
    [
      "chromedriver",
      {
        logFileName: "wdio-chromedriver.log",
        outputDir: "driver-logs",
      },
    ],
  ],

  execArgv: [],

  logLevel: "info",
  logLevels: {
    webdriver: "info",
  },

  bail: 0,
  waitforTimeout: 60000,

  framework: "mocha",

  specFileRetries: 1,
  specFileRetriesDelay: 0,
  specFileRetriesDeferred: false,
  reporters: ["dot"],
  baseUrl: "https://www.physitrack.co.uk/",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: "tsconfig.json",
    },
  },

  before: async function (capabilities, specs, browser) {
    browser.addCommand(
      "waitForLoadingToFinish",
      async function (): Promise<void> {
        await $(".search-loader-container").waitForExist({
          timeout: 1000,
          reverse: true,
        });
      }
    );
  },

  beforeTest: async function (world, context) {
    await browser.url(this.baseUrl);
    await browser.setWindowSize(1920, 1080);
  },
};
