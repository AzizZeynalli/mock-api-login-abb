// mock-router.js
import express from 'express';

const router = express.Router();

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

export default router;
