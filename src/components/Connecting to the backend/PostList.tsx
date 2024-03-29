import postService, { Post } from "../../services/post-service";
import usePosts from "../../hooks/usePosts";

const PostList = () => {
	const {
		data: posts,
		setData: setPosts,
		error,
		setError,
		isLoading,
		setLoading,
	} = usePosts();

	const deletePost = (post: Post) => {
		const originalPosts = [...posts];
		setPosts(posts.filter((p) => p.id !== post.id));
		setLoading(true);
		postService
			.delete(post.id)
			.catch((error) => {
				setError(error.message);
				setPosts(originalPosts);
			})
			.finally(() => setLoading(false));
	};

	const updatePost = (post: Post) => {
		const updatedPost = { ...post, title: `UPDATED!!! ${post.title}` };
		const originalPosts = [...posts];
		setPosts(posts.map((p) => (p.id === post.id ? updatedPost : p)));
		setLoading(true);
		postService
			.update(updatedPost)
			.catch((error) => {
				setError(error.message);
				setPosts(originalPosts);
			})
			.finally(() => setLoading(false));
	};

	const addPost = () => {
		const newPost = {
			id: 0,
			title: "New Post",
			body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos similique provident unde accusantium molestiae, cupiditate harum autem rem at vero totam dolorum quidem assumenda quaerat quod vitae porro deleniti magni aliquam facere incidunt consectetur quia eveniet. Quas, nostrum perspiciatis?",
		};
		setPosts([newPost, ...posts]);
		setLoading(true);
		const originalPosts = [...posts];
		postService
			.create(newPost)
			.then(({ data: savedPost }) =>
				setPosts([savedPost, ...originalPosts])
			)
			.catch((error) => {
				setError(error.message);
				setPosts(originalPosts);
			})
			.finally(() => setLoading(false));
	};

	return (
		<>
			{error && <p className="text-danger">{error}</p>}
			{isLoading && <p className="spinner-border"></p>}

			<div className="d-flex justify-content-center gap-4 align-items-baseline">
				<p> {posts.length} Posts</p>
				<button className="btn btn-primary" onClick={addPost}>
					Add
				</button>
			</div>
			<ul className="list-group">
				{posts.map((post) => (
					<li key={post.id} className="list-group-item">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{post.title}</h5>
								<p className="card-text">{post.body}</p>
								<div className="d-flex gap-2 justify-content-end">
									<button
										className="btn btn-outline-secondary"
										onClick={() => updatePost(post)}
									>
										Update
									</button>
									<button
										className="btn btn-outline-danger"
										onClick={() => deletePost(post)}
									>
										Delete
									</button>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default PostList;
