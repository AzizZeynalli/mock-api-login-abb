"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const userData = [
    {
        personalCode: "1q2w3e4",
        verificationCode: "1234",
        sid: "0123456789abcdef",
        asanId: "010191",
        phoneNumber: "+994500000045",
        userId: null,
    },
    {
        personalCode: "5teu23",
        verificationCode: "5678",
        sid: "63673dcdch57ccce",
        asanId: "020292",
        phoneNumber: "+994500000046",
        userId: null,
    },
    {
        personalCode: "dnd33s3",
        verificationCode: "2054",
        sid: "574874fjfjfffffd",
        asanId: "030393",
        phoneNumber: "+994500000047",
        userId: null,
    },
];
router.post("onboarding-ms/v1/auth", (req, res) => {
    const { asanId, phoneNumber } = req.body;
    const user = userData.find((u) => u.asanId === asanId && u.phoneNumber === phoneNumber);
    console.log({ user, asanId, phoneNumber });
    if (user) {
        const { phoneNumber, asanId } = user, rest = __rest(user, ["phoneNumber", "asanId"]);
        res.json(rest);
    }
    else {
        res.status(404).send({ error: "User not found" });
    }
});
exports.default = router;
