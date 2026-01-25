import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
} from 'remotion';

interface BookCallVideoProps {
	bookingUrl: string;
	title: string;
	subtitle: string;
	ctaText: string;
}

export const BookCallVideo: React.FC<BookCallVideoProps> = ({
	bookingUrl,
	title,
	subtitle,
	ctaText,
}) => {
	const frame = useCurrentFrame();
	const { fps, durationInFrames } = useVideoConfig();

	// Animation values
	const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
		extrapolateRight: 'clamp',
	});
	
	const titleY = interpolate(frame, [0, 30], [50, 0], {
		extrapolateRight: 'clamp',
	});

	const subtitleOpacity = interpolate(frame, [30, 60], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const subtitleY = interpolate(frame, [30, 60], [30, 0], {
		extrapolateRight: 'clamp',
	});

	// Google Meet icon animation
	const iconScale = spring({
		frame: frame - 60,
		fps,
		config: {
			damping: 10,
			stiffness: 100,
		},
	});

	const iconRotation = interpolate(frame, [60, 90], [0, 360], {
		extrapolateRight: 'clamp',
	});

	// Button animation
	const buttonOpacity = interpolate(frame, [90, 120], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const buttonScale = spring({
		frame: frame - 90,
		fps,
		config: {
			damping: 8,
			stiffness: 100,
		},
	});

	// Pulse animation for button
	const pulseScale = interpolate(
		frame,
		[120, durationInFrames],
		[1, 1.05],
		{
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill
			style={{
				background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '80px',
				fontFamily: 'system-ui, -apple-system, sans-serif',
			}}
		>
			{/* Title */}
			<div
				style={{
					fontSize: '72px',
					fontWeight: '800',
					color: 'white',
					textAlign: 'center',
					marginBottom: '40px',
					opacity: titleOpacity,
					transform: `translateY(${titleY}px)`,
					textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
					lineHeight: '1.2',
				}}
			>
				{title}
			</div>

			{/* Subtitle */}
			<div
				style={{
					fontSize: '36px',
					fontWeight: '400',
					color: 'rgba(255, 255, 255, 0.9)',
					textAlign: 'center',
					marginBottom: '80px',
					opacity: subtitleOpacity,
					transform: `translateY(${subtitleY}px)`,
					maxWidth: '1000px',
					lineHeight: '1.5',
				}}
			>
				{subtitle}
			</div>

			{/* Google Meet Icon */}
			<div
				style={{
					transform: `scale(${iconScale}) rotate(${iconRotation}deg)`,
					marginBottom: '60px',
					opacity: subtitleOpacity,
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 48 48"
					width="120"
					height="120"
				>
					<rect
						width="16"
						height="16"
						x="12"
						y="16"
						fill="#fff"
						transform="rotate(-90 20 24)"
					/>
					<polygon fill="#1e88e5" points="3,17 3,31 8,32 13,31 13,17 8,16" />
					<path
						fill="#4caf50"
						d="M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z"
					/>
					<path
						fill="#fbc02d"
						d="M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z"
					/>
					<path
						fill="#1565c0"
						d="M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z"
					/>
					<polygon fill="#e53935" points="13,7 13,17 3,17" />
					<polygon
						fill="#2e7d32"
						points="38,24 37,32.45 27,24 37,15.55"
					/>
					<path
						fill="#4caf50"
						d="M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z"
					/>
				</svg>
			</div>

			{/* CTA Button */}
			<div
				style={{
					opacity: buttonOpacity,
					transform: `scale(${buttonScale * pulseScale})`,
				}}
			>
				<div
					style={{
						background: 'white',
						color: '#1a202c',
						padding: '24px 48px',
						borderRadius: '16px',
						fontSize: '32px',
						fontWeight: '700',
						cursor: 'pointer',
						boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
						display: 'flex',
						alignItems: 'center',
						gap: '16px',
						transition: 'all 0.3s ease',
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48"
						width="40"
						height="40"
					>
						<rect
							width="16"
							height="16"
							x="12"
							y="16"
							fill="#1a202c"
							transform="rotate(-90 20 24)"
						/>
						<polygon fill="#1e88e5" points="3,17 3,31 8,32 13,31 13,17 8,16" />
						<path
							fill="#4caf50"
							d="M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z"
						/>
						<path
							fill="#fbc02d"
							d="M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z"
						/>
						<path
							fill="#1565c0"
							d="M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z"
						/>
						<polygon fill="#e53935" points="13,7 13,17 3,17" />
						<polygon
							fill="#2e7d32"
							points="38,24 37,32.45 27,24 37,15.55"
						/>
						<path
							fill="#4caf50"
							d="M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z"
						/>
					</svg>
					{ctaText}
				</div>
			</div>

			{/* URL Display */}
			<div
				style={{
					marginTop: '40px',
					fontSize: '20px',
					color: 'rgba(255, 255, 255, 0.8)',
					opacity: buttonOpacity,
					fontFamily: 'monospace',
				}}
			>
				{bookingUrl}
			</div>
		</AbsoluteFill>
	);
};

