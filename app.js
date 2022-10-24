const menuRouter = require("./controllers/menus");
const citiesRouter = require("./controllers/cities");
const MembershipRouter = require("./controllers/membership");
const trainModelsRouter = require("./controllers/trainModels");
const express = require("express");
const cors = require("cors");
//const config = require('./utils/config');
const middleware = require("./utils/middleware");
const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use("/api/menus", menuRouter);
app.use("/api/menus/:id", menuRouter);
app.use("/api/cities", citiesRouter);
app.use("/api/Membership", MembershipRouter);
app.use("/api/trainmodels", trainModelsRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
