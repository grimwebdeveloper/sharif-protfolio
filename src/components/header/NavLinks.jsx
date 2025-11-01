import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/all';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrambleTextPlugin);

const NavLinks = () => {
	const linkRefs = useRef([]);

	const navLinks = [
		{ id: 1, href: '#about', text: 'about' },
		{ id: 2, href: '#skills', text: 'skills' },
		{ id: 3, href: '#work', text: 'work' },
		{ id: 4, href: '#contact', text: 'contact' },
	];

	useEffect(() => {
		const animations = linkRefs.current.map((el, index) => {
			const text = navLinks[index].text;

			const anim = gsap.to(el, {
				scrambleText: {
					text,
					from: 'random',
					revealDelay: 0.1,
				},
				duration: 0.6,
				paused: true,
			});

			const handleMouseOver = () => anim.play();
			const handleMouseOut = () => anim.reverse();

			el.addEventListener('mouseenter', handleMouseOver);
			el.addEventListener('mouseleave', handleMouseOut);

			return { el, anim, handleMouseOver, handleMouseOut };
		});

		return () => {
			animations.forEach(({ el, anim, handleMouseOver, handleMouseOut }) => {
				el.removeEventListener('mouseenter', handleMouseOver);
				el.removeEventListener('mouseleave', handleMouseOut);
				anim.kill();
			});
		};
	}, []);

	return (
		<ul className='hidden sm:flex sm:gap-4'>
			{navLinks.map((link, i) => (
				<li key={link.id}>
					<a
						ref={(el) => (linkRefs.current[i] = el)}
						href={link.href}
						className='uppercase font-mono px-2'
					>
						{link.text}
					</a>
				</li>
			))}
		</ul>
	);
};

export default NavLinks;
