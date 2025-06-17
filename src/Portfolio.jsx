import React, { useState }  from "react";


const projects = [
  {
    id: 1,
    title: "Social App Features",
    description: "Developed a full-featured social app using Laravel Livewire. Designed flowcharts and database structure from scratch. Users can create profiles, connect, join communities, post content, and interact via reactions, comments, shares, follows, and bookmarks. Also built messaging, news, and job board sections for a complete social experience.",
    image: "images/portfolio/SocialApp.png",
    role: "Full Stack Developer",
    TechStack: ['Laravel','API Integration','MySQL','JavaScript','Git']
  },
  {
    id: 2,
    title: "Subscribe for Builder and Hosting",
    description: "Developed a web builder and hosting platform where users can subscribe to create and manage websites with ease. As Senior PHP Developer, I built user-friendly tools to support CMS, eCommerce, and subscription-based sites. Integrated email marketing, hosting management, and content editing features. Delivered a seamless, scalable solution that simplified website creation and boosted user productivity.",
    image: "images/portfolio/Subscribe-Builder-Hosting.png",
    role: "Senior PHP Developer",
    TechStack: ['PHP','MySQL','Stripe','PayPal Integration','Asana','jQuery UI','Git']
  },
  {
    id: 3,
    title: "Pickup/Drop-off Services",
    description: "Pickup/Drop-off service platform with Google Maps integration. It enables live location tracking, smart alarms triggered by location, distance, or time, and notifications for journey start/stop. Includes attendance tracking to confirm presence. The system improved transport efficiency, enhanced safety, and simplified route and user management.I have Worked on Laravel API-based integration.",
    image: "images/portfolio/Pick-DropOff.png",
    role: "Full Stack Developer",
    TechStack: ['Laravel','REST API','MySQL','Google Maps API','JavaScript','Git']
  },
];
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("portfolio");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleViewProject = (project) => {    
    setSelectedProject(project);
    setShowModal(true);
    document.body.classList.add("modal-open");
  };
  const handleClosePopup = () => {    
    setShowModal(false);
    document.body.classList.remove("modal-open");
  };
  return (
    <div>
      {/* Header Section */}
      <header className="header text-center">
        <img
          src="images/user.png"
          alt="User Profile"
          className="profile-img mb-3"
        />
        <h2>Alpesh Bheda</h2>
        <p className="fw-600">
          Full-Stack PHP Developer | Laravel Expert | WordPress Specialist | AWS Enthusiast
        </p>
        <p>Contact: alpeshbheda.job@gmail.com | +91 6355176760</p>
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
                        <p>Explore a selection of my finest work—thoughtfully designed and expertly developed to reflect creativity, precision, and a commitment to building meaningful digital experiences.</p>
                        <div className="row">
                        {projects.map((project) => (
                            <div key={project.id} className="col-md-4 mb-3">
                              <div className="card h-100 shadow">
                                <img src={project.image} className="card-img-top" alt={project.title} />
                                <div className="card-body d-flex flex-column">
                                  <h5 className="card-title">{project.title}</h5>                                  
                                  <button
                                    className="btn btn-primary mt-auto"
                                    onClick={() => handleViewProject(project)}
                                  >
                                    View Project
                                  </button>
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
                          I am a full-stack developer with <strong>6+ years of experience</strong> in PHP, Laravel, Livewire, React, and cloud technologies. 
                          I specialize in building a wide range of web solutions, including <strong>hosting platforms, blog builders, 
                          email marketing systems, subscription-based websites, crypto investment portals, map-based pickup/drop services, employee wallets, 
                          dating sites, social apps, and custom tools like job boards and leave management systems</strong>.
                          My focus is on efficient backend logic, clean UI/UX, and performance optimization.
                        </p>
                        <p><i className="fa fa-phone text-success mr-2"></i> <strong>Mobile:</strong>&nbsp;+91 6355176760</p>
                        <p><i className="fa fa-envelope text-danger mr-2"></i> <strong>Email:</strong>&nbsp;alpeshbheda.job@gmail.com </p>
                        <p><i className="fa fa-linkedin text-info mr-2"></i> <strong>LinkedIn:</strong>&nbsp; 
                          <a href="https://www.linkedin.com/in/alpeshbheda-dev" target="_blank">www.linkedin.com/in/alpeshbheda-dev</a>
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

      {/* Footer Section */}
      <footer className="footer">
        <p>Contact: alpeshbheda.job@gmail.com | Phone: +91 6355176760</p>
        <p>&copy; 2025 Alpesh Bheda. All Rights Reserved.</p>
      </footer>
      
      {showModal && selectedProject && (
      <div className="modal show" id="myModal" style={{ display: 'block' }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">            
            <div className="modal-header">
              <h4 className="modal-title">{selectedProject.title}</h4>
              <button type="button" className="close"  onClick={() => handleClosePopup()}>&times;</button>
            </div>            
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h4 class="card-title">Project Involvement</h4>
                      <p className="card-text">{selectedProject.role}</p> 
                      <h4 class="card-title">About Project</h4>
                      <p className="card-text">{selectedProject.description}</p>  
                      <h4 class="card-title">Tech Stack & Key Deliverables</h4>
                      {selectedProject.TechStack.map((tech, index) => (
                          <span key={index} className="badge badge-dark p-2 my-1 mr-1">
                            {tech}
                          </span>                          
                        ))}                      
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="card">
                  <img src={selectedProject.image} className="card-img-top" alt={selectedProject.title} />
                  </div>
                </div>
                
              </div>
            </div>          
            

          </div>
        </div>
      </div>
      )}
      {showModal && <div className="modal-backdrop show"></div>}

    </div>
  );
};

export default Portfolio;
