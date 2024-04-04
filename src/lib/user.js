import { account } from "./appwrite";
import { ID } from "appwrite";

export const user = {
    createOtp: async (email) => {
        return await account.createEmailToken(ID.unique(), email);
    },

    verifyOtp: async (usedId, secret) => {
        return await account.createSession(usedId, secret);
    }
}