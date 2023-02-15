import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import trashIcon from "../images/trash-bin.png"
import update from "../images/update.png"
import banner from "../images/banner.png"
import swal from "sweetalert"
import "./Posts.css"

const Posts = () => {
	const [posts, setPosts] = useState([])

	let { id } = useParams()

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
		<>
			<div className="post-container" key={post._id}>
				<div className="post--user">
					<p className="username">
						by:{" "}
						<span className="italic">
							{post.user ? post.user : "anonymous"}
						</span>
					</p>
				</div>

				<div className="post--content">
					<h3>{post.title}</h3>
					<p>{post.content}</p>
				</div>

				{localStorage.getItem("userId") === post.user && (
					<div className="post--buttons">
						<button
							type="button"
							onClick={() => handleUpdate(post._id)}
							className="button--icon"
						>
							<img
								src={update}
								alt="trash-icon"
								className="trash-icon"
							/>
						</button>

						<button
							type="button"
							onClick={() => handleDelete(post._id)}
							className="button--icon"
						>
							<img
								src={trashIcon}
								alt="trash-icon"
								className="trash-icon"
							/>
						</button>
					</div>
				)}
			</div>
			<hr className="posts-hr"/>
		</>
	))

	return (
		<>
			<h2 className="no-btm-margin">Reviews!</h2>
			<div>
				<img className="red-banner"src={banner} alt="" />
			</div>
			{postsComponent}
		</>
	)
}

export default Posts
