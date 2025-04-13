import { Sparkles } from "../Global/sparkles";

function AboutHeading() {
  return (
    <>
      <main className="w-full overflow-hidden text-white ">
        <section className="container mx-auto relative w-full overflow-hidden">
          <article className="grid gap-4 text-center relative z-10 pt-10">
            <h1 className="2xl:text-6xl  xl:text-5xl text-5xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
              About Me
            </h1>
            <span>
            I wasn’t born for this — I’m building myself into it.
            </span>
          </article>

          <div className="absolute bottom-0 z-[2] h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute">
            <Sparkles
              density={1800}
              speed={1.2}
              color="#48b6ff"
              direction="top"
              className="absolute inset-x-0 bottom-0 h-full w-full "
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutHeading;
