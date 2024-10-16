// utils/auth.ts
import { getSession } from "next-auth/react";

export async function getServerSession(req?: any) {
  // Get session based on the request
  const session = await getSession({ req });
  return session;
}
