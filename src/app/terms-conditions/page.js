import Layout from "../../components/Layout";
import Link from "next/link";

export default function TermsAndCondition() {
  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="border-bottom py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                Terms &amp; conditions
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
                    Terms &amp; conditions
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
                  <h1 className="bd-title">Terms and Conditions</h1>
                  <p className="bd-lead fs-14 fst-italic">Last Updated: July 28, 2026</p>
                  <p>Please read these Terms and Conditions carefully before accessing or using the Services provided by Seniorisers.com LLC ("Company," "we," "our," or "us"). By accessing our Website, creating an account, purchasing a subscription, or using any of our Services, you agree to be bound by these Terms and Conditions.</p>
                  <h2>1. Interpretation and Definitions</h2>
                  <h3>Definitions</h3>
                  <p>For the purposes of these Terms and Conditions:</p>
                  <p>Company means Seniorisers.com LLC, Philadelphia, Pennsylvania 19102, United States.</p>
                  <p>Website means Seniorisers.com and all affiliated webpages and subdomains operated by the Company.</p>
                  <p>Service means all products, digital services, subscriptions, advertising services, directory listings, provider networking services, community outreach services, premium features, software tools, and related functionality offered through the Website.</p>
                  <p>Account means a registered user account created to access portions of the Service.</p>
                  <p>Subscription means any recurring paid membership purchased through the Website.</p>
                  <p>Goods means digital advertising placements, sponsored listings, banner advertisements, and other digital products offered by the Company.</p>
                  <p>Order means a customer's purchase of Goods or Services.</p>
                  <p>User, You, or Your refers to the individual or legal entity accessing or using the Services.</p>
                  <h2>2. Acceptance of Terms</h2>
                  <p>By accessing or using our Website, creating an account, or purchasing any Service, you acknowledge that:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>You have read and understood these Terms.</li>
                    <li>You agree to be legally bound by them.</li>
                    <li>You are at least eighteen (18) years old.</li>
                    <li>You have the legal authority to enter into this agreement.</li>
                  </ul>
                  <p>If you do not agree with these Terms, you may not access or use our Services.</p>
                  <h2>3. Description of Services</h2>
                  <p>Seniorisers.com provides digital marketing and networking services for senior living communities, healthcare providers, and related businesses.</p>
                  <p>Depending on the subscription selected, Services may include:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Premium business directory listings</li>
                    <li>Provider profile management</li>
                    <li>Community outreach opportunities</li>
                    <li>Digital marketing exposure</li>
                    <li>Banner advertising</li>
                    <li>Sponsored listings</li>
                    <li>Networking opportunities</li>
                    <li>Business development resources</li>
                    <li>Customer support</li>
                    <li>Additional premium website features</li>
                  </ul>
                  <p>Services vary by subscription plan.</p>
                  <p>The Company does not guarantee referrals, customer acquisition, occupancy increases, lead volume, revenue generation, or any specific business outcome.</p>
                  <h2>4. Account Registration</h2>
                  <p>You agree to:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Provide accurate and complete information.</li>
                    <li>Keep your account information current.</li>
                    <li>Maintain the confidentiality of your login credentials.</li>
                    <li>Notify us immediately of unauthorized account activity.</li>
                  </ul>
                  <p>You are responsible for all activity occurring under your account.</p>
                  <h2>5. Subscription Plans and Billing</h2>
                  <p>Subscriptions are billed on either:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Monthly recurring billing; or</li>
                    <li>Annual recurring billing,</li>
                  </ul>
                  <p>depending on the plan selected during checkout.</p>
                  <p>Recurring billing begins on the date payment is successfully processed.</p>
                  <p>Subscription fees are charged automatically using your payment method until your subscription is cancelled.</p>
                  <p>Prices are subject to change upon advance notice where required by law.</p>
                  <h2>6. Payment Authorization</h2>
                  <p>By submitting your payment information, you authorize Seniorisers.com LLC and its payment processors to charge your selected payment method for:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Initial purchases</li>
                    <li>Recurring subscription charges</li>
                    <li>Applicable taxes</li>
                    <li>Approved upgrades or add-on services</li>
                  </ul>
                  <p>You certify that you are authorized to use the payment method provided.</p>
                  <h2>7. Automatic Renewal</h2>
                  <p>Unless cancelled before your next billing cycle, your subscription will automatically renew using your payment method on file.</p>
                  <p>By purchasing a subscription, you expressly authorize recurring charges until cancellation.</p>
                  <h2>8. Cancellation Policy</h2>
                  <p>You may cancel your subscription at any time through your account dashboard or by contacting our support team.</p>
                  <p>To avoid the next recurring charge, cancellation requests must be received at least three (3) business days before your next billing date.</p>
                  <p>Cancellation prevents future recurring charges.</p>
                  <p>Cancellation does not automatically entitle you to a refund for the current billing period or previously paid fees.</p>
                  <h2>9. Refund Policy</h2>
                  <p>We are committed to providing quality service and resolving customer concerns promptly.</p>
                  <p>If you are dissatisfied with any aspect of our Services, we encourage you to contact our Customer Support team so we can attempt to resolve the matter.</p>
                  <p>Refund requests are reviewed individually based on factors including:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Services already delivered</li>
                    <li>Account activity</li>
                    <li>Subscription usage</li>
                    <li>Timing of the request</li>
                    <li>Applicable contractual obligations</li>
                    <li>Other relevant circumstances</li>
                  </ul>
                  <p>Refunds are not guaranteed and are issued solely at the Company's discretion unless otherwise required by applicable law.</p>
                  <h2>10. Payment Disputes</h2>
                  <p>If you believe a billing error has occurred, you agree to contact our Customer Support team before initiating a dispute with your financial institution.</p>
                  <p>We are committed to resolving legitimate billing concerns promptly and fairly.</p>
                  <p>The Company reserves the right to suspend or terminate accounts involved in fraudulent payment activity, abuse of the dispute process, or violations of these Terms.</p>
                  <p>The Company may respond to payment disputes by providing transaction records, customer communications, agreements, and other supporting documentation to the applicable payment processor or financial institution.</p>
                  <h2>11. Service Delivery</h2>
                  <p>Most digital services are activated immediately after successful payment.</p>
                  <p>Some Services—including profile verification, advertising approval, directory listings, sponsored placements, or onboarding—may require manual review and may take between one (1) and five (5) business days.</p>
                  <p>Delivery times may vary depending on the nature of the purchased Service.</p>
                  <h2>12. Advertising Services</h2>
                  <p>Users purchasing advertising or banner placements agree that:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>All advertising content must comply with applicable laws.</li>
                    <li>Advertisements may not contain offensive, deceptive, unlawful, defamatory, or inappropriate material.</li>
                    <li>Banner placements remain active for the purchased duration.</li>
                    <li>Performance varies based on numerous factors outside the Company's control.</li>
                  </ul>
                  <p>The Company does not guarantee:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Impressions</li>
                    <li>Click-through rates</li>
                    <li>Leads</li>
                    <li>Referrals</li>
                    <li>Revenue</li>
                    <li>Sales</li>
                    <li>Business growth</li>
                  </ul>
                  <p>Advertising performance alone does not qualify for a refund.</p>
                  <p>The Company reserves the right to reject or remove advertising that violates these Terms.</p>
                  <h2>13. Marketplace Listings</h2>
                  <p>Businesses are solely responsible for:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Their listings</li>
                    <li>Promotional offers</li>
                    <li>Pricing</li>
                    <li>Incentives</li>
                    <li>Discounts</li>
                    <li>Business information</li>
                    <li>Claims made within their listings</li>
                  </ul>
                  <p>Users represent that all information they publish is truthful, current, and not misleading.</p>
                  <p>The Company may suspend or remove listings that violate these standards.</p>
                  <h2>14. User Conduct</h2>
                  <p>Users may not:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Use abusive or threatening language.</li>
                    <li>Harass Company personnel or other users.</li>
                    <li>Submit false information.</li>
                    <li>Upload unlawful material.</li>
                    <li>Interfere with Website operations.</li>
                    <li>Attempt unauthorized access.</li>
                    <li>Engage in fraudulent activity.</li>
                  </ul>
                  <p>The Company may suspend or terminate accounts violating these Terms.</p>
                  <h2>15. Intellectual Property</h2>
                  <p>All Website content, including but not limited to:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Logos</li>
                    <li>Graphics</li>
                    <li>Software</li>
                    <li>Text</li>
                    <li>Databases</li>
                    <li>Designs</li>
                    <li>Images</li>
                    <li>Trademarks</li>
                  </ul>
                  <p>are the exclusive property of Seniorisers.com LLC or its licensors and are protected by applicable intellectual property laws.</p>
                  <p>No content may be copied, reproduced, distributed, or modified without prior written permission.</p>
                  <h2>16. Privacy</h2>
                  <p>Your use of our Services is also governed by our{" "}
                    <Link href="/privacy-policy">Privacy Policy</Link>.
                  </p>
                  <p>By using the Website, you consent to the collection, use, and storage of information as described in our Privacy Policy.</p>
                  <h2>17. Limitation of Liability</h2>
                  <p>To the fullest extent permitted by law, Seniorisers.com LLC shall not be liable for any indirect, incidental, consequential, punitive, special, or exemplary damages arising from the use of the Website or Services.</p>
                  <p>The Company's total liability for any claim shall not exceed the total amount paid by the customer to the Company during the twelve (12) months immediately preceding the event giving rise to the claim.</p>
                  <p>Some jurisdictions do not permit certain limitations of liability; therefore, portions of this section may not apply where prohibited by law.</p>
                  <h2>18. Indemnification</h2>
                  <p>You agree to indemnify, defend, and hold harmless Seniorisers.com LLC, its officers, employees, contractors, affiliates, and agents from any claims, damages, liabilities, costs, and expenses arising from:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Your use of the Services;</li>
                    <li>Your violation of these Terms;</li>
                    <li>Your published content;</li>
                    <li>Your advertisements;</li>
                    <li>Your infringement of another party's rights.</li>
                  </ul>
                  <h2>19. Force Majeure</h2>
                  <p>The Company shall not be liable for delays or failures caused by events beyond its reasonable control, including natural disasters, acts of government, internet outages, cyberattacks, labor disputes, pandemics, utility failures, or other unforeseen events.</p>
                  <h2>20. Governing Law</h2>
                  <p>These Terms shall be governed by the laws of the Commonwealth of Pennsylvania, United States, without regard to conflict of law principles.</p>
                  <p>Any disputes shall be brought in the appropriate state or federal courts located within Pennsylvania unless otherwise required by applicable law.</p>
                  <h2>21. Severability</h2>
                  <p>If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.</p>
                  <h2>22. No Waiver</h2>
                  <p>Failure by the Company to enforce any provision of these Terms shall not constitute a waiver of any future enforcement of that provision or any other provision.</p>
                  <h2>23. Entire Agreement</h2>
                  <p>These Terms and Conditions, together with our Privacy Policy and any additional policies referenced herein, constitute the entire agreement between you and Seniorisers.com LLC concerning your use of the Services and supersede all prior agreements or understandings.</p>
                  <h2>24. Changes to These Terms</h2>
                  <p>We may modify these Terms at any time.</p>
                  <p>Updated versions will be posted on the Website with a revised "Last Updated" date.</p>
                  <p>Continued use of the Services after changes become effective constitutes acceptance of the updated Terms.</p>
                  <h2>25. Contact Information</h2>
                  <p>Seniorisers.com LLC</p>
                  <p>Website: https://seniorisers.com</p>
                  <p>Email: support@seniorisers.com</p>
                  <p>Phone: (213) 685-4789</p>
                  <p>Mailing Address:</p>
                  <p>100 S Broad Street, Suite 725</p>
                  <p>Philadelphia, PA 19110</p>
                  <p>United States</p>
                  <p>Questions regarding these Terms may be directed to our Customer Support team using the contact information above.</p>
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
