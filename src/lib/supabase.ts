import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// We use a dummy URL if keys are missing to prevent the app from crashing on boot,
// but we'll intercept queries and provide mock data if the real DB isn't connected.
export const supabase = createClient(
  supabaseUrl || "https://placeholder-project.supabase.co",
  supabaseAnonKey || "placeholder-key"
);

export const hasSupabaseKeys = Boolean(supabaseUrl && supabaseAnonKey);

/**
 * A safe fetcher that returns mock data if Supabase is not configured yet.
 */
export async function safeFetch<T>(
  queryPromise: any,
  mockData: T
): Promise<T> {
  if (!hasSupabaseKeys) {
    console.warn("Supabase keys missing. Returning mock data.");
    return mockData;
  }

  try {
    const { data, error } = await queryPromise;
    if (error) {
      console.error("Supabase fetch error:", error.message);
      return mockData; // Fallback to mock on error
    }
    return data as T;
  } catch (err) {
    console.error("Unexpected fetch error:", err);
    return mockData;
  }
}
