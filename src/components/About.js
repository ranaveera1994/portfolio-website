import { React } from "react";
import { GiCoffeeCup } from "react-icons/gi";

const About = () => {
  return (
    <div class="text-white max-w-[800px] mx-auto w-full text-white flex flex-col py-10 px-5">
      <h1 className="text-[#00df9a] md:text-6xl sm:text-3xl font-bold text-5xl">A bit about me:</h1>
      <p className="md:text-4xl sm:text-3xl text-xl font-bold md:py-8 sm:py-8 py-8">Hey, I'm Ranaveer, Data Engineer working.</p> 
      <p className="md:text-4xl sm:text-3xl text-xl font-bold md:py-6 sm:py-8 py-8">Turning <GiCoffeeCup className="inline"/> into code and making data dance.</p>
    </div>
  )
}

export default About;