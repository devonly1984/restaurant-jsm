import "./Laurels.css";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
	return (
		<div className="app__laurels_awards-card">
			<img src={imgUrl} alt="award" />
			<div className="app__laurels_awards-card_content">
				<p className="p__cormorant" style={{ color: "#DDCA87" }}>
					{title}
				</p>
				<p className="p__cormorant">{subtitle}</p>
			</div>
		</div>
	);
};
const Laurels = () => {
	return (
		<div className="app__bg app__wrapper section__padding" id="awards">
			<div className="app__wrapper_info">
				<SubHeading title="Awards & Recognition" />
				<h1 className="headtext__cormorant">Our Laurels</h1>
				<div className="app__laurels_awards">
					{data.awards.map((award) => (
						<AwardCard award={award} key={award.title} />
					))}
				</div>
			</div>
			<div className="app__wrapper_img">
				<img src={images.laurels} alt="Laurels" />
			</div>
		</div>
	);
};
export default Laurels;
