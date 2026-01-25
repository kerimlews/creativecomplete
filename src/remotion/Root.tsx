import React from 'react';
import { Composition } from 'remotion';
import { BookCallVideo } from './BookCallVideo';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="BookCall"
				component={BookCallVideo}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					bookingUrl: 'https://calendar.app.google/VuZK5oq8TXARMwcg8',
					title: 'Ready to Transform Your Business?',
					subtitle: 'Book your intro call and let\'s discuss how we can help you scale',
					ctaText: 'Book Your Intro Call',
				}}
			/>
		</>
	);
};

