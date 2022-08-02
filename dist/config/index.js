"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
if (!process.env.NODE_ENV) {
    throw new Error('You have to set NODE_ENV');
}
console.log(process.cwd());
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.config({ path: path_1.default.join(process.cwd(), `.env.${process.env.NODE_ENV}`) });
}
const envVarsSchema = joi_1.default.object({
    DATABASE_URL: joi_1.default.string().uri().required(),
}).unknown().required();
const config = () => ({
    url: process.env.DATABASE_URL,
});
exports.default = config();
//# sourceMappingURL=index.js.map