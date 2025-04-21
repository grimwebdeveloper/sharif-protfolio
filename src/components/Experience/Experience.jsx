import Heading from "../Heading/Heading"
import Skills from "../Skills/Skills"
import { data } from "./data"

function Experience() {
  const experience = data
  return (
    <div id="experience" className="my-container flex flex-col gap-8 lg:flex-row lg:justify-between pb-8 sm:pb-16">
      <Heading title="Experience" tagline="Turning code into career stories" />
      {/* <div className="flex flex-col gap-8 justify-center"> */}
        {experience.map((item) => (
          <Skills key={item.id} {...item} />
        ))}
      {/* </div> */}
    </div>
  )
}

export default Experience