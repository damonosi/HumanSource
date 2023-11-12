"use client";
import React from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import Spinner from "../Spinner/Spinner";

const containerStyle = {
	width: "100%",
	height: "100%",
};

const center = {
	lat: 44.39877,
	lng: 26.12068,
};

const HumanSourceMap = () => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_API}`,
	});

	return (
		<div className="relative flex w-full  rounded-full md:w-1/2">
			{isLoaded ? (
				<iframe
					width={containerStyle.width}
					height={containerStyle.height}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZWU0iVv-sUARkUpox6A2skg&key=${process.env.NEXT_PUBLIC_GOOGLE_API}`}
					allowFullScreen
					className="rounded-2xl"
				></iframe>
			) : (
				<div className="flex h-full w-full items-center justify-center">
					<Spinner />
				</div>
			)}
		</div>
	);
};
export default React.memo(HumanSourceMap);
