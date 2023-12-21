"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/onboarding-ms/v1/auth', (req, res) => {
    const { mobileNumber, asanId } = req.body;
    const response = {
        sessionId: "7a88ca31-807e-44ae-a319-0452741edd77",
        verificationCode: "333666"
    };
    res.json({ response });
});
exports.default = router;
