import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const Hero = () => {
	const name = useRef(null);
	const firsth2 = useRef(null);
	const secondh2 = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			name.current,
			{ opacity: 0 },
			{ opacity: 1, delay: 0.25, duration: 1 }
		);
		tl.fromTo(firsth2.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
		tl.fromTo(secondh2.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1 });
	});

	return (
		<div className='font-[Oswald] uppercase grid h-[calc(100vh-128px)] justify-center content-center text-center pointer-events-none'>
			<h2
				ref={name}
				className='font-black text-[10.8vw] xl:text-[138px] opacity-0'
			>
				sharif iqbal jamil
			</h2>
			<div className='leading-[9vw] xl:leading-[115px] text-[8vw] xl:text-[102px]'>
				<h3 ref={firsth2} className='mr-[10.8vw] xl:mr-[138px] font-extralight'>
					fullstack
				</h3>
				<h3
					ref={secondh2}
					className='ml-[10.8vw] xl:ml-[138px] font-extralight italic'
				>
					developer
				</h3>
			</div>
		</div>
	);
};

export default Hero;
