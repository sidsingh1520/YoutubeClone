import React from "react";
import Button from "./Button";

const list = [
	"All",
	"Live",
	"Gaming",
	"Songs",
	"Cricket",
	"Soccer",
	"News",
	"Cooking",
	"Valentines",
];

const ButtonList = () => {
	return (
		<div className="flex">
			{list.map((item) => (
				<Button key={item} name={item} />
			))}
		</div>
	);
};

export default ButtonList;
