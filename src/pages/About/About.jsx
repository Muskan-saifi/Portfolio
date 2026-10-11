import HeroImg from "@/assets/images/hero.png";
export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full Stack Developer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Developer workspace illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Muskan Saifi, a full stack developer who enjoys building clean, responsive and user-friendly web experiences with HTML, CSS, JavaScript and React and also work with Node.js, Express.js, MongoDB and REST APIs.
              </p>
              <p className="text-white">
                I have built projects including a Weather App, Library Management, 3D Calculator and more projects with a modern interface and you can explore them all on my portfolio and GitHub profile.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I keep learning by building practical projects, improving my code and exploring better ways to solve real-world problems.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
