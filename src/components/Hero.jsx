import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { me } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="relative w-full h-full mx-aut0 droper">
        <div
          className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-secondary' />
            <div className='w-1 sm:h-80 h-40 secondary-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-secondary'>Essi Junior</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2`}>
              Fullstack - web, mobile, desktop - developer , <br className='sm:block hidden' />
              software engineer and designer
            </p>
          </div>
        </div>

        <div className="my-image absolute inset-0 lg:top-[250px] top-[300px] w-[100%] h-full flex justify-center items-start">
          <img src={me} alt="My image" className="lg:left-[35%] left-[0%] lg:w-[30%]" />
        </div>
        {/* <ComputersCanvas /> */}
        
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#a3a3a7] flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero
