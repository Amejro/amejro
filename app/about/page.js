export const metadata = {
  title: "About",
  description:
    "At Amejro, we believe that knowledge is power, and we strive to empower our readers with the latest insights and trends in a wide range of topics.",
};
function page() {
  return (
    <>
      <header className=" w-screen py-[85px] bg-slate-200">
        <p className="mx-auto max-w-2xl px-[15px]">
          Welcome to Amejro, your ultimate destination for all things
          interesting! We are a team of passionate writers and researchers who
          are dedicated to bringing you the best and most engaging content from
          across the web.
        </p>
      </header>
      <div className="bg-[#673de6] text-[#fff]">
        <h1 className="text-center text-3xl font-bold py-[30px]">About us</h1>
        <div className="mx-auto max-w-2xl">
          <div className=" pb-[20px]  px-[15px]">
            <h1 className="text-2xl font-bold py-[15px]">
              Empowering You With A Wide Range Of Topics
            </h1>
            <p>
              At Amejro, we believe that knowledge is power, and we strive to
              empower our readers with the latest insights and trends in a wide
              range of topics. Our website covers everything from the latest
              news and trends to insightful opinions and thought-provoking
              essays. We are committed to providing you with a unique
              perspective on the world around you, and our content is designed
              to be informative, entertaining, and thought-provoking.
            </p>
          </div>

          <div className=" pb-[20px] px-[15px]">
            <h1 className="text-2xl font-bold py-[15px]">
              Expertise From Diverse Range of Fields
            </h1>
            <p>
              Our team is comprised of experts from various fields, including
              technology, fashion, sports, travel, health, and many more. We
              have a passion for learning and sharing our knowledge with others,
              and we are dedicated to bringing you the most interesting and
              relevant content from across the web.
            </p>
          </div>

          <div className=" pb-[20px] px-[15px]">
            <h1 className="text-2xl font-bold py-[15px]">
              Committed To Excellence
            </h1>
            <p>
              We take pride in our work and strive for excellence in everything
              we do. Our team is committed to providing you with the highest
              quality content and user experience, and we are constantly working
              to improve and enhance our website to better serve your needs.
            </p>
          </div>

          <div className=" pb-[20px] px-[15px]">
            <p>
              So whether you&apos;re a casual reader or a die-hard enthusiast,
              there&apos;s something for everyone on Amejro. We invite you to
              join our community of readers and explore the world of knowledge
              and discovery with us. Thank you for choosing Amejro, and we look
              forward to sharing our passion with you!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
