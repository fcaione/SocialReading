import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom"
import trashIcon from "../images/trash-bin.png"
import update from "../images/update.png"
import PostsForm from "./PostsForm"
import swal from "sweetalert"

const Posts = () => {
	const [posts, setPosts] = useState([])

	let { id } = useParams()

	let user = {}
	
	let navigate = useNavigate()
	
	const getPosts = async () => {
		const response = await axios.get(
			`http://localhost:3001/api/books/${id}/posts`
			)
			setPosts(response.data)
	}
		
	useEffect(() => {
		getPosts()
	}, [])
	
	const handleDelete = async (postId) => {
		const response = await swal({
			title: "Are you sure you want to delete this post",
			type: "warning",
			buttons: true,
			dangerMode: true,
		})

		if (response) {
			await axios.delete(`http://localhost:3001/api/post/${postId}`)
			getPosts()
		}
	}

	const handleUpdate = async (postId) => {
		navigate(`/posts/${postId}/update`)
	}

	const postsComponent = posts.map((post) => (
		<div className="post" key={post._id}>
			<div className="flex-row">
				<h3>{post.title}</h3>
				{localStorage.getItem("userId") === post.user && (
					<>
						<button type="button" onClick={() => handleUpdate(post._id)}>
						<img src={update} alt="trash-icon" className="trash-icon"/>
						</button>

						<button type="button" onClick={() => handleDelete(post._id)}>
						<img src={trashIcon} alt="trash-icon" className="trash-icon"/>
						</button>
					</>	
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
