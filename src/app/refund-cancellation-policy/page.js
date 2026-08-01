import Layout from "../../components/Layout";
import Link from "next/link";

export default function RefundCancellationPolicy() {
  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="border-bottom py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                Refund &amp; Cancellation Policy
              </h4>
              <div className="border-start col-auto">
                <ol className="align-items-center breadcrumb fw-medium mb-0">
                  <li className="breadcrumb-item d-flex align-items-center">
                    <Link href="/" className="text-decoration-none">
                      <i className="fa-solid fa-house-chimney-crack fs-18" />
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item d-flex align-items-center active"
                    aria-current="page"
                  >
                    Refund &amp; Cancellation Policy
                  </li>
                </ol>
              </div>
            </div>
            {/* End Breadcrumbs */}
          </div>
        </div>
        <div className="py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="cs-content">
                  <h1 className="bd-title">Refund &amp; Cancellation Policy</h1>
                  <p className="bd-lead fs-14 fst-italic">Last Updated: July 28, 2026</p>
                  <p>Seniorisers.com LLC is committed to providing quality digital services and maintaining transparent billing practices. This Refund &amp; Cancellation Policy explains how subscription cancellations and refund requests are handled.</p>
                  <p>By purchasing any subscription, advertising service, or digital product from Seniorisers.com, you agree to this Refund &amp; Cancellation Policy.</p>
                  <h2>1. Subscription Services</h2>
                  <p>Seniorisers.com provides digital subscription services, including but not limited to:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Premium directory listings</li>
                    <li>Business profile management</li>
                    <li>Digital marketing services</li>
                    <li>Community outreach opportunities</li>
                    <li>Banner advertising</li>
                    <li>Sponsored listings</li>
                    <li>Networking resources</li>
                    <li>Premium website features</li>
                    <li>Business development tools</li>
                  </ul>
                  <p>Services included vary depending on the subscription plan selected.</p>
                  <h2>2. Recurring Billing</h2>
                  <p>Subscriptions are billed automatically on either a monthly or annual basis, depending on the plan selected during checkout.</p>
                  <p>By purchasing a subscription, you authorize Seniorisers.com LLC and its payment processors to automatically charge your payment method on each renewal date until your subscription is cancelled.</p>
                  <h2>3. Cancellation Policy</h2>
                  <p>You may cancel your subscription at any time.</p>
                  <p>Cancellation requests may be submitted by:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Logging into your account and cancelling your subscription; or</li>
                    <li>Contacting our Customer Support team at support@seniorisers.com.</li>
                  </ul>
                  <p>To avoid your next recurring payment, cancellation requests must be received at least three (3) business days before your next scheduled billing date.</p>
                  <p>If a cancellation request is received after that time, the upcoming renewal may still be processed, and the cancellation will become effective at the end of the current billing period.</p>
                  <p>Cancellation stops future recurring billing but does not automatically entitle you to a refund for the current billing period.</p>
                  <h2>4. Refund Policy</h2>
                  <p>Customer satisfaction is important to us.</p>
                  <p>If you believe there is an issue with your subscription or purchased service, we encourage you to contact our Customer Support team promptly so we can review your concerns and work toward a resolution.</p>
                  <p>Refund requests are evaluated individually and may consider factors including:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>The type of service purchased</li>
                    <li>Services already delivered</li>
                    <li>Subscription usage</li>
                    <li>Timing of the request</li>
                    <li>Account history</li>
                    <li>Technical issues affecting service delivery</li>
                    <li>Applicable contractual obligations</li>
                  </ul>
                  <p>Refunds are not guaranteed and are issued at the sole discretion of Seniorisers.com LLC unless otherwise required by applicable law.</p>
                  <h2>5. Non-Refundable Services</h2>
                  <p>Unless otherwise required by law, the following are generally not eligible for refunds after they have been delivered or activated:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Active subscription periods</li>
                    <li>Completed advertising campaigns</li>
                    <li>Sponsored listings that have already been published</li>
                    <li>Banner advertising that has already been displayed</li>
                    <li>Services fully performed by the Company</li>
                    <li>Custom or personalized services requested by the customer</li>
                  </ul>
                  <h2>6. Billing Errors</h2>
                  <p>If you believe you were charged incorrectly or notice an unauthorized transaction, please notify us immediately at support@seniorisers.com.</p>
                  <p>We will promptly investigate the matter and, if appropriate, correct any verified billing error.</p>
                  <h2>7. Payment Disputes</h2>
                  <p>If you have any concerns regarding your payment or subscription, we ask that you contact our Customer Support team before initiating a dispute through your bank or credit card issuer.</p>
                  <p>Most billing concerns can be resolved quickly through our support process.</p>
                  <p>If a payment dispute is initiated, Seniorisers.com LLC reserves the right to provide relevant transaction records, customer communications, agreements, and other supporting documentation to the applicable financial institution or payment processor to assist in resolving the dispute.</p>
                  <p>Accounts associated with fraudulent payment activity or abuse of the dispute process may be suspended or terminated in accordance with our Terms and Conditions.</p>
                  <h2>8. Service Availability</h2>
                  <p>Most digital services are activated shortly after successful payment.</p>
                  <p>Certain services—including profile verification, directory listings, advertising approval, sponsored placements, or onboarding—may require manual review and may take between one (1) and five (5) business days to become available.</p>
                  <p>Activation times may vary depending on the specific service purchased.</p>
                  <h2>9. Contact Us</h2>
                  <p>If you have questions regarding cancellations, billing, or refund requests, please contact us:</p>
                  <p className="fw-semibold mb-1">Seniorisers.com LLC</p>
                  <p>100 S Broad Street, Suite 725</p>
                  <p>Philadelphia, PA 19110</p>
                  <p>United States</p>
                  <p>Email: support@seniorisers.com</p>
                  <p>Phone: (213) 685-4789</p>
                  <p>Website: https://seniorisers.com</p>
                  <p>Our Customer Support team will make reasonable efforts to respond to billing and refund inquiries as promptly as possible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /. End Main Content */}
    </Layout>
  );
}
