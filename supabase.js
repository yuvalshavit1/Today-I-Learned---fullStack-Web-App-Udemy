import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tqeimsckhtgkrljyenzs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxZWltc2NraHRna3JsanllbnpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwMjA0NjksImV4cCI6MjAxOTU5NjQ2OX0.M50e-Wyl8bSgwOgUbDT7Xt4mNSBYEafNE_-z3h5DHCo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
