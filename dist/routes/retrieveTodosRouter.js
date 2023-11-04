"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveTodosRouter = void 0;
const express_1 = __importDefault(require("express"));
const retrieveTodos_1 = __importDefault(require("../controllers/retrieveTodos"));
const middleware_1 = __importDefault(require("../controllers/middleware"));
const router = express_1.default.Router();
exports.retrieveTodosRouter = router.get('/retrievetodos/:id', middleware_1.default, retrieveTodos_1.default);
//# sourceMappingURL=retrieveTodosRouter.js.map