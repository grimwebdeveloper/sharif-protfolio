import Heading from "../Heading/Heading";
import Skills from "../Skills/Skills";
import { data } from "./data";

function CurrentLearningAndFuturePlans() {
  const currentLearningAndFuturePlans = data
  return (
    <div className="my-container flex flex-col gap-8 lg:flex-row lg:justify-between pb-8 sm:pb-16">
      <Heading title='Current Learning & Future Plans' tagline='I constantly try to improve'/>
      <div className="flex flex-col gap-8 items-center justify-center">
        {currentLearningAndFuturePlans.map(item => <Skills key={item.id} {...item}/>)}
      </div>
    </div>
  );
}

export default CurrentLearningAndFuturePlans;
