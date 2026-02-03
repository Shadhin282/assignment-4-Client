import { env } from "@/env"



const BACKEND_API = env.BACKEND_API;

export const tutorService = {
    getTutorsPost : async function() {
        try {

            const res = await fetch(`${BACKEND_API}/tutors`)
            const data = await res.json();
            return data;
        } catch (error) {
            return {data : null, error : {message : "Tutors Data not fetch"}}
        }
    }
}