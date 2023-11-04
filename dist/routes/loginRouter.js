"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoute = void 0;
const express_1 = __importDefault(require("express"));
const login_1 = __importDefault(require("../controllers/login"));
const router = express_1.default.Router();
exports.loginRoute = router.post('/login', login_1.default);
//# sourceMappingURL=loginRouter.js.map