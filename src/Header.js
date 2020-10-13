import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header() {
	return (
		<div className="header">
			<div className="header__icons">
				{/* Name a modifier like this :: header__icon--active in bem */}
				<div className="header__icon header__icon--active">
					<HomeIcon />
					<p>Home</p>
				</div>
				<div className="header__icon">
					<FlashOnIcon />
					<p>Trending</p>
				</div>
				<div className="header__icon">
					<LiveTvIcon />
					<p>Verified</p>
				</div>
				<div className="header__icon">
					<VideoLibraryIcon />
					<p>Collections</p>
				</div>
				<div className="header__icon">
					<SearchIcon />
					<p>Search</p>
				</div>
				<div className="header__icon">
					<PersonOutlineIcon />
					<p>Account</p>
				</div>
			</div>
			<img
				src="http://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
				alt="Hulu Logo"
			/>
		</div>
	);
}

export default Header;
