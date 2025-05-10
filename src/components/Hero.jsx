import MasonryGrid from "./MasonryGrid";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-start items-center py-16 px-4"
    >
      <div className="max-w-4xl w-full flex flex-col items-start text-left gap-4">
        <h2 className="text-5xl font-bold">Hey, I’m Manish!</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Creative Developer | Engineer
        </p>
        <div className="max-w-4xl w-full mt-10 text-left text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            {/* {" "} */}
            I'm a <span className="font-semibold">software engineer</span> at
            SRKay Cosnulting Group, a
            <span className="font-semibold"> self-taught chef</span>, trying to
            be a <span className="font-semibold">full-stack developer</span>,{" "}
            <span className="font-semibold">ai enthusiast</span>. I also write
            articles on computer science. I love chatting about new ideas, tech
            startups, and great products.
          </p>
        </div>
        {/* <MasonryGrid /> */}
      </div>
    </section>
  );
};

export default Hero;
