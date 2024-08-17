import Header from "../components/Header";
import Carousel from "../components/corousel";
import FeaturesProperties from "../components/feature-properties";
import FooterWhite from "../components/footer-white";
import Dropdown from "../components/form-control-two";
import img1 from "../../public/assets/img/senior1.jpeg";
import img2 from "../../public/assets/img/senior2.jpeg";
import img3 from "../../public/assets/img/senior3.jpeg";
import SeniorLivingProfile from "./community/priv";
import Slideshow from "../components/slideshow";
import Link from "next/link";

export default function HomeTwo() {
  return (
    <>
      {/* <Header /> */}
      <SeniorLivingProfile />
      {/* Start Hero Header Two */}
      <div className="align-items-center d-flex hero-header hero-header__two overflow-hidden position-relative">
        <img
          src="assets/img/png-img/section-bg.png"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 top-0"
        />
        {/* Start Oblique */}
        <div className="">
          {/* <img
            src="assets/img/senior1.jpeg"
            alt=""
            className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0"
          /> */}
          <Slideshow className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0" />
        </div>

        {/* /.End Oblique */}
        <div className="container flex items-center justify-center position-relative">
          <div>
            <div>
              {/* <p class="title-sm">BEAT TRAFFIC JAMS AND CLINIC QUEUES.</p> */}
              <div className=" bg-blue-200 w-[35vh] font-bold text-blue-900 d-inline-block fw-medium mb-3 text-lg rounded-pill section-header__subtitle text-capitalize text-primary">
                Welcome To Senioriser
              </div>
              <h1 className="hero-header_title text-white fw-bold mb-5 text-5xl leading-[8vh]">
                Uniting Senior Communities, Services,
                <br className="d-none d-md-block" />
                and Providers.
              </h1>
              {/* Start Main Search Content */}
              <Dropdown />
              {/* /.End Main Search Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /.End Hero Header Two */}
      <div className="py-5 bg-gradient-primary">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  Verified Agents
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Meet Our Service Providers
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Verified, professional, and dedicated service providers to
                  <br className="d-none d-lg-block" /> enhancing your buying and
                  selling experience. Elevate your journey with us.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
              {/* Start Agent Card */}
              <div
                className="agent-card text-center"
                data-aos="fade"
                data-aos-delay={300}
              >
                <div className="avatar rounded-circle p-1 border border-primary">
                  {/* Start Avatar Image */}
                  <Link href="">
                    <img
                      src="assets/my_imgs/agent.jpg"
                      alt=""
                      className="avatar-img rounded-circle"
                    />
                    {/* <BsPersonBoundingBox className="avatar-img rounded-circle" /> */}
                  </Link>
                  {/* /.End Avatar Image */}
                  <div className="align-items-center avatar-badge bg-primary d-flex justify-content-center position-absolute rounded-circle text-white">
                    <i className="fas fa-medal" />
                  </div>
                </div>
                <h5 className="mt-3 mb-1">
                  <Link href="">Best Service Provider</Link>
                </h5>
                <div>At one click away!</div>
              </div>
              {/* /.End Agent Card */}
            </div>
          </div>
          {/* Start Button */}
          <button
            type="button"
            className="btn  btn-lg hstack border-1 border-blue-800 hover:border-blue-300 hover:text-blue-300 text-blue-800 mx-auto mt-5 gap-2"
            data-aos="fade-up"
          >
            <span>Browse More Agents</span>
            <span className="vr" />
            <i className="fa-arrow-right fa-solid fs-14" />
          </button>
          {/* /.End Button */}
        </div>
      </div>
      {/* Start Features Properties */}
      <FeaturesProperties />

      {/* /. End Features Properties */}
      {/* Start Articles Section */}
      <div className="py-5 border-top">
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  Blogs Section
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Latest articles & news
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  News section for an insightful journey into the most recent
                  <br className="d-none d-lg-block" />
                  and relevant updates. Stay informed with our curated content
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          <Carousel />
        </div>
      </div>
      {/* /. End Articles Section */}
      {/* Start Newslatter */}
      <div className=" bg-primary newslatter position-relative py-5 mx-3 mx-xl-5 rounded-4 position-relative overflow-hidden">
        <div className="container p-4 position-relative z-1">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                {/* Start Subtitle */}
                <div className="bg-white d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  Join the News Letter
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize text-white">
                  Want to join us?
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16 text-white">
                  Elevate your experience with our exclusive newsletter designed
                  just for you.
                  <br className="d-none d-lg-block" /> Join our community and
                  receive the latest updates.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="row g-4 align-items-end newslatter-form">
                <div className="col-sm">
                  {/* Start Form Group */}
                  <div className="form-group">
                    <label className="text-white bg-primary fw-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-transparent"
                    />
                  </div>
                  {/* /. End Form Group */}
                </div>
                <div className="col-sm">
                  {/* Start Form Group */}
                  <div className="form-group">
                    <label className="text-white bg-primary">Enter Email</label>
                    <input
                      type="email"
                      className="form-control bg-transparent"
                    />
                  </div>
                  {/* /. End Form Group */}
                </div>
                <div className="col-sm-auto">
                  {/* Start Button */}
                  <button
                    type="button"
                    className="btn text-white btn-lg btn-light w-100"
                  >
                    Join Now
                  </button>
                  {/* /. End Button */}
                </div>
              </div>
              {/* Start Text */}

              {/* /. End Text */}
            </div>
          </div>
        </div>
        {/* <div className="card-sketch">
          <img
            src="assets/img/png-img/grany.jpg"
            alt=""
            className="card-sketch-image"
          />
        </div> */}
      </div>
      {/* /.End Newslatter */}
      <FooterWhite />
    </>
  );
}
