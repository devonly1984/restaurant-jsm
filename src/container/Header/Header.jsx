import "./Header.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
const Header = () => (
	<div className="app__header app__wrapper section__padding" id="home">
		<div className="app__wrapper_info">
			<SubHeading title="Chase the new Flavor" />
			<h1 className="app__header-h1">Key to Fine Dining</h1>
			<p className="p__opensans" style={{ margin: "2rem 0" }}>
				Voluptate enim enim culpa duis. Pariatur aliqua mollit aliqua culpa
				dolore. Cillum ipsum in ad id laboris voluptate quis tempor in aute.
			</p>
			<button type="button" className="custom__button">
				Explore Menu
			</button>
		</div>
		<div className="app__wrapper_img">
			<img src={images.welcome} alt="header" />
		</div>
	</div>
);

export default Header;
