import express from "express";
import dotenv from "dotenv";
import data from "./blogs.js";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (request, response) => {
	response.json({
		status: "success",
		response: "Server is running on port 5000",
	});
});

app.get("/api/blogs", (request, response) => {
	response.json(data);
});

app.get("/api/blogs/:id", (request, response) => {
	const { id } = request.params;

	if (!id) return response.status(400).json({ message: "ID now found." });

	const blog = data.find((blog) => blog.id === Number(id));
	if (!blog) return response.status(404).json({ message: "Blog not found!" });
	return response.status(201).json(blog);
});

app.post("/api/blogs", (request, response) => {
	const newBlog = request.body;

	data.forEach((blog) => {
		if (newBlog.id === blog.id) {
			return response
				.status(400)
				.json({ message: "Blog post id already existed" });
		}
	});

	const blogs = data.push(newBlog);
	return response
		.status(200)
		.json({ message: "Blog post added successfully ", data: newBlog });
});

app.listen(PORT, () => {
	console.log(`Server is running on localhost:${PORT}`);
});
