import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
const Head = () => {
	const dispatch = useDispatch();

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};
	return (
		<div className="grid grid-flow-col p-5 shadow-lg">
			<div className="flex col-span-1 justify-evenly">
				<img
					onClick={() => toggleMenuHandler()}
					className="h-8 hover:cursor-pointer"
					alt="menu-icon"
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
				/>
				<img
					className="h-8 mx-2"
					alt="logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
				/>
			</div>
			<div className="col-span-10 align-middle flex justify-center">
				<input
					className="w-1/2 border border-gray-400 p-2 rounded-l-full"
					type="text"
				/>
				<button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
					🔎
				</button>
			</div>
			<div className="col-span-1">
				<img
					className="h-8"
					alt="user"
					src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
				/>
			</div>
			<div></div>
		</div>
	);
};

export default Head;
