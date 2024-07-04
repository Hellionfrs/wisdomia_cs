"use server";

import { getSession } from "@/app/_lib/session";
import { notFound } from "next/navigation";
import { School } from "./definitions";
import { cache } from "react";

const BACKEND_URL = process.env.BACKEND_URL;

export const preload = () => {
  void getSchoolsToAccess();
};

export const getSchoolsToAccess = cache(async (): Promise<School[]> => {
  const token = await getSession();
  const res = await fetch(`${BACKEND_URL}/school`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    console.log("should redirect to not-found page");
    console.log(res);
    notFound();
  }
  const schoolsResponse = await res.json();
  console.log(schoolsResponse);
  const schools = schoolsResponse.data;
  //   revalidatePath(`/dashboard/profile/${id}/school`);
  // console.log(schools);
  return schools;
});

export const getSchoolsOwned = cache(
  async (userId: string): Promise<School[]> => {
    const token = await getSession();
    const res = await fetch(`${BACKEND_URL}/school/user/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      console.log("should redirect to not-found page");
      console.log(res);
      notFound();
    }
    const schoolsResponse = await res.json();
    console.log(schoolsResponse);
    const schools = schoolsResponse.data;
    //   revalidatePath(`/dashboard/profile/${id}/school`);
    // console.log(schools);
    return schools;
  }
);
