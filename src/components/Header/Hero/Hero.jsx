import GitHubButton from '../../Global/GitHubButton';

function Hero() {
  return (
    <div className="p-4 flex flex-col gap-24 justify-center hero">
      <h2 className="flex flex-col text-4xl -mt-28.">
        <div className="flex w-[66%] gap-3">
          <div className="self-end">...</div>
          <div className="flex flex-col gap-0">
            <div className="name text-sm w-[66vw] pl-[1vw]" >Hi✋, I&apos;m SHARIF IQBAL JAMIL</div>
            <div>Front-end</div>
          </div>
        </div>

        <div className="w-[66%] ms-auto flex gap-3">
          Developer <span>...</span>
        </div>
      </h2>
      <div className='flex justify-center items-center gap-6'>
        <GitHubButton text='Resume'/>
        <GitHubButton text='Hire Me'/>
      </div>
    </div>
  );
}

export default Hero;
