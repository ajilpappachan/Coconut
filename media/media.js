import cloudinary from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true,
});

const media = {
	getAllMedia: async () => {
		const result = await cloudinary.v2.search
			.expression("folder:Coconut/*")
			.max_results(500)
			.sort_by("created_at", "desc")
			.execute();
		console.log(result.resources);
		return result.resources;
	},
};

export default media;
