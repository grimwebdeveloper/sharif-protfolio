import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/all';
import { useRef, useEffect } from 'react';

const Testing = () => {
	const myRef = useRef(null);
	
	gsap.registerPlugin(ScrambleTextPlugin);
	
	useGSAP(() => {
		// GSAP plugin registration and setup
	});
	
	useEffect(() => {
		const element = myRef.current;
		if (!element) return;
		
		// Create the GSAP animation
		const hoverEffect = gsap.to(element, {
			duration: 0.25,
			scrambleText: 'Testing',
			paused: true,
			reverse: true,
		});
		
		// Event handlers
		const handleMouseOver = () => hoverEffect.play();
		const handleMouseOut = () => hoverEffect.reverse();
		
		// Add event listeners
		element.addEventListener('mouseover', handleMouseOver);
		element.addEventListener('mouseout', handleMouseOut);
		
		// Cleanup function
		return () => {
			element.removeEventListener('mouseover', handleMouseOver);
			element.removeEventListener('mouseout', handleMouseOut);
			hoverEffect.kill(); // Clean up GSAP animation
		};
	}, []);
	
	return <div ref={myRef}>Testing</div>;
};

export default Testing;

