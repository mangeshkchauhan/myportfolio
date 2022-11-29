import React from 'react';
import user from '../assets/user.png'

const Testimonial = () => {
	return (
		<div id='testimonial'>
			<h2>Testimonial</h2>

			<section>
				<TestimonialCard
					name={'Ramesh'}
					feedback={'Delivered the website with great architecture and UI.'}
				/>

				<TestimonialCard name={'Sayan Ghosh'} feedback={'Wow!! What a portfolio.'} />

				<TestimonialCard
					name={'Sanjesh Kumar'}
					feedback={'Hard working and perfectionist.'}
				/>
			</section>
		</div>
	);
};

const TestimonialCard = ({ name, feedback }) => (
	<article>
		<img src={user} alt='User' />
		<h4>{name}</h4>
		<p>{feedback}</p>
	</article>
);

export default Testimonial;
