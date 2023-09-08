export const metadata = {
  title: "Privacy Policy",
  description:
    "At Amejro, we take the privacy of our users seriously. This privacy policy outlines the information we collect and how we use it.",
};
export default function page() {
  return (
    <>
      <header className=" w-screen py-[85px] bg-slate-200">
        <h1 className="text-4xl font-bold text-center py-10">Privacy Policy</h1>
        <p className="mx-auto max-w-2xl px-[15px] text-center">
          At Amejro, we take the privacy of our users seriously. This privacy
          policy outlines the information we collect and how we use it.
        </p>
      </header>
      <div className="mx-auto max-w-2xl">
        <div className="pb-[20px]  px-[15px]">
          <p className="pt-10 text-slate-400">Last Revised: 26-02-2023</p>
          <div>
            <h1 className="text-2xl font-bold py-[15px]">
              Information Collection
            </h1>
            <p>
              We collect information that you provide to us when you register
              for our newsletter or leave a comment on our website. This
              information may include your name and email address. We also use
              third-party tools such as Google Analytics to collect information
              about how users interact with our website. This information may
              include your IP address, browser type, and device information.
            </p>
          </div>

          <div>
            <h1 className="text-2xl font-bold py-[15px]">Information Use</h1>
            <p>
              We use the information we collect to personalize your experience
              on our website and to improve our content and services. We may
              also use your email address to send you newsletters and other
              promotional materials. We do not share your personal information
              with third parties, except as required by law.
            </p>
          </div>

          <div>
            <h1 className="text-2xl font-bold py-[15px]">Cookies</h1>
            <p>
              We use cookies to enhance your experience on our website. A cookie
              is a small text file that is stored on your device when you visit
              our website. Cookies help us remember your preferences and improve
              your user experience. You can choose to disable cookies in your
              browser settings, but please note that this may affect your
              experience on our website.
            </p>
          </div>

          <div>
            <h1 className="text-2xl font-bold py-[15px]">Data Security</h1>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, disclosure, or misuse. However, please
              note that no data transmission over the internet can be guaranteed
              to be 100% secure.
            </p>
          </div>

          <div>
            <h1 className="text-2xl font-bold py-[15px]">
              Changes to This Policy
            </h1>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new policy on our
              website.
            </p>
          </div>

          <div>
            <h1 className="text-2xl font-bold py-[15px]">Contact Us</h1>
            <p>
              If you have any questions or concerns about our privacy policy,
              please contact us at{" "}
              <address>
                <a href="mailto:hansonnewton@gmail.com">
                  hansonnewton@gmail.com
                </a>
              </address>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
