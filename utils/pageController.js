const pageScraper = require('./pageScraper');
const fs = require("fs");

async function scrapeAll(browserInstance, url) {
    let browser;
    try {
        browser = await browserInstance;
        let scrapedData = await pageScraper.scraper(browser, url);
        await browser.close();
        // console.log("PageController:", scrapedData)
        console.log("Done")

        return scrapedData;

        // fs.writeFile("./client/src/data.json", JSON.stringify(scrapedData), "utf8", function (err) {
        //     if (err) {
        //         return console.log(error);
        //     }
        //     console.log("The data has been scraped and saved successfully! View it at './client/src/data.json'");
        // });
    }
    catch (err) {
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance, url) => scrapeAll(browserInstance, url)