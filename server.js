import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (request, response) => {
	response.json({
		status: "success",
		response: "Server is running on port 5000",
	});
});

app.get("/api/blogs", (request, response) => {
  response.json()
})

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});