import React, { useState }  from "react";

const projects = [
  {
    id: 1,
    title: "Social App Features",
    description: "A modern social media app built with React and Laravel.",
    image: "/images/portfolio/Social_App_Features.jpg",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "An advanced e-commerce solution with secure payment integration.",
    image: "/images/portfolio/Ecommerce_Platform.jpg",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A professional portfolio built with React and Tailwind CSS.",
    image: "/images/portfolio/Portfolio_Website.jpg",
  },
];
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <div>
      {/* Header Section */}
      <header className="header text-center">
        <img
          src="/images/user.png"
          alt="User Profile"
          className="profile-img mb-3"
        />
        <h2>Alpesh Bheda</h2>
        <p className="fw-600">
          Full-Stack PHP Developer | Laravel Expert | WordPress Specialist | AWS Enthusiast
        </p>
        <p>Contact: user@example.com | +123456789</p>
      </header>

      {/* Main Content */}
      <div className="container mt-4">
        <div className="row d-flex justify-content-center">
          <div className="col-md-11 portfolio">
            {/* Tabs */}
            <ul className="nav nav-tabs">
        <li className="nav-item">
          <a href="javascript:void(0)" 
            className={`nav-link ${activeTab === "portfolio" ? "active" : ""}`}
            onClick={() => setActiveTab("portfolio")}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="javascript:void(0)" 
            className={`nav-link ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="javascript:void(0)" 
            className={`nav-link ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a href="javascript:void(0)" 
            className={`nav-link ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </a>
        </li>
      </ul>

            {/* Portfolio Content */}
            <div className="tab-content">
              <div id="portfolio" className={`container tab-pane ${activeTab === "portfolio" ? "active" : "fade"}`}>
                <br />
                <div className="row justify-content-center my-5">
                  <div className="col-md-12">
                    <div className="card shadow-lg p-4 rounded">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="fa fa-briefcase text-primary mr-2"></i> Project Portfolio
                        </h5>
                        <p>Showcasing some of my best work, crafted with innovation and precision.</p>
                        <div className="row">
                        {projects.map((project) => (
                            <div key={project.id} className="col-md-4 mb-3">
                              <div className="card h-100 shadow">
                                <img src={project.image} className="card-img-top" alt={project.title} />
                                <div className="card-body d-flex flex-column">
                                  <h5 className="card-title">{project.title}</h5>
                                  <p className="card-text">{project.description}</p>
                                  <a href="#" className="btn btn-primary mt-auto">
                                    View Project
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="about" className={`container tab-pane ${activeTab === "about" ? "active" : "fade"}`}>
                
                <div className="row justify-content-center my-5">
                  <div className="col-md-12">
                    <div className="card shadow-lg p-4 rounded">
                      <div className="card-body">
                        {/* About Me */}
                        <h5 className="card-title">
                          <i className="fa fa-user text-primary mr-2"></i> About Me
                        </h5>
                        <p>
                          I am a full-stack developer with <strong>6+ years of experience</strong> in PHP, Laravel,
                          Livewire, React, and
                          cloud technologies. I have successfully built scalable <strong>social apps, CMS platforms, and
                            e-commerce
                            systems</strong>. My focus is on <strong>efficient backend logic, clean UI/UX, and performance
                            optimization</strong>.
                        </p>
                        <p><i className="fa fa-phone text-success mr-2"></i> <strong>Mobile:</strong> +123456789</p>
                        <p><i className="fa fa-envelope text-danger mr-2"></i> <strong>Email:</strong> user@example.com</p>
                        <p><i className="fa fa-linkedin text-info mr-2"></i> <strong>LinkedIn:</strong>
                          <a href="https://www.linkedin.com/in/demo-user" target="_blank">www.linkedin.com/in/demo-user</a>
                        </p>

                        {/* Skills & Expertise */}
                        <h5 className="mt-4">
                          <i className="fa fa-cogs text-warning mr-2"></i> Skills & Expertise
                        </h5>
                        <div className="row">
                          <div className="col-md-6">
                            <span className="badge badge-primary p-2 my-1 mr-1">Laravel</span>
                            <span className="badge badge-success p-2 my-1 mr-1">React</span>
                            <span className="badge badge-danger p-2 my-1 mr-1">WordPress</span>
                            <span className="badge badge-info p-2 my-1 mr-1">JavaScript</span>
                            <span className="badge badge-dark p-2 my-1 mr-1">jQuery</span>
                          </div>
                          <div className="col-md-6">
                            <span className="badge badge-secondary p-2 my-1 mr-1">API Development</span>
                            <span className="badge badge-warning p-2 my-1 mr-1">AWS (S3, Lambda, EC2)</span>
                            <span className="badge badge-light p-2 my-1 mr-1">GitHub</span>
                            <span className="badge badge-primary p-2 my-1 mr-1">MySQL</span>
                            <span className="badge badge-danger p-2 my-1 mr-1">Payment Gateways</span>
                          </div>
                        </div>

                        {/* Project Highlights */}
                        <h5 className="mt-4">
                          <i className="fa fa-trophy text-primary mr-2"></i> Project Highlights
                        </h5>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-comments text-success mr-2"></i> Social App</h6>
                              <p className="text-muted">Features for posts, communities, job boards, and interactions.</p>

                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-globe text-warning mr-2"></i> React-Laravel CMS</h6>
                              <p className="text-muted">Organizational website with React frontend and Laravel backend.</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-credit-card text-danger mr-2"></i> Subscription Websites
                              </h6>
                              <p className="text-muted">Hosting, email marketing, and website builder solutions.</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-map-marker-alt text-info mr-2"></i> Pickup/Drop-off
                                Services</h6>
                              <p className="text-muted">Google Maps and distance algorithms for efficient logistics.</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-heart text-danger mr-2"></i> Matchmaking Solutions</h6>
                              <p className="text-muted">Personalized platforms for meaningful life partner connections.</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-shopping-cart text-primary mr-2"></i> E-commerce
                                Platforms</h6>
                              <p className="text-muted">Complete product and sales management for businesses.</p>
                            </div>
                          </div>
                        </div>
                        {/* Technical Expertise */}
                        <h5 className="mt-4">
                          <i className="fa fa-laptop-code text-success mr-2"></i> Technical Expertise
                        </h5>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-database text-primary mr-2"></i> Advanced Database
                                Systems</h6>
                              <p className="text-muted">Designing optimized, scalable, and efficient databases.</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-code-branch text-warning mr-2"></i> Version Control</h6>
                              <p className="text-muted">Leveraging GitHub for seamless application deployment and collaboration.
                              </p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-tasks text-danger mr-2"></i> Agile Project Management
                              </h6>
                              <p className="text-muted">Streamlining workflows with tools like Trello and Asana.</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-globe text-info mr-2"></i> Web Development</h6>
                              <p className="text-muted">Creating user-friendly, scalable, and high-performance web solutions.
                              </p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-plug text-secondary mr-2"></i> Technology Integration
                              </h6>
                              <p className="text-muted">Implementing modern technologies and third-party services.</p>
                            </div>
                          </div>
                        </div>
                        {/* Expertise & Solutions */}
                        <h5 className="mt-4">
                          <i className="fa fa-cogs text-primary mr-2"></i> Expertise & Solutions
                        </h5>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-globe text-success mr-2"></i> Comprehensive Platforms
                              </h6>
                              <p className="text-muted">Hosting platforms, blog builders, email marketing systems.</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-users text-warning mr-2"></i> Subscription & Membership
                                Websites</h6>
                              <p className="text-muted">Seamless, scalable, and user-friendly solutions.</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-lightbulb text-danger mr-2"></i> Innovative Solutions
                              </h6>
                              <p className="text-muted">Crypto investment platforms, Google Maps pickup/drop-off services,
                                employee wallet systems.</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-heart text-info mr-2"></i> Niche Applications</h6>
                              <p className="text-muted">Dating websites, leave management systems for employees.</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark"><i className="fa fa-comments text-secondary mr-2"></i> Social App
                                Development</h6>
                              <p className="text-muted">Interactive posts, community building, job boards, and appointment
                                scheduling.</p>
                            </div>
                          </div>
                        </div>
                        {/* Let's Connect Section */}
                        <div className="text-center mt-5">
                          <h4 className="font-weight-bold">
                            <i className="fa fa-handshake text-primary mr-2"></i> Let’s Connect
                          </h4>
                          <p className="text-muted">
                            Let's Connect and Create Something Extraordinary, Turning Vision into Scalable, High-Performance
                            Solutions!
                          </p>
                          <a href="#" className="btn btn-primary btn-lg mt-2">
                            <i className="fa fa-paper-plane mr-2"></i> Connect
                          </a>
                        </div>

                      </div> {/* Card Body */}
                    </div> {/* Card */}
                  </div> {/* Col */}
                </div> {/* Row */}
              </div>
              <div id="experience" className={`container tab-pane ${activeTab === "experience" ? "active" : "fade"}`}>
                  <h3 className="text-center fw-bold mt-4">Experience</h3>
                {/* Experience 1 */}
                  <div className="row justify-content-center mb-4">
                    <div className="col-md-10">
                      <div className="card shadow-lg p-4 rounded">
                        <div className="card-body">
                          <h5 className="card-title">
                            <i className="fa fa-briefcase text-primary mr-2"></i> Full-Stack Web Developer
                          </h5>
                          <h6 className="text-muted">
                            <i className="fa fa-building text-success mr-2"></i> Ingenuity Fintech Services Pvt Ltd
                          </h6>
                          <p className="text-muted">
                            <i className="fa fa-calendar text-warning mr-2"></i> Feb 2023 - Present
                          </p>
                          <p className="text-muted">
                            <i className="fa fa-map-marker text-danger mr-2"></i> Ahmedabad, Gujarat, India
                          </p>
                          <p>Design, develop, and maintain scalable web applications using Laravel, Vue.js, and React.
                            Expertise in API development, database management, and cloud deployment.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                {/* Experience 2 */}
                  <div className="row justify-content-center mb-4">
                    <div className="col-md-10">
                      <div className="card shadow-lg p-4 rounded">
                        <div className="card-body">
                          <h5 className="card-title">
                            <i className="fa fa-user text-primary mr-2"></i> Freelance Web Developer
                          </h5>
                          <h6 className="text-muted">
                            <i className="fa fa-building text-success mr-2"></i> Self-Employed
                          </h6>
                          <p className="text-muted">
                            <i className="fa fa-calendar text-warning mr-2"></i> Aug 2020 - Jan 2025
                          </p>
                          <p className="text-muted">
                            <i className="fa fa-map-marker text-danger mr-2"></i> Ahmedabad, Gujarat, India
                          </p>
                          <p>Developed custom web applications for various industries, specializing in Laravel, CodeIgniter,
                            and WordPress.
                            Integrated third-party APIs and built scalable business solutions.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                {/* Experience 3 */}
                  <div className="row justify-content-center">
                    <div className="col-md-10">
                      <div className="card shadow-lg p-4 rounded">
                        <div className="card-body">
                          <h5 className="card-title">
                            <i className="fa fa-code text-primary mr-2"></i> PHP Web Developer
                          </h5>
                          <h6 className="text-muted">
                            <i className="fa fa-building text-success mr-2"></i> Parshwa Technologies
                          </h6>
                          <p className="text-muted">
                            <i className="fa fa-calendar text-warning mr-2"></i> May 2016 - Aug 2020
                          </p>
                          <p className="text-muted">
                            <i className="fa fa-map-marker text-danger mr-2"></i> Ahmedabad, Gujarat, India
                          </p>
                          <p>Worked on building e-commerce platforms, CMS websites, and SaaS applications using PHP, MySQL,
                            and JavaScript.
                            Implemented Google Maps API and payment gateway integrations.</p>
                        </div>
                      </div>
                    </div>
                  </div>

              </div>
              <div id="education" className={`container tab-pane ${activeTab === "education" ? "active" : "fade"}`}>
                <h3 className="text-center fw-bold mt-4">Education</h3>
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="card shadow-lg p-4 rounded">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="fa fa-graduation-cap text-primary mr-2"></i> Bachelor of Computer Application
                        </h5>
                        <h6 className="text-muted">
                          <i className="fa fa-university text-success mr-2"></i> Saurashtra University
                        </h6>
                        <p className="text-muted">
                          <i className="fa fa-calendar text-warning mr-2"></i> 2012 - 2015
                        </p>
                        <p className="text-muted">
                          <i className="fa fa-map-marker text-danger mr-2"></i> Amreli, Gujarat, India
                        </p>
                        <p>Studied computer programming, database management, web development, and software engineering.
                          Gained hands-on experience with coding languages such as C, C++, PHP, c#, ASP.NET, Java, and
                          JavaScript.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
