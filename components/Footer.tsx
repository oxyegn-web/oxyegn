import React from "react";
// import Image from "next/image";
// import Instagram from "../public/socialmediaicons/instagram (3) 1.svg";
// import Facebook from "../public/socialmediaicons/facebook (3) 1.svg";
// import Twitter from "../public/socialmediaicons/twitter (2) 1.svg";
// import GooglePlay from "../public/socialmediaicons/Component 20.svg";
// import AppStore from "../public/socialmediaicons/Component 2.svg";

export const Footer = () => {
  return (
    <>
      {/* <div className="bg-[#0a0c29] text-white">
        <div 
        className="container min-w-full mx-auto py-12 px-4 md:px-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex flex-col items-start md:items-center">
              <Image
              width={100}
              height={100}
                src="/placeholder.svg"
                alt="Oxygen Logo"
                className="h-10 mb-4 md:mb-0"
              />
              <div className="flex space-x-4">
                <Image src={GooglePlay} alt="Google Play" />
                <Image src={AppStore} alt="App Store" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-8 md:mt-0">
              <div>
                <h3 className="font-bold">Earn with oxygen</h3>
                <button className="bg-white text-black px-4 py-2 rounded mt-2 border border-gray-300 h-[37px] gap-10  ">
                  Become a Seller
                </button>
              </div>
              <div>
                <h3 className="flex font-semibold">Categories</h3>
                <ul className="space-y-2 mt-2 contents">
                  <li>Grocery</li>
                  <li>Mobiles & Tablets</li>
                  <li>Electronics</li>
                  <li>Home & Furniture</li>
                  <li>Appliances</li>
                  <li>Travel</li>
                  <li>Beauty</li>
                  <li>Toys</li>
                </ul>
              </div>
              <div>
                <h3 className=" font-semibold">Company</h3>
                <ul className="space-y-2 mt-2 contents">
                  <li>About</li>
                  <li>Blogs</li>
                  <li>Career</li>
                  <li>Jobs</li>
                </ul>
              </div>
              <div>
                <h3 className="flex font-semibold">Categories</h3>
                <ul className="space-y-2 mt-2 contents">
                  <li>Grocery</li>
                  <li>Mobiles & Tablets</li>
                  <li>Electronics</li>
                  <li>Home & Furniture</li>
                  <li>Appliances</li>
                  <li>Travel</li>
                  <li>Beauty</li>
                  <li>Toys</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Help</h3>
                <ul className="space-y-2 mt-2 contents">
                  <li>Contact US</li>
                  <li>FAQs</li>
                  <li>Return</li>
                  <li>Cancellation</li>
                  <li>Track Order</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Use</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="font-bold">Subscribe to our newsletter</h3>
                <p className="text-gray-400 mt-2">
                  The latest offers, news, articles and resources sent to your
                  email
                </p>
              </div>
              <div className="flex mt-4 md:mt-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l bg-gray-800 text-white border border-gray-700"
                />
                <button className="bg-green-700 bg-opacity-100 px-4 mx-2 py-2 rounded-r">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex border-t justify-between items-center mt-12 pt-12">
            <p className="text-gray-400">
              © 2024 Oxygen, Inc. All right reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#">
                <Image src={Facebook} alt="Facebook" className="h-6" />
              </a>
              <a href="#">
                <Image src={Instagram} alt="Instagram" className="h-6" />
              </a>
              <a href="#">
                <Image src={Twitter} alt="Twitter" className="h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="container min-w-full mx-auto py-12 px-4 md:px-6 bg-white text-black">
          <h2 className="text-2xl font-bold mb-8">
            What you can buy from Oxygen.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold">Fashion</h3>
              <p className="mt-2">
                Explore the latest trends in clothing, footwear, and accessories
                for men, women, and children. From everyday essentials to
                special occasion outfits, Oxygen has it all.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Electronics</h3>
              <p className="mt-2">
                Find the newest gadgets and electronics, including smartphones,
                laptops, tablets, and home appliances. Stay ahead with
                cutting-edge technology and unbeatable deals.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Home & Living</h3>
              <p className="mt-2">
                Transform your living space with our selection of furniture,
                home decor, kitchenware, and more. Whether you are renovating or
                just looking for a refresh, Oxygen has the perfect items to
                enhance your home.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Beauty & Health</h3>
              <p className="mt-2">
                Discover a wide variety of beauty products, skincare essentials,
                and health supplements. Pamper yourself with top brands and
                innovative products that cater to your well-being.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Sports & Outdoors</h3>
              <p className="mt-2">
                Gear up for your next adventure with our sports equipment,
                outdoor gear, and fitness accessories. From camping trips to gym
                workouts, Oxygen has everything you need to stay active and
                enjoy the great outdoors.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Toys and Games</h3>
              <p className="mt-2">
                Find the perfect toys and games for kids of all ages. Explore
                our selection of educational toys, puzzles, and hobby supplies
                to spark creativity and fun.
              </p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-12 mb-8">Popular Searches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold">Electronics</h3>
              <p className="mt-2">
                Smartphones, Laptops and Tablets, Smartwatches, Wireless Earbuds
                and Headphones, Gaming Consoles (e.g., PlayStation, Xbox,
                Nintendo Switch), Smart Home Devices (e.g., smart speakers,
                security cameras), Portable Chargers and Power Banks
              </p>
            </div>
            <div>
              <h3 className="font-bold">Fashion and Apparel</h3>
              <p className="mt-2">
                Athletic Wear (e.g., leggings, sports bras), Sneakers and
                Running Shoes, Designer Handbags, Sunglasses, Watches and
                Jewelry, Seasonal Clothing (e.g., summer dresses, winter coats)
              </p>
            </div>
            <div>
              <h3 className="font-bold">Beauty and Personal Care</h3>
              <p className="mt-2">
                Skincare Products (e.g., moisturizers, serums), Makeup Kits and
                Palettes, Hair Care Products (e.g., shampoos, conditioners),
                Fragrances and Perfumes, Electric Razors and Hair Clippers
              </p>
            </div>
            <div>
              <h3 className="font-bold">Home and Kitchen</h3>
              <p className="mt-2">
                Air Fryers and Instant Pots, Robot Vacuums, Coffee Makers and
                Espresso Machines, Smart Lighting (e.g., smart bulbs, LED
                strips), Home Decor (e.g., wall art, throw pillows), Bedding
                Sets (e.g., comforters, sheets)
              </p>
            </div>
            <div>
              <h3 className="font-bold">Health and Fitness</h3>
              <p className="mt-2">
                Fitness Trackers (e.g., Fitbit, Garmin), Home Gym Equipment
                (e.g., dumbbells, resistance bands), Yoga Mats and Accessories,
                Protein Powders and Supplements, Massage Guns
              </p>
            </div>
            <div>
              <h3 className="font-bold">Toys and Games</h3>
              <p className="mt-2">
                LEGO Sets, Board Games and Puzzles, Action Figures and Dolls,
                Outdoor Toys (e.g., trampolines, scooters), Educational Toys
              </p>
            </div>
            <div>
              <h3 className="font-bold">Pet Supplies</h3>
              <p className="mt-2">
                Pet Food and Treats, Pet Beds and Crates, Cat Trees and
                Scratching Posts, Pet Toys, Pet Grooming Supplies
              </p>
            </div>
            <div>
              <h3 className="font-bold">Seasonal and Holiday Items</h3>
              <p className="mt-2">
                Halloween Costumes and Decorations, Christmas Decorations (e.g.,
                trees, lights), Summer Outdoor Gear (e.g., patio furniture,
                grills), Back-to-School Supplies
              </p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-12 mb-8">
            Why Choose Oxygen for Your Shopping Needs?
          </h2>
          <p className="mt-2">
            Oxygen is your ultimate shopping destination, offering a seamless
            and enjoyable experience. With a vast selection of high-quality
            products, competitive prices, and a user-friendly interface, Oxygen
            makes online shopping easy and convenient. Our dedicated customer
            support and secure payment options ensure a hassle-free experience,
            so you can shop with confidence. Join the Oxygen community and
            discover the difference today!
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-8">
            The History of Oxygen.
          </h2>
          <p className="mt-2">
            The idea for Oxygen was born in 2021, driven by a vision to create a
            superior e-commerce platform that offers an unparalleled shopping
            experience. Recognizing the evolving needs of online shoppers and
            the potential for innovation in the digital marketplace, the concept
            of Oxygen began to take shape.
          </p>
          <p className="mt-2">
            After thorough research, planning, and the refinement of ideas,
            development of the Oxygen platform officially commenced in 2024.
            This marked the beginning of an exciting journey to bring a
            revolutionary shopping experience to life. Our team dedicated
            countless hours to building a user-friendly interface, curating a
            diverse product range, and implementing robust security measures to
            ensure a seamless and secure shopping environment.
          </p>
          <p className="mt-2">
            From its inception to its development, Oxygen has been driven by a
            commitment to excellence and a passion for enhancing the way people
            shop online. Today, we are proud to offer a platform that not only
            meets but exceeds the expectations of our customers, providing
            convenience, quality, and value in every purchase.
          </p>
          <p className="mt-2">
            Join us on this exciting journey and experience the evolution of
            online shopping with Oxygen.
          </p>
        </div>
      </div> */}
    </>
  );
};
