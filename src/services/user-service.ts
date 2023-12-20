import apiClient from "./api-client";

export const USERS_ENDPOINT = "/users";

export interface User {
    id: number;
    name: string;
}

class UserService {
    getAllUsers() {
        const controller = new AbortController();
        const config = { signal: controller.signal };
        const request = apiClient
            .get<User[]>(USERS_ENDPOINT, config)
        const cancel = () => controller.abort();
        return { request, cancel }

    }
}

export default new UserService()