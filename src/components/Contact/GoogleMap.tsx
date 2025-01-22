"use client";
import React from "react";


const containerStyle = {
	width: "100%",
	height: "100%",
};

const center = {
	lat: 44.39877,
	lng: 26.12068,
};

const HumanSourceMap = () => {
	return (
		<div className="relative flex w-full  rounded-full md:w-1/2">
			<iframe
				width={containerStyle.width}
				height={containerStyle.height}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZWU0iVv-sUARkUpox6A2skg&key=${process.env.NEXT_PUBLIC_GOOGLE_API}`}
				allowFullScreen
				className="rounded-2xl"
			/>
		</div>
	);
};
export default React.memo(HumanSourceMap);
