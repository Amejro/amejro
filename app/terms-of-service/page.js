export const metadata = {
  title: "Terms OF Service",
  description:
    "By using this website, you agree to comply with and be bound by the following terms and conditions of use.",
};
export default function page() {
  return (
    <>
      <header className=" w-screen py-[85px] bg-slate-200">
        <h1 className="text-4xl font-bold text-center py-10">
          Terms OF Service
        </h1>
        <p className="mx-auto max-w-2xl px-[15px] text-center">
          Welcome to Amejro. By using this website, you agree to comply with and
          be bound by the following terms and conditions of use. Please read
          these terms carefully before using the site.
        </p>
      </header>
      <div className="mx-auto max-w-2xl">
        <div className="pb-[20px]  px-[15px]">
          <p className="pt-10 mb-10 text-slate-400">Last Revised: 26-02-2023</p>
          <div className=" overflow-x-auto ">
            <p className="mb-4">
              1. <b>Use of Site:</b> The content and information on this website
              is for general information purposes only. We reserve the right to
              modify or discontinue, temporarily or permanently, the website (or
              any part of it) with or without notice.
            </p>

            <p className="mb-4">
              2. <b>Content:</b> All content published on Amejro is the property
              of Amejro or its content providers and is protected by copyright
              laws. You may not reproduce, distribute, modify, transmit, reuse,
              repost or use the content of this site for public or commercial
              purposes without written permission from Amejro.
            </p>

            <p className="mb-4">
              3. <b>User Conduct:</b> You are responsible for your use of Amejro
              and any content that you post or share on the site. You agree not
              to engage in any activity that would interfere with or disrupt the
              website or the servers and networks that support the website.
            </p>

            <p className="mb-4">
              4. <b>Links to Other Sites:</b> Amejro may contain links to other
              websites that are not owned or operated by us. We are not
              responsible for the content or practices of these sites and we do
              not endorse them.
            </p>

            <p className="mb-4">
              5. <b>Disclaimer:</b>
              The information contained on Amejro is for general informational
              purposes only. We make no representations or warranties of any
              kind, express or implied, about the completeness, accuracy,
              reliability, suitability or availability with respect to the
              website or the information, products, services, or related
              graphics contained on the website.
            </p>

            <p className="mb-4">
              6. <b>Limitation of Liability:</b>
              In no event shall Amejro be liable for any direct, indirect,
              incidental, special, or consequential damages arising out of or in
              connection with the use or inability to use the site or its
              contents.
            </p>

            <p className="mb-4">
              7. <b>Indemnification:</b>
              You agree to indemnify and hold Amejro and its affiliates,
              officers, agents, and employees harmless from any claim or demand,
              including reasonable attorneys' fees, made by any third party due
              to or arising out of your use of Amejro or the violation of these
              Terms of Service.
            </p>

            <p className="mb-6">
              8. <b>Changes to Terms of Service:</b>
              Amejro reserves the right to update or modify these Terms of
              Service at any time without prior notice.
            </p>

            <p className="mb-4">
              By using Amejro, you acknowledge that you have read, understood,
              and agree to be bound by these Terms of Service.
            </p>
          </div>

          <div>
            <h1 className="text-2xl font-bold py-[15px]">Contact Us</h1>
            <p>
              If you have any questions or concerns about these Terms, please
              contact us at,
              <address>
                <a href="mailto:hansonnewton@gmail.com">
                  hansonnewton@gmail.com
                </a>
              </address>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
