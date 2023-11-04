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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const prisma = new client_1.PrismaClient();
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let checkEmail = yield prisma.user.findFirst({
            where: {
                email: req.body.email,
            },
        });
        console.log("checkEmail: ");
        console.log(checkEmail);
        let checkUsername = yield prisma.user.findFirst({
            where: {
                username: req.body.username,
            },
        });
        console.log("checkUsername: ");
        console.log(checkUsername);
        if (!checkEmail && !checkUsername) {
            let newUser = yield prisma.user.create({
                data: {
                    email: req.body.email,
                    username: req.body.username,
                    password: req.body.password,
                },
            });
            if (newUser) {
                console.log(newUser);
                yield prisma.$disconnect;
                res.status(201).send("New user has been added successfully");
            }
            else {
                console.log("an error occurred while register");
                yield prisma.$disconnect;
                res.status(501).send("an error occurred while register");
            }
        }
        else if (checkEmail) {
            yield prisma.$disconnect;
            res.status(200).send("This email is registered");
        }
        else if (checkUsername) {
            yield prisma.$disconnect;
            res.status(200).send("This username is used");
        }
    });
}
exports.default = register;
;
//# sourceMappingURL=register.js.map