import postService, { Post } from "../services/post-service";
import useFetchData from "./useFetchData";

const usePosts = () => useFetchData<Post>(postService);

export default usePosts;