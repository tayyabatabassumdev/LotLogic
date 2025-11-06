import React, { useState } from "react";
import { Navbar } from "../components/sections/Hero/Navbar";
import Footer from "../components/sections/Footer/Footer";
import { MobileMenu } from "../components/sections/Hero/MobileMenu";
import PageHeader from "../components/PageHeader";
const PrivacyPolicy: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="overflow-x-hidden bg-white text-dark font-poppins text-justify">
      <Navbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
       {menuOpen && <MobileMenu />}
      <PageHeader badge="Privacy-Compliant Version" title="Privacy Policy" subtitle="Your data is protected under our Privacy Policy, and you control how it's used for billing, analytics, and service improvement."/>

      <section className="max-w-[1100px] mx-auto px-6 py-12 md:py-20 text-sm md:text-base leading-relaxed text-dark space-y-10 ">
        <p>
          This Privacy Policy describes how colorverse.ai
          <span className="font-bold">
            (colorverse.ai, “we”, “us”, “our”)
          </span>{" "}
          collects, uses and discloses information about you when you use our
          website (https://colorverse.ai), applications, services, tools and
          features, or otherwise interact with us (collectively, the{" "}
          <span className="font-bold">“Services”</span>). For the purpose of
          this Privacy Policy, colorverse.ai is the data controller for your
          information, and <span className="font-bold">“you” and “your” </span>
          means you as the user of the Services. Please read this Privacy Policy
          carefully. By using any of the Services, you agree to the collection,
          use, and disclosure of your information as described in this Privacy
          Policy. If you do not agree to this Privacy Policy, please do not use
          or access the Services.
        </p>

        <div>
          <p>
            <span className="font-bold">
              1. CHANGES TO THIS PRIVACY POLICY{" "}
            </span>
            We may modify this Privacy Policy from time to time, in which case
            we will update the “Last Revised” date at the top of this Privacy
            Policy, post the updated version on our Services and take any other
            steps required by applicable law. If you do not agree to any updates
            to this Privacy Policy, please do not continue to use or access the
            Services.
          </p>
        </div>

        <div>
          <p>
            <span className="font-bold">
              2. COLLECTION AND USE OF INFORMATION
            </span>{" "}
            When you use or access the Services, we collect certain information
            about you from different sources
          </p>
          <p>
            {" "}
            <span className="font-bold">
              Information You Provide to Us
            </span>{" "}
            Some features of the Services may require you to directly provide
            certain information. You may elect not to provide this information
            but doing so may prevent you from using or accessing these features.
            Information that you directly submit through our Services includes:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Contact information, such as your name and email address. We
              collect this information to provide the Services, as required to
              perform our contract with you, and because it is in our legitimate
              interest to communicate with you (including to tell you about
              products or services that may be of interest).
            </li>
            <li>
              Account information, such as username, password, security
              questions that you select and the answers you provide, your
              account handle, profile picture and your IP address. We use this
              information to maintain your account and provide the Services, as
              required to perform our contract with you, and because it is in
              our legitimate interest to maintain and secure your account with
              us. If you choose to register an account, you are responsible for
              keeping your account credentials safe. We recommend you do not
              share your access details with anyone else. If you believe your
              account has been compromised, please contact us immediately.
            </li>
            <li>
              Payment and subscription information, such as credit or debit card
              information and billing address, which is collected on our behalf
              by our payment processor, and information about your subscription
              tier and transaction history. We collect this information to
              provide the Services, as required to perform our contract with
              you, and because it is in our legitimate interests to provide you
              with different account options and features.
            </li>
            <li>
              User Input, such as text prompts that you enter and images that
              you upload to generate and output new content based on your User
              Input. We also collect other information you post, submit or make
              available through the Services, such as your comments, “likes” an
              image or follow a user, and any other information that you upload.
              We use User Input and other information you submit to the Services
              because it is in our legitimate interest to administer and improve
              the Services and improve and develop our products and technology.
              Depending on your subscription and account settings, you may have
              the option to create, remix or display private content
            </li>
            <li>
              Other information you choose to provide in communications with us,
              such as your name, email address and other information you
              provide. We use this information because it is in our legitimate
              interest to be responsive to your queries, manage our relationship
              with you and improve our customer service and product offerings.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-3">
            Information Collected Automatically
          </h2>
          <p>
            We, and third parties on our behalf, may automatically collect
            certain information about your interactions with the Services and
            emails, including through cookies, and other tracking technologies
            (“Tracking Technologies”). We collect and use this information
            because it is in our legitimate interests to tailor your experience
            with the Services, run analytics, de-bug, and better understand user
            interactions with and improve the Services. We may associate this
            information with the device you use to access the Services, or email
            accounts you use to engage with us
          </p>
          <h2 className="font-bold"> Such information includes</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Device Information, such as device type, operating system, screen
              size, unique device identifier, Internet protocol (IP) address,
              preferred language and browser information.
            </li>
            <li>
              Location information, such as approximate location and, if you
              choose to provide it, precise geolocation.
            </li>
            <li>
              Other information regarding your interaction with the Services,
              such as browser type, log data, date and time stamps, emails you
              have opened and clickstream data (e.g., page requests, page views,
              how much time is spent on a page, content viewed or interacted
              with, text entered, etc.).
            </li>
            <li>
              To detect, prevent, and address fraudulent or unauthorized
              activities.
            </li>
            For further information on how we use Tracking Technologies and your
            choices, see the section below, Cookies and Other Tracking
            Technologies.
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-3">
            Information Collected From Other Sources
          </h2>
          <ul>
            <li>
              Information we receive when you choose to access the Services
              through your email account, such as through Gmail, which we use in
              our legitimate interests to maintain your account and login
              information.
            </li>
            <li>
              Information we receive from social media platforms, such as when
              you interact with us on Facebook or Instagram, which we use in our
              legitimate interests to communicate with you and personalize our
              Services.
            </li>
          </ul>
        </div>
        <p>
          Any information received from outside sources will be treated in
          accordance with this Privacy Policy. We are not responsible for the
          accuracy of the information provided to us by third parties and are
          not responsible for any third party’s policies or practices
        </p>
        <p>
          In addition to the specific uses described above, we may use any of
          the information described in this section to provide and improve the
          Services and our products offerings and to maintain our business
          relationship, as a matter of our legitimate interests, including by
          enhancing the safety and security of our Services (e.g.,
          troubleshooting, data analysis, testing, system maintenance,
          reporting), training the models that power our Services, providing
          customer support, sending service and other communications, monitoring
          and analyzing trends, conducting internal research and development,
          complying with applicable legal obligations, enforcing any applicable
          terms of service, and protecting the Services, our rights, and the
          rights of our employees, users or other individuals.
        </p>
        <div>
          <h2 className="text-lg  font-bold mb-3">
            3. DISCLOSURE OF INFORMATION
          </h2>
          <p>
            We may disclose your information for legitimate purposes subject to
            this Privacy Policy, including:
          </p>
          <ul>
            <li>
              Through your use of the Services, including when you enter User
              Input and generate an image that, alongside information that may
              identify you such as your account handle and account picture, is
              publicly available on the Services. You may also disclose
              information when you choose to directly interact with other users
              through our Services. We or others may store, display, reproduce,
              publish, or otherwise use or disclose such information, and may or
              may not attribute it to you. For further information on the use
              and display of User Input and other content, please see our Terms
              of Service.
            </li>
            <li>
              To vendors or other service providers who help us provide the
              Services, including for cloud storage, payment processing, system
              administration,
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
