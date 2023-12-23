"use strict";
// import express, { Request, Response, Router } from 'express';
// const router = Router();
// const userData = [
// {
//     personalCode: "1q2w3e4",
//     verificationCode: "1234",
//     sid: "0123456789abcdef",
//     asanId: "010191",
//     phoneNumber: "+994500000045",
//     userId: null,
//   },
//   {
//     personalCode: "5teu23",
//     verificationCode: "5678",
//     sid: "63673dcdch57ccce",
//     asanId: "020292",
//     phoneNumber: "+994500000046",
//     userId: null,
//   },
//   {
//     personalCode: "dnd33s3",
//     verificationCode: "2054",
//     sid: "574874fjfjfffffd",
//     asanId: "030393",
//     phoneNumber: "+994500000047",
//     userId: null,
//   },
// ];
// router.post("onboarding-ms/v1/auth", (req: Request, res: Response) => {
//   const { asanId, phoneNumber } = req.body;
//   const user = userData.find(
//     (u) => u.asanId === asanId && u.phoneNumber === phoneNumber
//   );
//   console.log({ user, asanId, phoneNumber });
//   if (user) {
//     const { phoneNumber, asanId, ...rest } = user;
//     res.json(rest);
//   } else {
//     res.status(404).send({ error: "User not found" });
//   }
// });
// export default router;
