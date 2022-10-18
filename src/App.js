import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!">
              Start Bootstrap
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#!">
                        All Products
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn btn-outline-dark" type="submit">
                  <i class="bi-cart-fill me-1"></i>
                  Cart
                  <span class="badge bg-dark text-white ms-1 rounded-pill">
                    0
                  </span>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <section className="bg-dark py-4">
        <div className="text-center py-5 m-2">
          <h1 className="display-3 fw-bold text-light">Shop in style</h1>
          <h4 className="text-secondary">With this shop homepage template</h4>
        </div>
      </section>
      {/* <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style="top: 0.5rem; right: 0.5rem"
                >
                  Sale
                </div>

                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Special Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <span class="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style="top: 0.5rem; right: 0.5rem"
                >
                  Sale
                </div>

                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Sale Item</h5>
                    <span class="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Popular Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    $40.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style="top: 0.5rem; right: 0.5rem"
                >
                  Sale
                </div>

                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Sale Item</h5>
                    <span class="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Fancy Product</h5>
                    $120.00 - $280.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style="top: 0.5rem; right: 0.5rem"
                >
                  Sale
                </div>

                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Special Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <span class="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Popular Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    $40.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-lg-5 row-cols-2 row-cols-md-3 row-cold-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt=""
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bol">Fancy Product</h5>
                    <p>$40.00 - $80.00</p>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <div
                  id="badge"
                  class="badge bg-dark text-white position-absolute"
                >
                  Sale
                </div>
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt=""
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bol">Special Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <p className="text-decoration-line-through px-2 text-muted">
                        $20.00
                      </p>
                      <p>$18.00</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <div
                  id="badge"
                  class="badge bg-dark text-white position-absolute"
                >
                  Sale
                </div>
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt=""
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bol">Fancy Product</h5>
                    <p>$40.00 - $80.00</p>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt=""
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bol">Popullar Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <p>$40.00</p>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <div
                  id="badge"
                  class="badge bg-dark text-white position-absolute"
                >
                  Sale
                </div>
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt=""
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bol">Fancy Product</h5>
                    <div className="d-flex justify-content-center">
                      <p className="text-decoration-line-through px-2 text-muted">
                        $50.00
                      </p>
                      <p>$25.00</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt=""
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bol">Fancy Product</h5>
                    <p>$40.00 - $80.00</p>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div
                  id="badge"
                  class="badge bg-dark text-white position-absolute"
                >
                  Sale
                </div>
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt=""
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bol">Special Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <p className="text-decoration-line-through px-2 text-muted">
                        $20.00
                      </p>
                      <p>$18.00</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt=""
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bol">Special Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>

                    <p>$18.00</p>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="bg-dark text-center p-5">
          <p className="lead text-light">Copyright © Your Website 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
