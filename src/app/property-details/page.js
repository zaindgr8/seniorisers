import Layout from "../../components/Layout";
import PopUpImageGallery from "../../components/magnific-pop-up-gallery1.js";
import PropertySticky from "../../components/property-sticky1";
import Link from "next/link";

export default function PropertyDetails() {
  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="breadcrumb-wrap border-0 py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <div className="col-auto">
                {/* Start Back To Search */}
                <Link
                  href="properties-list"
                  className="align-items-center d-flex fw-medium text-primary"
                >
                  <i className="fa-solid fa-chevron-left me-1" />
                  Back To Search
                </Link>
                {/* /. End Back To Search */}
              </div>
              <h4 className="border-start col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                New York , Old Home Villa
              </h4>
              <div className="border-start col-auto">
                <ol className="align-items-center breadcrumb fw-medium mb-0">
                  <li className="breadcrumb-item d-flex align-items-center">
                    <Link href="#" className="text-decoration-none">
                      <i className="fa-solid fa-house-chimney-crack fs-18" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item d-flex align-items-center">
                    <Link href="#" className="text-decoration-none">
                      Category
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item d-flex align-items-center active"
                    aria-current="page"
                  >
                    Community Centers
                  </li>
                </ol>
              </div>
            </div>
            {/* End Breadcrumbs */}
          </div>
        </div>
        {/* Start Masonry */}
        <div className="container">
          <PopUpImageGallery />
        </div>
        {/* /. End Masonry */}
        <PropertySticky />
        {/*Related Articles*/}
        <div className="border-top py-5">
          <div className="container py-4">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                {/* Start Section Header Title */}
                <div className="section-header text-center mb-5">
                  {/* Start Section Header title */}
                  <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                    More available Communmities
                  </h2>
                  {/* /.End Section Header Title */}
                  {/* Start Section Header Sub Title */}
                  <div className="sub-title fs-16">
                    Connect with the other communities centers in your area now
                    and provide them services.
                  </div>
                  {/* /.End Section Header Sub Title */}
                </div>
                {/*/. End Section Header */}
              </div>
            </div>
            <div className="row g-4">
              <div className="col-sm-6 col-md-6 col-xl-3 d-flex">
                {/* Start Card Property */}
                <div className="card border-0 shadow card-property rounded-3 w-100 flex-fill overflow-hidden">
                  {/* Start Card Link */}
                  <Link href="property-details" className="card-link" />
                  {/* /. End Card Link */}
                  {/* Start Property Image */}
                  <div className="property-img card-image-hover overflow-hidden">
                    <img
                      src="assets/img/properties/01.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  {/* /. End Property Image */}
                  <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                    {/* Start Card Property Price */}

                    {/* /. End Card Property Price */}
                    <h4 className="property-card-title mb-3">
                      Koh Samui, Thailand
                    </h4>
                    <div className="card-property-description mb-3">
                      37 Ambleside Gardens, Ilford, IG4
                    </div>
                    {/* Start Card Property Facilities */}

                    {/* /. End Card Property Facilities */}
                  </div>
                </div>
                {/* /. End Card Property */}
              </div>
              <div className="col-sm-6 col-md-6 col-xl-3 d-flex">
                {/* Start Card Property */}
                <div className="card border-0 shadow card-property rounded-3 w-100 flex-fill overflow-hidden">
                  {/* Start Card Link */}
                  <Link href="property-details" className="card-link" />
                  {/* /. End Card Link */}
                  {/* Start Property Image */}
                  <div className="property-img card-image-hover overflow-hidden">
                    <img
                      src="assets/img/properties/02.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  {/* /. End Property Image */}
                  <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                    {/* Start Card Property Price */}

                    {/* /. End Card Property Price */}
                    <h4 className="property-card-title mb-3">
                      Belle Mare, Mauritius
                    </h4>
                    <div className="card-property-description mb-3">
                      37 Ambleside Gardens, Ilford, IG4
                    </div>
                    {/* Start Card Property Facilities */}

                    {/* /. End Card Property Facilities */}
                  </div>
                </div>
                {/* /. End Card Property */}
              </div>
              <div className="col-sm-6 col-md-6 col-xl-3 d-flex">
                {/* Start Card Property */}
                <div className="card border-0 shadow card-property rounded-3 w-100 flex-fill overflow-hidden">
                  {/* Start Card Link */}
                  <Link href="property-details" className="card-link" />
                  {/* /. End Card Link */}
                  {/* Start Property Image */}
                  <div className="property-img card-image-hover overflow-hidden">
                    <img
                      src="assets/img/properties/03.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  {/* /. End Property Image */}
                  <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                    {/* Start Card Property Price */}

                    {/* /. End Card Property Price */}
                    <h4 className="property-card-title mb-3">
                      Balian Beach, Indonesia
                    </h4>
                    <div className="card-property-description mb-3">
                      37 Ambleside Gardens, Ilford, IG4
                    </div>
                    {/* Start Card Property Facilities */}

                    {/* /. End Card Property Facilities */}
                  </div>
                </div>
                {/* /. End Card Property */}
              </div>
              <div className="col-sm-6 col-md-6 col-xl-3 d-flex">
                {/* Start Card Property */}
                <div className="card border-0 shadow card-property rounded-3 w-100 flex-fill overflow-hidden">
                  {/* Start Card Link */}
                  <Link href="property-details" className="card-link" />
                  {/* /. End Card Link */}
                  {/* Start Property Image */}
                  <div className="property-img card-image-hover overflow-hidden">
                    <img
                      src="assets/img/properties/04.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  {/* /. End Property Image */}
                  <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                    {/* Start Card Property Price */}

                    {/* /. End Card Property Price */}
                    <h4 className="property-card-title mb-3">
                      Pantai Nyanyi, Indonesia
                    </h4>
                    <div className="card-property-description mb-3">
                      37 Ambleside Gardens, Ilford, IG4
                    </div>
                    {/* Start Card Property Facilities */}

                    {/* /. End Card Property Facilities */}
                  </div>
                </div>
                {/* /. End Card Property */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /. End Main Content */}
    </Layout>
  );
}
