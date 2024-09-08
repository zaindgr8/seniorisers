import Header from "../components/Header";
import Carousel from "../components/corousel";
import FeaturesProperties from "../components/feature-properties";
import FooterWhite from "../components/footer-white";

import SeniorLivingProfile from "./community/priv";
import Cpmuntydata from "./community/Cpmuntydata";
import Slideshow from "../components/slideshow";
import SponsorConnectionRequestForm from "../app/community/sposor";
import AgentProfileCard from "../components/AgentProfileCard";
import Link from "next/link";

export default function HomeTwo() {
  return (
    <>
      <Header />
      <SponsorConnectionRequestForm />
      <SeniorLivingProfile />
      <Cpmuntydata communityId={1} userauthId={1} />
      <div className="align-items-center d-flex hero-header hero-header__two overflow-hidden position-relative">
        <img
          src="assets/img/png-img/section-bg.png"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 top-0"
        />
        <Slideshow className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0" />
        <div className="container flex items-center justify-center position-relative">
          <div>
            <div>
              <div className=" bg-blue-200 w-[35vh] font-bold text-blue-900 d-inline-block fw-medium mb-3 text-lg rounded-pill section-header__subtitle text-capitalize text-primary">
                Welcome To Senioriser
              </div>
              <h1 className="hero-header_title text-white fw-bold mb-5 text-5xl leading-[8vh]">
                Uniting Senior Communities, Services,
                <br className="d-none d-md-block" />
                and Providers.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 bg-gradient-primary">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  Verified Agents
                </div>
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Meet Our Service Providers
                </h2>
                <div className="sub-title fs-16">
                  Verified, professional, and dedicated service providers to
                  <br className="d-none d-lg-block" /> enhancing your buying and
                  selling experience. Elevate your journey with us.
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <AgentProfileCard />
          </div>
          <button
            type="button"
            className="btn  btn-lg hstack border-1 border-blue-800 hover:border-blue-300 hover:text-blue-300 text-blue-800 mx-auto mt-5 gap-2"
            data-aos="fade-up"
          >
            <Link href={"/agent-list"}>
              <span>Browse More Agents</span>
            </Link>
            <span className="vr" />
            <i className="fa-arrow-right fa-solid fs-14" />
          </button>
        </div>
      </div>
      <FeaturesProperties />
      <div className="py-5 border-top">
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  Blogs Section
                </div>
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Latest articles & news
                </h2>
                <div className="sub-title fs-16">
                  News section for an insightful journey into the most recent
                  <br className="d-none d-lg-block" />
                  and relevant updates. Stay informed with our curated content.
                </div>
              </div>
            </div>
          </div>
          <Carousel />
        </div>
      </div>
      <div className="bg-primary newslatter position-relative py-5 mx-3 mx-xl-5 rounded-4 position-relative overflow-hidden">
        <div className="container p-4 position-relative z-1">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                <div className="bg-white d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  Join the News Letter
                </div>
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize text-white">
                  Want to join us?
                </h2>
                <div className="sub-title fs-16 text-white">
                  Elevate your experience with our exclusive newsletter designed
                  just for you.
                  <br className="d-none d-lg-block" /> Join our community and
                  receive the latest updates.
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="row g-4 align-items-end newslatter-form">
                <div className="col-sm">
                  <div className="form-group">
                    <label className="text-white bg-primary fw-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-transparent"
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-group">
                    <label className="text-white bg-primary">Enter Email</label>
                    <input
                      type="email"
                      className="form-control bg-transparent"
                    />
                  </div>
                </div>
                <div className="col-sm-auto">
                  <button
                    type="button"
                    className="btn text-white btn-lg btn-light w-100"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterWhite />
    </>
  );
}
