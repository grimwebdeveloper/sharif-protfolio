import Heading from "../Heading/Heading"

function AboutMe() {
  return (
    <div id="about-me" className="my-container flex flex-col gap-8 lg:flex-row lg:justify-between pb-8 sm:pb-16">
      <Heading title="About Me" tagline="I wasn’t born for this — I’m building myself into it. Real success is earned, not given." />
    <div className="flex flex-col gap-8 items-center justify-center">
      <p className="mb-4 text-lg">Hi, I'm Sharif — a passionate and self-taught front-end developer who
        believes that{' '}
        <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
          skills and consistency matter more than degree
        </strong>
        .
      </p>

      <p className="mb-4 text-lg">
        My journey started back in 9th grade during a summer vacation when I was
        first introduced to HTML. Though life took a different path and I
        started preparing for government exams in 2021, destiny had something
        else in store for me.
        In 2022, while doing a computer diploma, I reconnected with web
        development. One of my teachers recognized my potential and advised me
        to pursue this field seriously. But during my job application process, I
        faced corruption not once but three times. That was the turning point —
        I realized I wanted a career where{' '}
        <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
          talent, not influence
        </strong>
        , decides your success.
      </p>

      <p className="mb-4 text-lg">
        After deep research and recalling my teacher’s advice, I made a bold
        decision in{' '}
        <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
          December 2023
        </strong>{' '}
        — to become a web developer and master the skills that truly make an
        impact.
      </p>

      <h3 className="text-2xl font-semibold mb-2 lg:mr-auto">My Vision</h3>
      <p className="mb-4 text-lg">
        I envision becoming a{' '}
        <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
          full-stack creative developer
        </strong>{' '}
        — someone who blends{' '}
        <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
          logic with design
        </strong>
        , and builds smart, stunning, and impactful web experiences.
        My core skill is{' '}
        <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
          JavaScript
        </strong>
        , and I love using it to bring ideas to life across different stacks.
        I'm always curious, exploring new technologies, and staying updated with
        the latest trends.
      </p>

      <blockquote className="border-l-4 border-blue-400 pl-4 italic mb-4">
        <p className="text-lg">
          <strong>When I'm not coding</strong>, I'm exploring new ideas and
          embracing the balance of life. I believe in waking up every day{' '}
          <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
            eager to make a difference
          </strong>
          , whether in my work or mindset.
        </p>
      </blockquote>

      <p className="mb-4 text-lg">
        I am{' '}
        <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
          available for any kind of job opportunities
        </strong>{' '}
        that match my skills and interests. If you're looking for someone who's
        hungry to grow, ready to contribute, and committed to leveling up every
        single day — I’m here and ready!
      </p>

      {/* <p className="quote text-center text-gray-400 italic text-lg">
        <ShinyText
          text="I chose the skillful one. Because real success is earned, not given."
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </p> */}
    </div>
  </div>
  )
}

export default AboutMe  