import 'server-only'
import { getSession } from "@/app/_lib/session";
import { notFound } from "next/navigation";
import { School } from "./definitions";
import {cache} from "react";

const BACKEND_URL = process.env.BACKEND_URL;

export const preload = (id: string) => {
    void getSchools(id);
}

export const getSchools = cache(async (id: string): Promise<School[]> => {
    const token = await getSession();
    const res = await fetch(`${BACKEND_URL}/school/${id}`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    }
);
    if (!res.ok) {
        console.log("should redirect to not-found page");
        console.log(res);
        notFound()
    }
    const schoolsResponse = await res.json();
    console.log(schoolsResponse);
    const schools = schoolsResponse.data;
    // console.log(schools);
    return schools;
})
