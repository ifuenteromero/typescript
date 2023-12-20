import apiClient from "./api-client";

export const USERS_ENDPOINT = "/users";
export const USER_ENDPOINT = (id: number) => `${USERS_ENDPOINT}/${id}`;

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

    deleteUser(id: number) {
        return apiClient.delete(USER_ENDPOINT(id));
    }

    addUser(user: User) {
        return apiClient
            .post(USERS_ENDPOINT, user)
    }
}

export default new UserService()