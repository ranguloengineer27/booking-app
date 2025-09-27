import express from "express";
import accommodationsRouter from "./queries/getAccomodations";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: false,
  })
);

app.use("/api/accommodations", accommodationsRouter);

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
