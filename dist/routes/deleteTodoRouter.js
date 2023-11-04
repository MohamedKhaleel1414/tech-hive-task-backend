"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoRouter = void 0;
const express_1 = __importDefault(require("express"));
const deleteTodo_1 = __importDefault(require("../controllers/deleteTodo"));
const middleware_1 = __importDefault(require("../controllers/middleware"));
const router = express_1.default.Router();
exports.deleteTodoRouter = router.delete('/deletetodo', middleware_1.default, deleteTodo_1.default);
//# sourceMappingURL=deleteTodoRouter.js.map