import PageHeading from "@/components/layouts/banner/PageHeading";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <PageHeading title="About" />

      <div className="bg-white pb-12">
        <div className="container mx-auto lg:px-8 xl:max-w-7xl ">
          <div className="flex justify-between px-4 py-6 lg:px-8 xl:max-w-7xl">
            <div className="w-1/2 space-y-4 pb-4">
              <h2 className="text-2xl font-bold my-6">About me</h2>
              <p>
                I&apos;m Norberto Q. Libago Jr, a seasoned web developer with
                over 8 years of experience. Specializing in WordPress, ReactJS,
                Laravel, and AWS, I&apos;m passionate about crafting innovative
                digital solutions that elevate user experiences and drive
                business success.
              </p>
              <p>Looking forward to connecting and collaborating!</p>
            </div>

            <div className="w-1/2 px-12 py-2">
              <ul className="divide-y divide-gray-200 rounded-lg">
                <li className="flex items-center justify-between p-2">
                  <span className="mr-1 text-sm font-semibold">Email</span>
                  <span className="text-sm font-medium text-left">
                    <a href="mailto:norbertoqjr@gmail.com">
                      norbertoqjr@gmail.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-6 lg:px-8 xl:max-w-7xl ">
        <div className="bg-white rounded-xl py-4 px-8">
          <h2>My Goal</h2>
          <p>
            I am a passionate tech enthusiast dedicated to empowering others
            with the knowledge and tools they need to navigate the digital world
            effectively. My journey into the tech landscape has been driven by
            curiosity, a love for problem-solving, and a desire to share what
            I&apos;ve learned along the way.
          </p>
          <h3>My Mission</h3>
          <p>
            In today&apos;s digital age, having access to reliable and
            affordable computing resources is crucial. Whether you&apos;re a
            developer, a student, a small business owner, or simply someone
            interested in exploring the world of servers and cloud computing, I
            believe everyone should have the opportunity to leverage these
            powerful tools. That&apos;s why I focus on providing comprehensive
            tutorials on utilizing free virtual private servers (VPS) offered by
            Oracle.
          </p>
          <h3>Why Oracle&apos;s Free VPS?</h3>
          <p>
            Oracle&apos;s Free Tier VPS offers an incredible opportunity to get
            hands-on experience with cloud computing without the financial
            burden. With Oracle&apos;s generous free tier, you can:
          </p>
          <ul>
            <li>Host your own website or blog</li>
            <li>Experiment with development projects</li>
            <li>Learn about server administration</li>
            <li>Run applications and databases</li>
          </ul>
          <h3>What You&apos;ll Learn</h3>
          <p>Through my detailed tutorials, you will learn:</p>

          <ul>
            <li>How to sign up for Oracle&apos;s Free Tier</li>
            <li>Setting up and configuring your free VPS</li>
            <li>Installing and managing various software and applications</li>
            <li>Ensuring the security and performance of your server</li>
            <li>Practical use cases and projects you can implement</li>
          </ul>

          <h3>Why Follow My Tutorials?</h3>
          <ul>
            <li>
              Comprehensive and Beginner-Friendly: My step-by-step guides are
              designed with beginners in mind, ensuring that even if you&apos;re
              new to cloud computing, you&apos;ll be able to follow along and
              achieve your goals.
            </li>
            <li>
              Up-to-Date Information: The tech world is constantly evolving, and
              I strive to keep my tutorials current with the latest updates and
              best practices.
            </li>
            <li>
              Community and Support: Join a community of like-minded learners
              where you can ask questions, share your progress, and get support
              when you need it.
            </li>
          </ul>

          <h3>Get Started Today!</h3>

          <p>
            Embark on your cloud computing journey with me and unlock the
            potential of Oracle&apos;s free VPS. Whether you&apos;re looking to
            enhance your technical skills, host your own projects, or explore
            new opportunities, my tutorials will guide you every step of the
            way.
          </p>
          <p>
            Feel free to explore my tutorials and don&apos;t hesitate to reach
            out with any questions. Let&apos;s learn and grow together in this
            exciting tech adventure!
          </p>

          <a
            href="/guides/how-to-make-free-website"
            className="group inline-flex items-center justify-center gap-2 rounded-lg border border-primary-700 bg-primary-700 px-7 py-3.5 text-sm font-semibold text-white hover:border-primary-600 hover:bg-primary-600 hover:text-white focus:ring focus:ring-primary-400/50 active:border-primary-700 active:bg-primary-700 dark:focus:ring-primary-400/90"
          >
            <span>Read the Guide</span>
            <svg
              className="hi-mini hi-arrow-right inline-block size-5 opacity-50 transition group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
