// express package
const express = require('express');
const routes = require("./routes");


// setup the app
const app = express();

// port
const PORT = process.env.PORT || 3001;

// middlewares
app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({extended: true }));

// routes
app.use(routes)


//listener
app.listen(PORT, () => console.log(`your running on port ${PORT}`))


