import express from 'express';
const router = express.Router();

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
]

router.get('/onboarding-ms/v1/certificates', (req, res) => {
  res.json(mockData);
});

export default router;