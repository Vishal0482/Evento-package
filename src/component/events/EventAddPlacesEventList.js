import React from "react";
import { Link } from "react-router-dom";

function EventAddPlacesEventList({ displayName, categoryName }) {
	if (displayName !== "" && categoryName !== "")
		return (
			<div className="w-full flex items-center">
				<div className="w-full px-7 py-5 bg-white rounded">
					<div className="flex items-start justify-between">
						<div>
							<h2>{displayName}</h2>
							<span className="text-sm text-spiroDiscoBall font-medium tracking-wider">{categoryName}</span>
						</div>
						<div className="flex">
							<Link
								to="/"
								className="flex items-center text-xs text-quicksilver font-semibold tracking-wider pr-4 border-r border-quicksilver">
								<i className="icon-fill-delete mr-1"></i>Delete
							</Link>
							<Link to="/" className="flex items-center text-xs text-quicksilver font-semibold tracking-wider pl-4">
								<i className="icon-edit mr-1"></i>Edit
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	else return "";
}

export default EventAddPlacesEventList;
