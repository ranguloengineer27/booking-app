import { Router } from "express";
import { supabaseClient } from "../subscriptions/subscriptionsInit";

const router: Router = Router();

router.get("/", async (_: any, res: any) => {
  const { data, error } = await supabaseClient
    .from("accommodation")
    .select("*");

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

export default router;
