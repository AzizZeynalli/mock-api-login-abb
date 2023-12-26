import express, { Request, Response } from "express";
import cors from "cors";
import certifactes from './certificates'
import pin from "./pin";

// import authRouter from './authRouter'


const app: express.Application = express();

app.use(pin);
app.use(certifactes);
app.use(cors());
// app.use("/",authRouter)
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

const companies = [
  { cif: "9330099", name: "AZNEFT IB", asanId: "030393" },
  { cif: "6018199", name: "CRAG MMC", asanId: "030393" },
  { cif: "4454322", name: "Azercell TELECOM", asanId: "020292" },
  { cif: "4910319", name: "Azerconnect MMC", asanId: "020292" },
  { cif: "4021941", name: "Azercosmos", asanId: "010191" },
  { cif: "9232901", name: "Crocusoft MMC", asanId: "010191" },
];

app.use(express.json());


app.post('/auth/v1/mail/:username', (req: Request, res: Response)=>{
  const {username} = req.body;
  console.log(username);
  if(username === 'Sama'){
    res.json({
      email: 'sama@gmail.com'
    });
  }else{
    res.sendStatus(400)
  }
})

app.post("/auth/v1/auth/login/asanimza", (req: Request, res: Response) => {
  const { asanId, phoneNumber } = req.body;

  const user = userData.find(
    (u) => u.asanId === asanId && u.phoneNumber === phoneNumber
  );
  console.log({ user, asanId, phoneNumber });
  if (user) {
    const { phoneNumber, asanId, ...rest } = user;
    res.json(rest);
  } else {
    res.status(404).send({ error: "User not found" });
  }
});

app.post("/onboarding-ms/v1/auth", (req: Request, res: Response) => {
  const { asanId, phoneNumber } = req.body;

  const user = userData.find(
    (u) => u.asanId === asanId && u.phoneNumber === phoneNumber
  );
  console.log({ user, asanId, phoneNumber });
  if (user) {
    res.json(user);
  } else {
    res.status(404).send({ error: "User not found" });
  }
});

app.get(
  "/auth/v1/auth/check-status/asanimza",
  (req: Request, res: Response) => {
    const { sid } = req.query;
    const user = userData.find((u) => u.sid === sid);
    if (user) {
      res.json({
        code: 1,
        status: "USER_AUTHENTICATED",
      });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  }
);
app.get("/user/v1/users/companies", (req: Request, res: Response) => {
  const { asanId } = req.query;

  const userCompanies = companies
    .filter((company) => company.asanId === asanId)
    .map(({ asanId, ...rest }) => rest);

  if (userCompanies.length > 0) {
    res.json(userCompanies);
  } else {
    res.status(404).json({ error: "No companies found for this user" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
