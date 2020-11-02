const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const fs = require("fs");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const browserObject = require('./utils/browser');
const scraperController = require('./utils/pageController');

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

//Start the browser and create a browser instance
// let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
// scraperController(browserInstance, "https://food52.com/recipes/84048-soba-salad-recipe-with-kabocha-squash-toasted-pepitass")

// let interval;
// const date = new Date();
io.on("connection", (socket) => {
    console.log("New client connected");
    // if (interval) {
    //     clearInterval(interval);
    // }
    // interval = setInterval(() => getApiAndEmit(socket), 1000);

    // console.log('Client connected at ' + date + ' with socket ID: ' + socket.client.id);
    // io.emit('FromAPI', socket.client.id);
    socket.on('from_client', url => {
        // console.log("Hey", url);

        // let browserInstance = browserObject.startBrowser();
        // // Pass the browser instance to the scraper controller
        // scraperController(browserInstance, url)

        const scrape = new Promise((resolve, reject) => {
            //Start the browser and create a browser instance
            let browserInstance = browserObject.startBrowser();
            // Pass the browser instance to the scraper controller

            // console.log(scrapedData)
            resolve(scraperController(browserInstance, url))
        })

        scrape.then(function (data) {
            //emit scraped data
            // console.log(data)
            socket.emit("from_server", data);
        })

    });
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        // fs.writeFile("./client/src/data.json", JSON.stringify({}), "utf8", function (err) {
        //     if (err) {
        //         return console.log(error);
        //     }
        //     // console.log("The data has been scraped and saved successfully! View it at './data.json'");
        // });
    });
})

// const scrapeDataAndEmit = socket => {
//     const response = new Date();
//     // Emitting a new message. Will be consumed by the client
//     socket.emit("from_server", response);
// };

server.listen(port, () => console.log(`Listening on port ${port}`));