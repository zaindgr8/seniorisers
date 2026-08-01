import Layout from "../../components/Layout";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="border-bottom py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                Privacy Policy
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
                    Privacy Policy
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
                  <h1 className="bd-title">Privacy Policy</h1>
                  <p className="bd-lead fs-14 fst-italic">Last Updated: July 28, 2026</p>
                  <p>Seniorisers.com LLC ("Seniorisers," "Company," "we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, store, and protect your information when you visit https://seniorisers.com, create an account, purchase a subscription, or otherwise use our Services.</p>
                  <p>By using our Website or Services, you consent to the practices described in this Privacy Policy.</p>
                  <h2>1. Company Information</h2>
                  <p className="fw-semibold mb-1">Seniorisers.com LLC</p>
                  <p>100 S Broad Street, Suite 725</p>
                  <p>Philadelphia, PA 19110</p>
                  <p>United States</p>
                  <p>Website: https://seniorisers.com</p>
                  <p>Email: support@seniorisers.com</p>
                  <p>Phone: (213) 685-4789</p>
                  <h2>2. Information We Collect</h2>
                  <p>We may collect the following categories of information:</p>
                  <h3>Personal Information</h3>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Full name</li>
                    <li>Company or organization name</li>
                    <li>Email address</li>
                    <li>Telephone number</li>
                    <li>Mailing address</li>
                    <li>Billing address</li>
                    <li>Account login credentials</li>
                    <li>Profile information</li>
                    <li>Business information you choose to publish</li>
                  </ul>
                  <h3>Payment Information</h3>
                  <p>Payments are processed through secure third-party payment processors.</p>
                  <p>Seniorisers.com LLC does not store complete credit card numbers, debit card numbers, or other sensitive payment credentials on our servers.</p>
                  <p>Our payment processors securely collect and process payment information in accordance with applicable payment industry standards.</p>
                  <h3>Account Information</h3>
                  <p>When you register for an account, we may collect:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Username</li>
                    <li>Password (encrypted)</li>
                    <li>Subscription information</li>
                    <li>Purchase history</li>
                    <li>Billing history</li>
                    <li>Customer support communications</li>
                  </ul>
                  <h3>Usage Information</h3>
                  <p>We automatically collect information including:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device type</li>
                    <li>Operating system</li>
                    <li>Pages visited</li>
                    <li>Referral URLs</li>
                    <li>Date and time of access</li>
                    <li>Session duration</li>
                    <li>Website activity</li>
                  </ul>
                  <h2>3. Cookies and Tracking Technologies</h2>
                  <p>Our Website uses cookies and similar technologies to:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Keep you signed in</li>
                    <li>Remember user preferences</li>
                    <li>Improve Website functionality</li>
                    <li>Analyze Website traffic</li>
                    <li>Measure advertising effectiveness</li>
                    <li>Improve user experience</li>
                  </ul>
                  <p>You may disable cookies through your browser settings; however, certain features of the Website may not function properly.</p>
                  <h2>4. How We Use Your Information</h2>
                  <p>We use your information to:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Provide and maintain our Services</li>
                    <li>Create and manage your account</li>
                    <li>Process subscription payments</li>
                    <li>Deliver purchased services</li>
                    <li>Provide customer support</li>
                    <li>Respond to inquiries</li>
                    <li>Verify user identity</li>
                    <li>Improve our Website</li>
                    <li>Analyze Website performance</li>
                    <li>Detect fraud or unauthorized activity</li>
                    <li>Comply with legal obligations</li>
                    <li>Send important account notifications</li>
                    <li>Send service announcements</li>
                    <li>Send promotional communications where permitted by law</li>
                  </ul>
                  <h2>5. Marketing Communications</h2>
                  <p>If you subscribe to our mailing list or become a customer, we may occasionally send newsletters, promotional emails, product updates, or special offers.</p>
                  <p>You may opt out of promotional communications at any time by:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Clicking the "Unsubscribe" link in any marketing email; or</li>
                    <li>Contacting us at support@seniorisers.com.</li>
                  </ul>
                  <p>Please note that even if you opt out of marketing communications, we may still send important service-related or billing notifications.</p>
                  <h2>6. How We Share Information</h2>
                  <p>We do not sell your personal information.</p>
                  <p>We may share your information only when necessary with:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Payment processors</li>
                    <li>Website hosting providers</li>
                    <li>Cloud service providers</li>
                    <li>Customer support platforms</li>
                    <li>Email service providers</li>
                    <li>Analytics providers</li>
                    <li>Professional advisors</li>
                    <li>Government authorities when legally required</li>
                    <li>Law enforcement when required by applicable law</li>
                  </ul>
                  <p>Each third-party service provider is permitted to use your information only as necessary to perform services on our behalf.</p>
                  <h2>7. Payment Processing</h2>
                  <p>Payments made through our Website are securely processed by third-party payment processors.</p>
                  <p>These providers are responsible for securely handling payment information in accordance with applicable payment security standards.</p>
                  <p>Seniorisers.com LLC does not store complete payment card information.</p>
                  <h2>8. Data Retention</h2>
                  <p>We retain personal information only for as long as reasonably necessary to:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Provide our Services</li>
                    <li>Maintain customer accounts</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes</li>
                    <li>Enforce our agreements</li>
                    <li>Maintain financial and business records</li>
                  </ul>
                  <p>When information is no longer required, it is securely deleted or anonymized where reasonably practicable.</p>
                  <h2>9. Data Security</h2>
                  <p>We implement commercially reasonable administrative, technical, and organizational safeguards designed to protect your personal information.</p>
                  <p>While we strive to protect your information, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
                  <h2>10. Your Privacy Rights</h2>
                  <p>Subject to applicable law, you may request to:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Update your account information</li>
                    <li>Delete your personal information</li>
                    <li>Close your account</li>
                    <li>Withdraw marketing consent</li>
                  </ul>
                  <p>Certain information may be retained where required by law or necessary for legitimate business purposes.</p>
                  <p>Requests may be submitted to support@seniorisers.com.</p>
                  <h2>11. Children's Privacy</h2>
                  <p>Our Services are intended solely for individuals eighteen (18) years of age or older.</p>
                  <p>We do not knowingly collect personal information from anyone under the age of 18.</p>
                  <p>If we become aware that personal information has been collected from a minor, we will take reasonable steps to remove such information.</p>
                  <h2>12. Third-Party Websites</h2>
                  <p>Our Website may contain links to third-party websites.</p>
                  <p>We are not responsible for the privacy practices, content, or security of external websites.</p>
                  <p>Users should review the privacy policies of any third-party websites they visit.</p>
                  <h2>13. International Data Transfers</h2>
                  <p>If you access our Website from outside the United States, your information may be transferred to, processed, and stored in the United States or other countries where our service providers operate.</p>
                  <p>By using our Services, you consent to such transfers.</p>
                  <h2>14. Business Transfers</h2>
                  <p>If Seniorisers.com LLC is involved in a merger, acquisition, sale of assets, financing, bankruptcy, or other corporate transaction, your information may be transferred as part of that transaction, subject to applicable law.</p>
                  <h2>15. Legal Compliance</h2>
                  <p>We may disclose personal information if we believe such disclosure is necessary to:</p>
                  <ul className="list-checked mb-9 mb-md-10">
                    <li>Comply with applicable laws</li>
                    <li>Respond to lawful requests from government authorities</li>
                    <li>Protect our legal rights</li>
                    <li>Investigate fraud</li>
                    <li>Prevent unauthorized activity</li>
                    <li>Protect the safety of our users or the public</li>
                  </ul>
                  <h2>16. Changes to This Privacy Policy</h2>
                  <p>We may update this Privacy Policy periodically.</p>
                  <p>Any changes will be posted on this page with an updated "Last Updated" date.</p>
                  <p>Your continued use of our Website following any updates constitutes acceptance of the revised Privacy Policy.</p>
                  <h2>17. Contact Us</h2>
                  <p>If you have any questions regarding this Privacy Policy or our privacy practices, please contact us:</p>
                  <p className="fw-semibold mb-1">Seniorisers.com LLC</p>
                  <p>100 S Broad Street, Suite 725</p>
                  <p>Philadelphia, PA 19110</p>
                  <p>United States</p>
                  <p>Website: https://seniorisers.com</p>
                  <p>Email: support@seniorisers.com</p>
                  <p>Phone: (213) 685-4789</p>
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
