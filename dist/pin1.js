"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pin1Router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.pin1Router = router;
router.get('/', (req, res) => {
    res.json({ message: 'GET /pin1' });
});
router.post('/', (req, res) => {
    res.json({ message: 'POST /pin1' });
});
