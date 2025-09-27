import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../../../.env") });

export const supabaseClient = createClient(
  process.env?.SUPABASE_URL as string,
  process.env?.SUPABASE_ANON_KEY as string
);
