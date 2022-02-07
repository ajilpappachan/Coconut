import React, { useEffect, useState } from "react";
import Requests from "../utils/Requests";

const Gallery = () => {
	const [media, setMedia] = useState([]);
	useEffect(() => {
		const getMedia = async () => {
			const response = await Requests.getmedia();
			const allMedia = response.map((item) => {
				return { id: item.asset_id, url: item.url, format: item.format };
			});
			setMedia(allMedia);
		};
		getMedia();
	});
	return (
		<div>
			{media.map((item) => {
				return item.format === "jpg" ? (
					<img
						width="300"
						height="300"
						src={item.url}
						alt={item.id}
						key={item.id}
					/>
				) : (
					<video
						width="300"
						height="300"
						autoPlay
						loop
						muted
						src={item.url}
						alt={item.id}
						key={item.id}
					/>
				);
			})}
		</div>
	);
};

export default Gallery;
