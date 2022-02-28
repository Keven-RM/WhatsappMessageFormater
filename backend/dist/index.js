"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
//functions
const routes_1 = __importDefault(require("./routes"));
(0, dotenv_1.config)(); //default configs about dotenv
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(routes_1.default);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.listen(process.env.PORT || 8080);
console.log("> Online");
