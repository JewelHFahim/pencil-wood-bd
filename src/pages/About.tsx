import { FaRegCreditCard } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { RiCustomerService2Fill } from "react-icons/ri";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] my-5">
      {/* <div className="w-full flex flex-col md:flex-row gap-8 md:py-10">
        <div className="md:w-[40%]">
          <h1 className="text-5xl md:text-[80px] font-semibold text-primary">
            Fire Cutter
          </h1>
        </div>

        <div className="md:w-[60%] text-gray-600">
          <h3 className="text-xl font-bold text-primary">About us</h3>
          <p className="my-3 leading-7">
            Artisan is the best clothing destination for every class of people.
            The best clothing brand to keep space with time and every season,
            determined to provide the factual collection with desirable
            products. Artisan is conscious about the value of customers’ taste
            and delivers elegant attire, authentic wear, casual, denim, girls
            and kids wardrobe, gent’s collection, and accessories from the most
            contemporary fashion trends. Artisan puts amazing efforts and
            performance to celebrate all festivals and seasons with a unique
            bunch of collections. Customers are valuable and honorable to us and
            will always be there to make your special moment cheerful with our
            humble service. Artisan and the team are grateful to choose us with
            trust.
          </p>
          <p className="mt-5 text-lg font-medium text-gray-600">
            Customer service :
          </p>
          <p className="leading-7">
            We are always open to take your order and give you the desired
            service. Our main motto is the satisfaction of our customers.
          </p>
          <ul className="flex flex-col gap-2 mt-3 pl-5 md:pl-10">
            <li className="list-disc">Place your order 24/7.</li>
            <li className="list-disc">
              Queries for orders call us on 01709371650 (From 10 AM to 09 PM).
            </li>
            <li className="list-disc">
              Chat with us instantly on Facebook (from 9am to 10pm) everyday.
            </li>
            <li className="list-disc">
              E-mail us for any information in support@artisanclick.com
            </li>
          </ul>
        </div>
      </div> */}

      <div
        className="w-full min-h-[calc(100vh-200px)] p-7 md:p-14 relative flex flex-col items-center justify-center gap-y-10"
        style={{ backgroundImage: "url(/about.webp)", backgroundSize: "cover" }}
      >
        <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold uppercase text-white md:text-center z-50">
          TREND AND TRADITION <br /> SEAMLESS FUSION!
        </h1>

        <p className=" md:text-xl font-medium text-white uppercase z-50 md:text-center md:leading-8">
          Twelve Clothing seamlessly combines fashion with elegance,
          prioritizing community engagement and exceptional customer care. Our
          mission is to nurture a loyal customer base while upholding the
          sophistication of a global brand. We are dedicated to quality,
          innovation, and sustainability, harmonizing local values with
          international ambitions to deliver an outstanding experience for all.
        </p>

        <div className="absolute top-0 left-0 w-full z-0 h-full bg-black/80"></div>
      </div>

      <div className="my-8 py-20 bg-gray-50 md:px-5">
        <h1 className="text-primary text-2xl font-bold">Why Choose Us</h1>

        <div className="my-8 text-sm grid gap-5 grid-cols-1 md:grid-cols-3">
          <div className="bg-white px-8 py-12 shadow-sm">
            <div className="flex gap-3">
              <FaRegCreditCard className="text-[40px] text-primary" />
              <h2 className="text-xl font-bold text-gray-600 hover:text-primary">
                Secure Payment
              </h2>
            </div>
            <p className="mt-4 font-medium text-gray-500">
              Proceed to checkout using one of the most secured payment gateway
              – SSL Commerz.
            </p>
          </div>

          <div className="bg-white px-8 py-12 shadow-sm">
            <div className="flex gap-3">
              <GoRocket className="text-[40px] text-primary" />
              <h2 className="text-xl font-bold text-gray-600 hover:text-primary">
                Fast Delivery
              </h2>
            </div>
            <p className="mt-4 font-medium text-gray-500">
              We deliver your desired products within 2/3 working days maximum
              for outside Dhaka and the Next day delivery inside Dhaka.
            </p>
          </div>

          <div className="bg-white px-8 py-12 shadow-sm">
            <div className="flex gap-3">
              <RiCustomerService2Fill className="text-[40px] text-primary" />
              <h2 className="text-xl font-bold text-gray-600 hover:text-primary">
                24/7 Service
              </h2>
            </div>
            <p className="mt-4 font-medium text-gray-500">
              Get 24/7 support over the call or direct virtual messaging system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
