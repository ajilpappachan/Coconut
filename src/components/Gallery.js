import React, { useEffect, useState } from "react";
import Requests from "../utils/Requests";
import "./Gallery.css";

const Gallery = () => {
	const [media, setMedia] = useState([]);
	useEffect(() => {
		const getMedia = async () => {
			const response = await Requests.getmedia();
			const allMedia = response.map((item) => {
				return { id: item.asset_id, url: item.url, format: item.format };
			});

			//Sample data
			// let allMedia = [];
			// for (let i = 0; i < 50; i++) {
			// 	allMedia.push({
			// 		id: i,
			// 		url: "https://picsum.photos/600/500",
			// 		format: "jpg",
			// 	});
			// }
			setMedia(allMedia);
		};
		!media.length && getMedia();
	});
	return (
		<div className="Gallery">
			{media.map((item) => {
				return item.format === "jpg" ? (
					<img src={item.url} alt={item.id} key={item.id} />
				) : (
					<video
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
