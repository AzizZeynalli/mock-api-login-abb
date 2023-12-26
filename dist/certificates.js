"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const mockData = [
    {
        "certificateId": "2",
        "pinCode": "13RXZ1K",
        "firstname": "RUFAT",
        "lastname": "AKBAROV",
        "organizationCode": "1904973092",
        "organizationName": "VUGAR",
        "existWithThisNumber": false,
        "registered": false
    }
];
router.get('/onboarding-ms/v1/certificates', (req, res) => {
    res.json(mockData);
});
exports.default = router;
