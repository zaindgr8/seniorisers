"use client";
import Header from "../../components/Header";
import FooterWhite from "../../components/footer-white";
export default function AgentForm() {
  return (
    <>
      <Header />
      <div className="bg-primary newslatter position-relative  position-relative overflow-hidden">
        <div className="container p-4 mt-10  position-relative z-1">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize text-white">
                  Lets Get Started !
                </h2>

                <div className="sub-title fs-16 text-white">
                  Please enter your business name and address and type
                </div>
              </div>
            </div>
          </div>
          <form>
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="row g-4 align-items-end newslatter-form">
                  <div className=" space-y-8">
                    <div className="form-group">
                      <label className="text-white bg-primary fw-semibold">
                        business name
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        name={""}
                        value={""}
                        onChange={""}
                      />
                    </div>

                    <div className="form-group">
                      <label className="text-white bg-primary fw-semibold">
                        address
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        name={""}
                        value={""}
                        onChange={""}
                      />
                    </div>

                    <div className="form-group">
                      <label className="text-white bg-primary fw-semibold">
                        business type
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        name={""}
                        value={""}
                        onChange={""}
                      />
                    </div>
                  </div>

                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn text-white btn-lg btn-light "
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="py-4">
        <div className="align-items-center row mb-2">
          <div className="col-sm-auto copy">
            © 2023 Seniorisers - All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
}
