import { useEffect, useState } from "react";
import postService, { Post } from "../services/post-service";
import { CanceledError } from "../services/api-client";

const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const { request, cancel } = postService.getAll<Post>();

        request
            .then(({ data: savedPosts }) => setPosts(savedPosts))
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
            })
            .finally(() => setLoading(false));
        return () => cancel();
    }, []);

    return { posts, setPosts, error, setError, isLoading, setLoading }
}

export default usePosts;