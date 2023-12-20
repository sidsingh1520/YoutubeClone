import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const Body = () => {
	console.log("body");
	return (
		<div className="flex">
			<Sidebar />
			<Outlet />
		</div>
	);
};

export default Body;
