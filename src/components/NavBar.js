

import { Link } from "react-router-dom";
import { useEffect } from "react";

const NavBar = () => {
  const navStyle = { fontSize: "1.2rem" }; // Define larger font size

  // Close the navbar when a category is selected on mobile
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
    }
  };

  useEffect(() => {
    // Check if the screen size is mobile (less than or equal to 768px)
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768; // Adjust screen width as needed
      if (isMobile) {
        // Add event listener to close the navbar on mobile after a category is clicked
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
        navLinks.forEach(link => {
          link.addEventListener("click", closeNavbar);
        });

        // Cleanup event listeners on component unmount
        return () => {
          navLinks.forEach(link => {
            link.removeEventListener("click", closeNavbar);
          });
        };
      }
    };

    // Initial check on load
    handleResize();

    // Listen to window resize to adjust for mobile
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={navStyle}>
            DailyNews
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={navStyle}>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
