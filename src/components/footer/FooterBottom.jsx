import { useEffect, useState } from 'react';

const FooterBottom = () => {
	const [time, setTime] = useState(
		new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })
	);
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(
				new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })
			);
		}, 1000);
		return () => clearInterval(interval);
	});
	return (
		<div className='uppercase font-mono flex items-center justify-between py-4'>
			<div className='font-semibold'>{time}</div>
			<ul className='flex items-center gap-6'>
				<li>
					<a
						href='https://www.linkedin.com/in/grimwebdeveloper/'
						target='_blank'
						className='flex items-center gap-1'
					>
						<i className=' ri-linkedin-box-fill text-2xl'></i>LinkedIn
					</a>
				</li>
				<li>
					<a
						href='https://github.com/grimwebdeveloper/'
						target='_blank'
						className='flex items-center gap-1'
					>
						<i className=' ri-github-fill text-2xl'></i>GitHub
					</a>
				</li>
			</ul>
		</div>
	);
};

export default FooterBottom;
