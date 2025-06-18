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
              <div id="portfolio" className={`tab-pane ${activeTab === "portfolio" ? "active" : "fade"}`}>
                <br />
                <div className="row justify-content-center my-5">
                  <div className="col-md-12">
                    <div className="card shadow-lg p-4 rounded">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="fa fa-briefcase text-primary mr-2"></i> Project Portfolio
                        </h5>
                        <p className="text-justify">Explore a selection of my finest work—thoughtfully designed and expertly developed to reflect creativity, precision, and a commitment to building meaningful digital experiences.</p>
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
              <div id="about" className={`tab-pane ${activeTab === "about" ? "active" : "fade"}`}>
                
                <div className="row justify-content-center my-5">
                  <div className="col-md-12">
                    <div className="card shadow-lg p-4 rounded">
                      <div className="card-body">
                        {/* About Me */}
                        <h5 className="card-title">
                          <i className="fa fa-user text-primary mr-2"></i> About Me
                        </h5>
                        
                        <div class="d-flex flex-wrap">
                          <div class="p-2 flex-fill"><p><i className="fa fa-phone text-success mr-2"></i>&nbsp;+91 6355176760</p></div>
                          <div class="p-2 flex-fill"><p><i className="fa fa-envelope text-danger mr-2"></i>&nbsp;alpeshbheda.job@gmail.com </p></div>
                          <div class="p-2 flex-fill"><p><i className="fa fa-linkedin text-info mr-2"></i>&nbsp; 
                            <a href="https://www.linkedin.com/in/alpeshbheda-dev" target="_blank">linkedin.com/in/alpeshbheda-dev</a>
                          </p></div>
                        </div>
                                              
                        <p className="text-justify">
                          I am a full-stack developer with <strong>6+ years of experience</strong> in PHP, Laravel, Livewire, React, and cloud technologies. 
                          I specialize in building a wide range of web solutions, including <strong>hosting platforms, blog builders, 
                          email marketing systems, subscription-based websites, crypto investment portals, map-based pickup/drop services, employee wallets, 
                          dating sites, social apps, and custom tools like job boards and leave management systems</strong>.
                          My focus is on efficient backend logic, clean UI/UX, and performance optimization.
                        </p>
                                                                       
                        {/* Tech Stack & Expertise */}
                        <h5 className="mt-4">
                          <i className="fa fa-cogs text-primary mr-2"></i> Tech Stack & Expertise
                        </h5>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-server text-success mr-2"></i> Backend Development
                              </h6>
                              <p className="text-muted">Laravel, CodeIgniter, WordPress, PHP</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-desktop text-warning mr-2"></i> Frontend Development
                              </h6>
                              <p className="text-muted">HTML, CSS, JavaScript, React, jQuery, Responsive Design</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-plug text-danger mr-2"></i> API Development
                              </h6>
                              <p className="text-muted">REST APIs, Third-Party Integrations</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-credit-card text-info mr-2"></i> Payment Gateways
                              </h6>
                              <p className="text-muted">PayPal, Stripe, Razorpay</p>
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-cloud text-primary mr-2"></i> Cloud Services
                              </h6>
                              <p className="text-muted">AWS (S3, Lambda, EC2), Google Services (Maps, reCaptcha)</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-database text-success mr-2"></i> Database
                              </h6>
                              <p className="text-muted">MySQL with advanced database design principles</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-code-branch text-warning mr-2"></i> Version Control
                              </h6>
                              <p className="text-muted">GitHub for source control and collaboration</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-tasks text-danger mr-2"></i> Task Management
                              </h6>
                              <p className="text-muted">Trello, Asana for team collaboration and project tracking</p>
                            </div>
                          </div>
                        </div>

                        {/* What I Offer */}
                        <h5 className="mt-4">
                          <i className="fa fa-briefcase text-primary mr-2"></i> What I Offer
                        </h5>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-code text-success mr-2"></i> Custom Web Applications
                              </h6>
                              <p className="text-muted">Custom web application development tailored to your unique business needs.</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-plug text-warning mr-2"></i> API & Integration
                              </h6>
                              <p className="text-muted">Robust API development and seamless third-party service integration.</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-desktop text-danger mr-2"></i> Frontend Development
                              </h6>
                              <p className="text-muted">Modern and responsive UI/UX for smooth user experiences on all devices.</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-tools text-info mr-2"></i> Code Quality & Architecture
                              </h6>
                              <p className="text-muted">Clean, optimized code built on scalable and maintainable architecture.</p>
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-sync text-primary mr-2"></i> Maintenance & Updates
                              </h6>
                              <p className="text-muted">Ongoing maintenance, updates, and improvements for existing applications.</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-bug text-success mr-2"></i> Bug Fixing & Performance
                              </h6>
                              <p className="text-muted">Quick bug fixes and performance enhancements for better system reliability.</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-layer-group text-warning mr-2"></i> Platform Solutions
                              </h6>
                              <p className="text-muted">Solutions for subscription-based, eCommerce, niche, tools, and service platforms.</p>
                            </div>
                          </div>
                        </div>

                        {/* Why Choose Me? */}
                        <h5 className="mt-4">
                          <i className="fa fa-star text-primary mr-2"></i> Why Choose Me?
                        </h5>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-code text-success mr-2"></i> Clean & Scalable Code
                              </h6>
                              <p className="text-muted">Strong attention to detail with clean, maintainable, and scalable code structure.</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-comments text-warning mr-2"></i> Clear Communication
                              </h6>
                              <p className="text-muted">Dedicated to clear, consistent, and professional communication throughout the project.</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-tools text-danger mr-2"></i> Troubleshooting & Optimization
                              </h6>
                              <p className="text-muted">Proficient in debugging issues and optimizing existing codebases for better performance.</p>
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-users text-info mr-2"></i> Team & Independent Work
                              </h6>
                              <p className="text-muted">Experienced in working independently or collaboratively with diverse teams.</p>
                            </div>
                            <div className="card shadow-sm p-3 mb-2">
                              <h6 className="text-dark">
                                <i className="fa fa-check-circle text-primary mr-2"></i> Quality & Timely Delivery
                              </h6>
                              <p className="text-muted">Committed to delivering reliable, high-quality solutions on time and with confidence.</p>
                            </div>
                          </div>
                        </div>
                                                    
                        {/* Let's Connect Section */}
                        <div className="text-center mt-5">
                          <h4 className="font-weight-bold">
                            <i className="fa fa-handshake text-primary mr-2"></i> Let’s Connect
                          </h4>
                          <p className="text-muted">
                          Let’s create something extraordinary by turning your vision into scalable, high-performance solutions
                          </p><p className="text-muted">Feel free to reach out — I’m happy to discuss your project and how I can help
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
              <div id="experience" className={`tab-pane ${activeTab === "experience" ? "active" : "fade"}`}>
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
                            <i className="fa fa-calendar text-warning mr-2"></i> February 2023 - Present
                          </p>
                          <p className="text-muted">
                            <i className="fa fa-map-marker text-danger mr-2"></i> Ahmedabad, Gujarat, India
                          </p>
                          <p className="text-justify">Developed full-stack web apps using Laravel, PHP, React, and Livewire
                            Integrated APIs, payment gateways, and Google Maps services
                            Created responsive UI with modern frontend technologies
                            Optimized performance and fixed bugs in existing systems
                            Worked independently and with remote teams using Git, Trello, Asana.</p>
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
                            <i className="fa fa-calendar text-warning mr-2"></i> August 2020 - January 2025
                          </p>
                          <p className="text-muted">
                            <i className="fa fa-map-marker text-danger mr-2"></i> Ahmedabad, Gujarat, India
                          </p>
                          <p className="text-justify">Delivered custom web solutions for clients across various industries
                              Built and maintained websites using Laravel, WordPress, and React
                              Implemented features like subscriptions, booking systems, and user dashboards
                              Ensured clean code, responsive design, and smooth user experience
                              Provided ongoing support, updates, and performance improvements</p>         
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
                            <i className="fa fa-calendar text-warning mr-2"></i> May 2016 - August 2020
                          </p>
                          <p className="text-muted">
                            <i className="fa fa-map-marker text-danger mr-2"></i> Ahmedabad, Gujarat, India
                          </p>
                          <p className="text-justify">This is where I started my developing career.
                            Here I worked on building CMS websites , e-commerce platforms, and SaaS applications using PHP, MySQL and JavaScript. Implemented Google Maps API and payment gateway integration.</p>
                        </div>
                      </div>
                    </div>
                  </div>

              </div>
              <div id="education" className={`tab-pane ${activeTab === "education" ? "active" : "fade"}`}>
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
                  <img src={selectedProject.image} className="card-img-top" alt={selectedProject.title} />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h4 class="card-title">Project Involvement</h4>
                      <p className="card-text">{selectedProject.role}</p> 
                      <h4 class="card-title">About Project</h4>
                      <p className="card-text text-justify">{selectedProject.description}</p>  
                      <h4 class="card-title">Tech Stack & Key Deliverables</h4>
                      {selectedProject.TechStack.map((tech, index) => (
                          <span key={index} className="badge badge-dark p-2 my-1 mr-1">
                            {tech}
                          </span>                          
                        ))}                      
                    </div>
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
