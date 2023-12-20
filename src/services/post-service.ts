import create from "./http-service";

export interface Post {
    id: number;
    title: string;
    body: string;
}

const POSTS_ENDPOINT = "/posts";

export default create(POSTS_ENDPOINT)