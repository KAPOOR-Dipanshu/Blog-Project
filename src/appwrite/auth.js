import config from "../config/config.js";
import { Client, Account, ID } from "appwrite";

/**
 * Represents an authentication service.
 */
export class AuthService {
    client = new Client();
    account;

    /**
     * Constructs a new instance of the AuthService class.
     */

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    /**
     * Creates a new user account.
     * @param {Object} userData - The user data.
     * @param {string} userData.email - The email of the user.
     * @param {string} userData.password - The password of the user.
     * @param {string} userData.name - The name of the user.
     * @returns {Promise} A promise that resolves with the created user account or rejects with an error.
     */

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (userAccount) {
                // call another method
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    /**
     * Logs in a user.
     * @param {Object} credentials - The user credentials.
     * @param {string} credentials.email - The email of the user.
     * @param {string} credentials.password - The password of the user.
     * @returns {Promise} A promise that resolves with the session data or rejects with an error.
     */

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Retrieves the current user.
     * @returns {Promise} A promise that resolves with the current user data or rejects with an error.
     */

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            throw error;
        }
    }

    /**
     * Logs out the current user.
     * @returns {Promise} A promise that resolves when the user is logged out or rejects with an error.
     */

    async logout() {
        try {
            await this.account.deleteSession();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;
