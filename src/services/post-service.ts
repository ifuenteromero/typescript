import apiClient from "./api-client";

export interface Post {
    id: number;
    title: string;
    body: string;
}

export const POSTS_ENDPOINT = "/posts";
export const POST_ENDPOINT = (id: number) => `${POSTS_ENDPOINT}/${id}`;

class PostService {
    getAllPosts() {
        const controller = new AbortController();
        const config = { signal: controller.signal };
        const request = apiClient
            .get<Post[]>(POSTS_ENDPOINT, config);
        const cancel = () => controller.abort()

        return { request, cancel }
    }

    deletePost(id: number) {
        return apiClient
            .delete(POST_ENDPOINT(id))
    }

    updatePost(post: Post) {
        return apiClient
            .patch(POST_ENDPOINT(post.id), post)
    }

    addPost(post: Post) {
        return apiClient
            .post(POSTS_ENDPOINT, post)
    }

}

export default new PostService()