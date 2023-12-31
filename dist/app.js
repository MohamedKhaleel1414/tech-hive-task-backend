"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv = __importStar(require("dotenv"));
const registerRouter_1 = require("./routes/registerRouter");
const loginRouter_1 = require("./routes/loginRouter");
const createTodoRouter_1 = require("./routes/createTodoRouter");
const retrieveTodosRouter_1 = require("./routes/retrieveTodosRouter");
const deleteTodoRouter_1 = require("./routes/deleteTodoRouter");
const updateTodoRouter_1 = require("./routes/updateTodoRouter");
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)({ origin: true }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use('/', registerRouter_1.registerRoute);
app.use('/', loginRouter_1.loginRoute);
app.use('/', createTodoRouter_1.createTodoRouter);
app.use('/', retrieveTodosRouter_1.retrieveTodosRouter);
app.use('/', deleteTodoRouter_1.deleteTodoRouter);
app.use('/', updateTodoRouter_1.updateTodoRouter);
app.get('/', (req, res) => {
    res.send('Hello Tech Hive!');
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map