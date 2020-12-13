const app = require("express")();
const http = require("http").Server(app)
const io = require("socket.io")(http)
const port = process.env.Port || 9090;
const cors = require('cors')
app.use(cors())

const randomStockObject = require('./random-stock-value');


io.of("/live")
    .on("connection", socket => {
        socket.on("joinStockRoom", room => {
            if (room === "stocks") {
                socket.join("stocks")
                setInterval(() => {
                    io.of("/live").to("stocks").emit("liveStocks", [
                        randomStockObject.getAppleStockValues(),
                        randomStockObject.getGoogleStockValues(),
                        randomStockObject.getMicrosoftStockValues()
                    ])
                }, 2000)
            }
        })
    })

http.listen(port, () => {
    console.log(`The stock server is listening on Port - ${port}`);
})
