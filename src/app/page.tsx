import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-10">
      {/* Fixed Header */}
      {/* <header className="fixed w-full bg-white shadow z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="text-xl font-bold">Sergio Martin</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-500">
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-blue-500">
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="lg:flex lg:flex-row lg:justify-between">
        <section id="about" className="w-[48%] lg:sticky lg:top-0 lg:max-h-screen lg:flex-col lg:py-24">
          <h2 className="text-5xl font-bold">
            <Link href="/">Gilberto Davis</Link>
          </h2>
          <p>Full Stack Engineer</p>
          <p className="text-lg text-gray-600">
            I am an experienced engineer with a strong track record in
            end-to-end software development. Proven leadership delivering high
            impact solutions. Technically adept and committed to staying current
            with emerging technologies.
          </p>
        </section>

        <div className="w-[52%] lg:py-24">
          <section id="experience" className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8">Experience</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold">
                    Lead Software Engineer @ Sigo Seguros
                  </h3>
                  <span className="text-gray-500">
                    Sep 2023 - Present | Remote - US
                  </span>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                    <li>
                      Led the creation of a front-end design system and
                      mono-repository to boost UI consistency.
                    </li>
                    <li>
                      Revamped the user portal with features like renewals,
                      reinstatements, and payment handling.
                    </li>
                    <li>
                      Spearheaded the transition to a modular, domain-driven
                      design (DDD) and CQRS-based architecture.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">
                    Senior Software Engineer @ Hinge Health
                  </h3>
                  <span className="text-gray-500">
                    Feb 2022 - Sep 2023 | Remote - US
                  </span>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                    <li>Led the user onboarding and activation team.</li>
                    <li>
                      Architected and contributed to core user-facing mobile/web
                      applications.
                    </li>
                    <li>
                      Developed an in-app orders feature saving the company
                      significant costs.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">
                    Senior Software Engineer @ Oracle
                  </h3>
                  <span className="text-gray-500">
                    Jan 2021 - Feb 2022 | Austin, TX
                  </span>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                    <li>
                      Co-led the Development Lifecycle User Experience Team.
                    </li>
                    <li>
                      Architected front-end Oracle Cloud plugin applications.
                    </li>
                    <li>
                      Coordinated weekly release deployments across multiple
                      environments.
                    </li>
                  </ul>
                </div>
                {/* Additional experience items can be added here */}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8">Education</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold">
                    MS Computer Science @ Georgia Tech
                  </h3>
                  <span className="text-gray-500">
                    Jan 2018 - Jun 2019 | Atlanta, GA
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">
                    Software Engineering Immersive Program @ Hack Reactor
                  </h3>
                  <span className="text-gray-500">
                    Sep 2015 - Dec 2015 | Austin, TX
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">
                    BS Electronics Engineering (Automation) @ UNEFA
                  </h3>
                  <span className="text-gray-500">
                    Sep 2003 - Oct 2008 | Venezuela
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">Project One</h3>
                  <p className="text-gray-700">
                    A brief description of a significant project.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">Project Two</h3>
                  <p className="text-gray-700">
                    A brief description of another project.
                  </p>
                </div>
                {/* More project cards can be added here */}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
