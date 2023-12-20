import create from "./http-service";

const USERS_ENDPOINT = "/users";

export interface User {
    id: number;
    name: string;
}

export default create(USERS_ENDPOINT)