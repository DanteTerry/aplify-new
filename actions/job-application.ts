"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { JobApplication } from "@/types/types";

export const addNewJobApplication = async (jobApplication: JobApplication) => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return { error: true, errorMessage: "User not authenticated" };
  }

  jobApplication.userId = userId;

  try {
    const application = await db.jobApplication.create({
      data: jobApplication,
    });
    return { success: true, application };
  } catch (error: any) {
    return { error: true, errorMessage: error?.message };
  }
};
