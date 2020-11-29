import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">
                Atsuko
              </a>
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search our Store "
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>

              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      Home <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Shop All
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Brands
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a class="dropdown-item" href="#">
                        Attack On Titan
                      </a>

                      <a class="dropdown-item" href="#">
                        Hunter x Hunter
                      </a>
                      <a class="dropdown-item" href="#">
                        My Hero Academia
                      </a>
                      <a class="dropdown-item" href="#">
                        Naruto
                      </a>
                      <a class="dropdown-item" href="#">
                        Tokyo Ghoul
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Clothing
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a class="dropdown-item" href="#">
                        T-Shirts
                      </a>
                      <a class="dropdown-item" href="#">
                        Long Sleeves
                      </a>
                      <a class="dropdown-item" href="#">
                        Shirts
                      </a>
                      <a class="dropdown-item" href="#">
                        Sweatshirts
                      </a>
                      <a class="dropdown-item" href="#">
                        Jackets
                      </a>
                      <a class="dropdown-item" href="#">
                        Pants
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;