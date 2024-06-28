import { getSession } from "@/app/_lib/session";


const BACKEND_URL = process.env.BACKEND_URL;

export const getStudents = async (id: string) => {
    const token = await getSession();
  const res = await fetch(`${BACKEND_URL}/students/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const students = await res.json();
  return students;
};