import Footer from "../components/Footer";
import Slider from "../components/Slider";

function Home() {
  const name = "Chandan";

  return (
    <div className="">
      <Slider />
      <div className="container-fuild mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center px-6 py-12 lg:grid-cols-2">
      
      {/* Text Section */}
      <div className="order-2 lg:order-1">
        <h1 className="text-3xl lg:text-5xl font-bold text-blue-800 mb-6 leading-tight">
          Welcome to My Web<br />
          Development Portfolio!
        </h1>
        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
          I am a <strong>UI Developer</strong> with <strong>9 years of experience</strong> in creating clean, responsive, and user-friendly web designs. I completed my <strong>MCA in 2015</strong> and am currently working at <strong>ITH Technologies</strong>.
          <br /><br />
          My core skills include <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, <strong>ReactJS</strong>, <strong>Angular</strong>, <strong>Bootstrap</strong>, and <strong>Material UI</strong>. I specialize in turning designs into real, working websites that look great on all devices.
          <br /><br />
          I’m always eager to learn and grow. I believe in writing clean code and collaborating with teams to deliver the best user experience.
        </p>
      </div>

      {/* Image Section */}
      <div className="order-1 lg:order-2">
        <img
          src="/images/your-image1.jpg" // Place image in public/images/
          alt="Team working on web design"
          loading="lazy"
          className="h-auto max-h-[36rem] w-full rounded-2xl object-cover shadow-lg transition duration-300 ease-in-out hover:scale-105"
        />
      </div>
      
    </div>

    <section className="pb-28 px-8 mt-12">
    <div className="grid xl:grid-cols-2 md:grid-cols-2 container-fuild gap-10 mx-auto items-start">
        <div>
            <div className="mb-10">
                <p className="block antialiased font-sans text-blue-800 mb-2 text-3xl font-bold">Education &amp; Certifications</p>
                <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit !text-gray-500">See my education history.</p>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="relative bg-clip-border mt-4 mx-4 bg-white text-gray-700 flex items-center justify-between rounded-none overflow-visible">
                        <div className="flex flex-col gap-1 w-full">
                            <p className="block antialiased font-sans text-blue-500 font-bold text-xs">2016</p>
                            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-800 w-full">Certified Web Developer - Web Development</h5>
                        </div>
                        <button
                            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-blue-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex-shrink-0 pointer-events-none"
                            type="button"
                        >
                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5" stroke-width="2">
                                    <path
                                        d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"
                                    ></path>
                                    <path
                                        d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"
                                    ></path>
                                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6 grid justify-start !px-3.5 pt-2">
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                            This comprehensive program covered HTML5, CSS3, JavaScript, responsive design, server-side scripting, and web security.
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="relative bg-clip-border mt-4 mx-4 bg-white text-gray-700 flex items-center justify-between rounded-none overflow-visible">
                        <div className="flex flex-col gap-1 w-full">
                            <p className="block antialiased font-sans text-blue-500 font-bold text-xs">2015</p>
                            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-800 w-full">Responsive Web Design Certification</h5>
                        </div>
                        <button
                            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-blue-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex-shrink-0 pointer-events-none"
                            type="button"
                        >
                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5" stroke-width="2">
                                    <path
                                        d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"
                                    ></path>
                                    <path
                                        d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"
                                    ></path>
                                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6 grid justify-start !px-3.5 pt-2">
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                            The Responsive Web Design certification signifies competence in designing and developing websites that adapt seamlessly to various screen sizes and devices.
                        </p>
                    </div>
                </div>
               
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="relative bg-clip-border mt-4 mx-4 bg-white text-gray-700 flex items-center justify-between rounded-none overflow-visible">
                        <div className="flex flex-col gap-1 w-full">
                            <p className="block antialiased font-sans text-blue-500 font-bold text-xs">2014-2016</p>
                            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-800 w-full">Bachelor of Science in Computer Science </h5>
                        </div>
                        <button
                            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-blue-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex-shrink-0 pointer-events-none"
                            type="button"
                        >
                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5" stroke-width="2">
                                    <path
                                        d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"
                                    ></path>
                                    <path
                                        d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"
                                    ></path>
                                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6 grid justify-start !px-3.5 pt-2">
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                            Relevant Coursework: Data Structures, Algorithms, Web Development, Software Engineering, Database Management.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="mb-10">
                <p className="block antialiased font-sans text-blue-800 mb-2 text-3xl font-bold">Experience</p>
                <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit !text-gray-500">See my experience as a developer.</p>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="relative bg-clip-border mt-4 mx-4 bg-white text-gray-700 flex items-center justify-between rounded-none overflow-visible">
                        <div className="flex flex-col gap-1 w-full">
                            <p className="block antialiased font-sans text-blue-500 font-bold text-xs">2023 - PRESENT</p>
                            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-800 w-full">Freelancer Web Developer</h5>
                        </div>
                        <button
                            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-blue-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex-shrink-0 pointer-events-none"
                            type="button"
                        >
                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5" stroke-width="2">
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                        clip-rule="evenodd"
                                    ></path>
                                    <path
                                        d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6 grid justify-start !px-3.5 pt-2">
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                            The core of my work involved actual web development. I would write code, design layouts, and create functionality based on the project's specifications.
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="relative bg-clip-border mt-4 mx-4 bg-white text-gray-700 flex items-center justify-between rounded-none overflow-visible">
                        <div className="flex flex-col gap-1 w-full">
                            <p className="block antialiased font-sans text-blue-500 font-bold text-xs">2021 - 2023</p>
                            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-800 w-full">Technical Team Lead</h5>
                        </div>
                        <button
                            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-blue-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex-shrink-0 pointer-events-none"
                            type="button"
                        >
                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5" stroke-width="2">
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                        clip-rule="evenodd"
                                    ></path>
                                    <path
                                        d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6 grid justify-start !px-3.5 pt-2">
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">I provided strong leadership by overseeing and guiding a team of highly skilled technical professionals.</p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="relative bg-clip-border mt-4 mx-4 bg-white text-gray-700 flex items-center justify-between rounded-none overflow-visible">
                        <div className="flex flex-col gap-1 w-full">
                            <p className="block antialiased font-sans text-blue-500 font-bold text-xs">2017 - 2021</p>
                            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-800 w-full">Senior Web Developer</h5>
                        </div>
                        <button
                            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-blue-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex-shrink-0 pointer-events-none"
                            type="button"
                        >
                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5" stroke-width="2">
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                        clip-rule="evenodd"
                                    ></path>
                                    <path
                                        d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6 grid justify-start !px-3.5 pt-2">
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                            Revamped the automated test framework for web services, resulting in a remarkable 90% reduction in debugging and issue resolution time.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <div className="container-fuild gap-10 mt-10 mx-auto items-center">
        <div>
            <div className="mb-10">
                <p className="block antialiased font-sans text-blue-800 mb-2 text-3xl font-bold">Skills</p>
                <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit !text-gray-500">Check out my technical and soft skills.</p>
            </div>
            <div className="container-fuild mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="relative bg-clip-border mt-4 mx-4 bg-white text-gray-700 flex items-center justify-between rounded-none overflow-visible">
                        <div className="flex flex-col gap-1 w-full">
                            <p className="block antialiased font-sans text-blue-500 font-bold text-xs">Technical Skills</p>
                            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-800 w-full">Front-End Frameworks</h5>
                        </div>
                        <button
                            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-blue-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex-shrink-0 pointer-events-none"
                            type="button"
                        >
                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5" stroke-width="2">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6 grid justify-start !px-3.5 pt-2">
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                            Competent in working with front-end frameworks such as React, Angular, or Vue.js to develop dynamic and responsive web applications with a focus on user experience.
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="relative bg-clip-border mt-4 mx-4 bg-white text-gray-700 flex items-center justify-between rounded-none overflow-visible">
                        <div className="flex flex-col gap-1 w-full">
                            <p className="block antialiased font-sans text-blue-500 font-bold text-xs">Soft Skills</p>
                            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-800 w-full">Attention to Detail</h5>
                        </div>
                        <button
                            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-blue-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex-shrink-0 pointer-events-none"
                            type="button"
                        >
                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5" stroke-width="2">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6 grid justify-start !px-3.5 pt-2">
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                            Meticulous attention to detail in code quality, user interface design, and testing to ensure error-free and user-friendly web applications.
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="relative bg-clip-border mt-4 mx-4 bg-white text-gray-700 flex items-center justify-between rounded-none overflow-visible">
                        <div className="flex flex-col gap-1 w-full">
                            <p className="block antialiased font-sans text-blue-500 font-bold text-xs">Technical Skills</p>
                            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-800 w-full">Responsive Web Design</h5>
                        </div>
                        <button
                            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-blue-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex-shrink-0 pointer-events-none"
                            type="button"
                        >
                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5" stroke-width="2">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6 grid justify-start !px-3.5 pt-2">
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                            Skilled in creating responsive layouts using CSS Grid, Flexbox, and media queries. Ensures websites adapt seamlessly to various screen sizes and devices.
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="relative bg-clip-border mt-4 mx-4 bg-white text-gray-700 flex items-center justify-between rounded-none overflow-visible">
                        <div className="flex flex-col gap-1 w-full">
                            <p className="block antialiased font-sans text-blue-500 font-bold text-xs">Soft Skills</p>
                            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-800 w-full">Time Management</h5>
                        </div>
                        <button
                            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-blue-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex-shrink-0 pointer-events-none"
                            type="button"
                        >
                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5" stroke-width="2">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6 grid justify-start !px-3.5 pt-2">
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                            Excellent time management skills to meet project deadlines, prioritize tasks effectively, and handle multiple projects simultaneously.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>

     <Footer />   
    </div>
  );
}

export default Home;
