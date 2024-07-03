"use server";

import { headers } from "next/headers";
import { EditUserSchema, FormState, User } from "./definitions";
import { Edit } from "lucide-react";
import { get } from "http";
import { getSession } from "@/app/_lib/session";
import { notFound, useParams } from "next/navigation";

const BACKEND_URL = process.env.BACKEND_URL;

export async function fetchUser(userId: string): Promise<User | null> {
  console.log(userId);
  const token = await getSession();
  console.log(token)
  const res = await fetch(`${BACKEND_URL}/user/${userId}`, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
    if (!res.ok) {
      console.log("should redirect to not-found page");
      notFound()
    }
  const userResponse = await res.json();
  // console.log(userResponse);
  const user = userResponse.data[0];
  // console.log(user);
  return {id: user.id,
    name: user.first_name ,
    middleName: user.middle_name,
    surname: user.surname,
    secondSurname: user.second_surname,
    email: user.email.toLowerCase(),
    cellphone: user.cellphone,
  };
}

export async function updateUser(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validationResult = await EditUserSchema.safeParseAsync({
    id: formData.get("id"),
    name: formData.get("name"),
    middleName: formData.get("middleName"),
    surname: formData.get("surname"),
    secondSurname: formData.get("secondSurname"),
    email: formData.get("email"),
    cellphone: formData.get("cellphone"),
  });

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }
  const token = await getSession();
  const res = await fetch(`${BACKEND_URL}/user/${formData.get("id")}`, {
    method: "PATCH",
    body: JSON.stringify({
      id: formData.get("id"),
      first_name: formData.get("name"),
      middle_name: formData.get("middleName"),
      surname: formData.get("surname"),
      second_surname: formData.get("secondSurname"),
      email: formData.get("email"),
      cellphone: formData.get("cellphone"),
      password: formData.get("password"),
    }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const error = await res.json();
    return {
      errors: error,
    };
  }

  const updateUser = await res.json();
  return {
    message: updateUser.message,
    // id: updateUser.data[0].id,
  };
}
