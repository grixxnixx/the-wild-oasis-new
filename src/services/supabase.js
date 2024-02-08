import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wupvcmraispbaxoaefkz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1cHZjbXJhaXNwYmF4b2FlZmt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1ODczODMsImV4cCI6MjAwNzE2MzM4M30.EEg97FVnLpsDpP5AFHfCP9V_LsdDL5P1GQWtNmVil84";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
