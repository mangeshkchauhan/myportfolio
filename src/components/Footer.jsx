import React from 'react';
import dp from '../assets/dp.jpeg'
import {
	AiFillGithub,
	AiFillInstagram,
	AiFillLinkedin,
	AiOutlineArrowUp,
} from 'react-icons/ai';

const Footer = () => {
	return (
		<footer>
			<div>
				<img
					src={dp}
					alt='Founder'
				/>

				<h2>Mangesh Kumar</h2>
				<p>There are three responses to a piece of design – yes, no, and WOW! Wow is the one I will deliver</p>
			</div>

			<aside>
				<h2>Social Media</h2>

				<article>
					<a href='https://instagram.com/killuaaog' target={'blank'}>
						<AiFillInstagram />
					</a>
					<a href='https://www.linkedin.com/in/mangeshkchauhan' target={'blank'}>
						<AiFillLinkedin />
					</a>
					<a href='https://github.com/mangeshkchauhan' target={'blank'}>
						<AiFillGithub />
					</a>
				</article>
			</aside>
			<a href='#home'>
				<AiOutlineArrowUp />
			</a>
		</footer>
	);
};

export default Footer;
