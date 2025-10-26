import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/all';
import { Fragment, useEffect, useRef } from 'react';

const NavLinkEffect = ({ text = 'IGI' }) => {
	gsap.registerPlugin(ScrambleTextPlugin);
	const effectText = useRef(null);

	useEffect(() => {
		const element = effectText.current;
		if (!element) return;

		const hoverEffect = gsap.to(element, {
			duration: 0.334,
			scrambleText: {text},
			paused: true,
			reversed: true,
		});

		const handleMouseOver = () => hoverEffect.play();
		const handleMouseOut = () => hoverEffect.reverse();

		element.addEventListener('mouseover', handleMouseOver);
		element.addEventListener('mouseout', handleMouseOut);

		return () => {
			element.removeEventListener('mouseover', handleMouseOver);
			element.removeEventListener('mouseout', handleMouseOut);
			hoverEffect.kill();
		};
	}, []);

	return <span ref={effectText}>{text}</span>;
};

export default NavLinkEffect;
