"use server";

import { getSession } from "@/app/_lib/session";
import { notFound } from "next/navigation";
import { cache } from "react";

const backendUrl = process.env.BACKEND_URL;

type SchoolLevel = {
  id: string;
  description: string;
};
export const getSchoolLevels = async (
  id: string
): Promise<Array<SchoolLevel>> => {
  const token = await getSession();
  const res = await fetch(`${backendUrl}/level/school/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    console.log(res);
    notFound();
  }
  const schoolLevelsResponse = await res.json();
  const data = schoolLevelsResponse.data;
  console.log(data);
  return data;
};

export const getSchoolGrades = async (
  id: string
): Promise<Array<SchoolLevel>> => {
  const token = await getSession();
  const res = await fetch(`${backendUrl}/grade/level/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    console.log(res);
    notFound();
  }
  console.log(res);
  const schoolGradesResponse = await res.json();
  const data = schoolGradesResponse.data;
  console.log(data);
  return data;
};

export const getSectionsGrades = async (
  id: string
): Promise<Array<SchoolLevel>> => {
  const token = await getSession();
  const res = await fetch(`${backendUrl}/sectionin/grade/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    console.log(res);
    notFound();
  }
  console.log(res);
  const schoolGradesResponse = await res.json();
  const data = schoolGradesResponse.data;
  console.log(data);
  return data;
};
