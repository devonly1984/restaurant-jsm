import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
const Chef = () => (
	<div className="app__bg app__wrapper section__padding">
		<div className="app__wrapper_img app__wrapper_img-reverse">
			<img src={images.chef} alt="Chef" />
		</div>
		<div className="app__wrapper_info">
			<SubHeading title="Chef's Word" />
			<h1 className="headtext__cormorant">What we Believe in</h1>
			<div className="app__chef-content">
				<div className="app__chef-content_quote">
					<img src={images.quote} alt="Quote" />
					<p className="p__opensans">
						Commodo velit laborum nisi officia sunt qui.
					</p>
				</div>
				<p className="p__opensans">
					Cillum ipsum nisi aliqua enim sunt esse laborum minim est id cupidatat
					ea. Sint adipisicing incididunt sint sunt amet do laborum occaecat
					sint dolor. Anim dolore amet ut officia nulla dolor velit. Proident
					adipisicing pariatur sunt exercitation anim reprehenderit pariatur
					duis et magna minim dolor aute. Nostrud in irure laborum consectetur
					do. Id ad occaecat ut elit excepteur enim proident. Sint aute labore
					anim exercitation ipsum in ad sunt.
				</p>
			</div>
			<div className="app__chef-sign">
				<p>Kevin Luo</p>
				<p className="p__opensans">Chef & Founder</p>
				<img src={images.sign} alt="Signature" />
			</div>
		</div>
	</div>
);

export default Chef;
