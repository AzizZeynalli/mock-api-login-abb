"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// mock-router.js
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const mockData = {
    code: '0',
    status: 'USER_AUTHENTICATED',
    token: 'your_token_here',
    refreshToken: 'your_refresh_token_here',
    customerStatus: 'NEW',
};
router.get('/onboarding-ms/v1/auth/status/2a5a628a-d72b-4ba4-8157-8dc11c130093', (req, res) => {
    res.json(mockData);
});
exports.default = router;
