import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import trashIcon from "../images/trash-bin.png"

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

	const handleButton = async (postId) => {
		//e.preventDefault()
		console.log(postId)
		const deleteConfirm = prompt("Are you sure you want to delete this post?")
		if (deleteConfirm === "yes") {
			await axios.delete(`http://localhost:3001/api/delete/post/${postId}`)
		}
	}

	const postsComponent = posts.map((post) => (
		<div className="post" key={post._id}>
			<div className="flex-row">
				<h3>{post.title}</h3>
				{localStorage.getItem("userId") === post.user && (
					<button type="button" onClick={() => handleButton(post._id)}>
						<img src={trashIcon} alt="trash-icon" className="trash-icon"/>
					</button>
					
				)}
			</div>
			<p>{post.content}</p>
		</div>
	))

	return (
		<>
			{posts && <div className="posts-container">{postsComponent}</div>}
        </>
	)
}
export default Posts
