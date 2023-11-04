"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodoRouter = void 0;
const express_1 = __importDefault(require("express"));
const createTodo_1 = __importDefault(require("../controllers/createTodo"));
const middleware_1 = __importDefault(require("../controllers/middleware"));
const router = express_1.default.Router();
exports.createTodoRouter = router.post('/createtodo', middleware_1.default, createTodo_1.default);
//# sourceMappingURL=createTodoRouter.js.map