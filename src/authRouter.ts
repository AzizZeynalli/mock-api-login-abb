import express, { Request, Response, Router } from 'express';

const router = Router();

router.post('/onboarding-ms/v1/auth', (req: Request, res: Response) => {
    const { mobileNumber, asanId } = req.body;

    const response = {
        sessionId: "7a88ca31-807e-44ae-a319-0452741edd77",
        verificationCode: "333666"
    };

    res.json({ response });
});

export default router;
