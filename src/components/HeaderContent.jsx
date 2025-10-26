import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const HeaderContent = () => {
	const heading = useRef(null);
	const taglineOne = useRef(null);
	const taglineTwo = useRef(null);
	useGSAP(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			heading.current,
			{ opacity: 0, y: -50 },
			{ opacity: 1, y: 0, delay: 0.1, duration: 1, ease: 'expo.out' }
		);
		tl.fromTo(
			taglineOne.current,
			{ opacity: 0, x: -50 },
			{ opacity: 1, x: 0, duration: 0.5, ease: 'power1.out' }
		);
		tl.fromTo(
			taglineTwo.current,
			{ opacity: 0, x: 50 },
			{ opacity: 1, x: 0, duration: 0.5, ease: 'power1.out' }
		);
	});
	return (
		<div className='font-[Oswald] flex flex-col items-center justify-center h-[calc(100vh-60px)] pb-[60px]'>
			<h2
				ref={heading}
				className='font-black text-xl text-[10.18vw] md:text-[8vw] lg:text-[9vw] xl:text-[115.2px] leading-[14vw] md:leading-[10vw] lg:leading-[12vw] xl:leading-[140px]'
			>
				SHARIF IQBAL JAMIL
			</h2>
			<h3 className='font-black text-2xl text-[10vw] md:text-[8vw] lg:text-[9vw] xl:text-[115.2px] leading-[11vw] md:leading-[9vw] lg:leading-[10vw] xl:leading-[124px]'>
				<div
					ref={taglineOne}
					className='font-extralight mr-[11.18vw] lg:mr-[114.46px]'
				>
					FULL STACK
				</div>
				<div
					ref={taglineTwo}
					className='font-extralight ml-[11.18vw] lg:ml-[114.46px]'
				>
					DEVELOPER
				</div>
			</h3>
		</div>
	);
};

export default HeaderContent;
