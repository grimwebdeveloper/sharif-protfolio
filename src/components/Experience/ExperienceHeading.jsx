import ShinyText from '../Global/ShinyText';
import { Sparkles } from '../Global/sparkles';

function ExperienceHeading() {
  return (
    <>
      <main className="w-full overflow-hidden text-white sparkles-gradient relative">
        <section className="container mx-auto relative w-full overflow-hidden background">
          <article className="grid gap-4 text-center relative z-10 pt-10">
            <h1 className="2xl:text-6xl xl:text-5xl text-5xl font-semibold tracking-tighter ">
              <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                Experience
              </span>
            </h1>
            <p className="quote text-center text-gray-400 italic text-lg">
              <ShinyText
                text="Turning code into career stories"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </p>
          </article>

          <div className="absolute bottom-0 z-[2] h-[400px] w-screen overflow-hidden">
            <Sparkles
              density={3000}
              speed={1.9}
              color="#fff"
              direction="bottom"
              className="absolute inset-x-0 bottom-0 h-full w-full"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default ExperienceHeading;
