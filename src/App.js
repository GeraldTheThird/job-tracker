import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="top-bar">
        <div className="left-group">
          <header className="hero-banner">
            <h1 className="hero-title">
              DevQuest
              <svg className="compass-icon">
                <path xmlns="http://www.w3.org/2000/svg" d="M22.912 8.758l-9.786 4.207c-0.177 0.090-0.32 0.233-0.411 0.411l-4.483 9.038c-0.184 0.36-0.117 0.798 0.166 1.087 0.181 0.184 0.426 0.282 0.673 0.282 0.139 0 0.279-0.030 0.41-0.094l9.554-3.968c0.175-0.084 0.32-0.221 0.413-0.391l4.715-9.278c0.201-0.363 0.141-0.813-0.145-1.111-0.288-0.298-0.737-0.371-1.105-0.184zM11.183 20.776l2.719-5.553 2.746 3.437zM18.272 17.488l-2.775-3.473 5.525-2.18zM16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032z" />
              </svg>
            </h1>
          </header>
          <div className="main-nav">
            <ul>
              <li>Home</li>
              <li>Company Reviews</li>
              <li>Find Salaries</li>
            </ul>
          </div>
        </div>
        <div className="right-group">
          <div className="menu-wrapper">
            <div className="icon-menu">
              <svg className="my-jobs-icon" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
              </svg>
              <span className="my-jobs-text">My Jobs</span>
            </div>
            <svg className="messages-icon" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clip-rule="evenodd" />
            </svg>
            <span className="messages-text">Messages</span>
            <div className="icon-menu">
              <svg className="notifications-icon" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
              </svg>
              <span className="notifications-text">Notifications</span>
            </div>
            <div className="icon-menu">
              <svg className="account-icon" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
              </svg>
              <span className="account-text">Account</span>
            </div>
            <div className="divider-line"></div>
            <div className="employers-menu">
              <span className="employers-link">Employers</span>
              <span className="slash-link">/</span>
              <div className="post-job-wrapper">
                <span className="post-link">Post</span>
                <span className="job-link">Job</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-section">
        <div className="search-box">
          <label className="input-label">What</label>
          <input
            type="text"
            placeholder="Job title, keywords, or company"
          />
        </div>
        <div className="search-box">
          <label className="input-label">Where</label>
          <input
            type="text"
            placeholder="Where"
          />
        </div>
        <button className="search-button">Find Jobs</button>
      </div>
      <div className="job-header">
        <h2 className="job-title">Web Developer – Entry Level</h2>
      </div>
      <div className="job-company">
        <a
          href="#"
          className="company-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hardin Design
          <svg
            className="external-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
      <div className="job-meta">
        <p>821 East Washington Avenue, Madison, WI 53703</p>
        <p>Hybrid work</p>
      </div>
      <div className="job-salary">$55,000 - $60,000 a year — Full-time</div>
      <section className="job-extra">
        <button className="copy-link-button">
          <svg className="copy-link-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
        </button>
      </section>
      <div className="location-section">
        <h2 className="location-title">Location</h2>
        <div className="location-items-column">
          <div className="commute-item">
            <svg className="commute-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
              <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
              <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
            <div className="commute-column">
              <h3 className="commute-title">Estimated commute</h3>
              <div className="commute-link">
                <span style={{ fontWeight: 400, color: "#525252", fontSize: "14px" }}>
                  <a className="address-text" href="#">Add your address</a> to estimate commute
                </span>
              </div>

            </div>
          </div>
          <div className="job-address-item">
            <svg className="job-address-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
            </svg>
            <div className="job-address-column">
              <h4 className="job-address-title">Job address</h4>
              <div class="job-address-only">821 East Washington Avenue, Madison, WI 53703</div>
            </div>
          </div>
        </div>
        <hr className="section-divider" />
      </div>
      <div className="benefits-section">
        <h2 className="benefits-title">Benefits</h2>
        <p className="benefits-subtext">Pulled from the full job description</p>
        <ul className="benefits-list">
          <li>Opportunities for advancement</li>
          <li>Visa sponsorship</li>
        </ul>
        <hr className="section-divider" />
      </div>
      <div className="job-description-section">
        <h2 className="job-description-title">Full job description</h2>
        <h3 className="job-description-subtitle">Company Description</h3>
        <p>
          At Hardin Design & Development, we are passionate about creating awesome software, web applications and mobile for our customers. We work with everyone, from startups to the Fortune 500 companies, and take the same degree of pride in our work no matter the client.
        </p>
        <p>
          Our designers create elegant, easy to use interfaces and our developers bring cutting edge expertise to our projects, with an eye for quality, security and bug-free code.
        </p>
        <p>
          We'd love for you to check out some of our favorite projects featured in our portfolio and read about how we've helped our clients accomplish their technology goals. Visit our website at <a href="http://www.hardindd.com" target="_blank" rel="noopener noreferrer">www.hardindd.com</a> and apply to join the Hardin Team today.
        </p>

        <h3 className="job-description-subtitle">Job Description</h3>
        <p>
          ON SITE ONLY. Our company is open to hybrid models and remote work with trusted long term employees, but new hires must start out working from our Madison office.
        </p>
        <p>
          This is an entry-level web developer position at Hardin Design & Development. The pay range for this role is between $55,000 to $60,000 annually.
        </p>
        <p>
          From the top down, our staff adapt quickly and confidently “wear a lot of hats”, and we highly value that in potential new team members. We believe strongly in choosing the right tool for the job, so our projects can vary widely in the tech stacks we use. We’re looking for individuals with diverse skill sets that share our passion for learning, growing, and making new things work.
        </p>
      </div>
    </div>
  );
}
export default App;
