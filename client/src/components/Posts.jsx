import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"

const Posts = () => {
	const [posts, setPosts] = useState([])

	let { id } = useParams()

	useEffect(() => {
		getPosts()
	}, [])

	const getPosts = async () => {
		const response = await axios.get(
			`http://localhost:3001/api/books/${id}/posts`
		)
		setPosts(response.data)
	}

	const postsComponent = posts.map((post) => (
		<div className="post">
			<h3>{post.title}</h3>
			<p>{post.content}</p>
		</div>
	))

	return (
		<div>
			<div className="reviews">
				<h1>Write a review!</h1>
				<Link to={`new`}>
					<button>Post</button>
				</Link>
			</div>

			{posts && <div className="posts-container">{postsComponent}</div>}
		</div>
	)
}
export default Posts
