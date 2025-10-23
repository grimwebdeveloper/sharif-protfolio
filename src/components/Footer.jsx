import React, { useEffect, useState } from 'react';
import FooterBottom from './footer/FooterBottom';

const Footer = () => {
	return (
		<footer className='bg-zinc-950 text-white'>
			<div className=' min-h-svh flex flex-col justify-between max-w-7xl mx-auto px-4'>
				<div className=' flex flex-col gap-8 py-8'>
					<div className='grid grid-cols-3 gap-4'>
						<img
							src='profile_pic.png'
							alt='SHARIF IQBAL JAMIL'
							className='rounded-full h-[30vw] w-[30vw] object-cover object-bottom'
						/>
						<h2 className='col-span-2 self-center text-[25.6vw] leading-0'>
							Let's
						</h2>
						<h2 className='col-span-3 text-[19.2vw] leading-[19.2vw]'>
							Connect
						</h2>
					</div>

					<div className='outlne py-24 relative flex flex-col justify-center tems-center'>
						{/* <div className='outline'></div> */}
                        <hr />
						<div className='absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] bg-violet-600 rounded-full flex justify-center items-center'>
							<i className='ri-arrow-left-down-line text-7xl'></i>
						</div>
					</div>

					<ul className='flex flex-col gap-8 uppercase'>
						<li>
							<a
								href='#'
								className='outline outline-gray-400 rounded-full px-6 py-4 font-semibold flex items-center gap-1 w-fit'
							>
								<i className='ri-mail-send-fill'></i>
								grimwebdeveloper@gmail.com
							</a>
						</li>
						<li>
							<a
								href='#'
								className='outline outline-gray-400 rounded-full px-6 py-4 font-semibold flex items-center gap-1 w-fit'
							>
								<i class='ri-cellphone-fill'></i>
								+91 9905100804
							</a>
						</li>
					</ul>
				</div>
				<FooterBottom />
			</div>
		</footer>
	);
};

export default Footer;
