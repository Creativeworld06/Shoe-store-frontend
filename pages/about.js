import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments, FaShoePrints } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import Wrapper from "@/components/Wrapper";

function About() {
  return (
    <div className="min-h-[650px] flex items-center">
            <Wrapper>
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="shadow-lg p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200 ">
          <div className="flex flex-col justify-start item-center">
            <img src="logo.webp" className="ml-12 w-[150px]" ></img>
            <div className="bottom-10 my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaShoePrints className="text-2xl text-gray-600 group-hover:text-white " />
                <Link className="text-base text-gray-800 group-hover:text-white font-semibold " href="http://localhost:3000/category/jordan">
                  Jordan
                </Link>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaShoePrints className="text-2xl text-gray-600 group-hover:text-white " />
                <Link className="text-base text-gray-800 group-hover:text-white font-semibold " href="http://localhost:3000/category/running-shoes">
                  Running Shoes
                </Link>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaShoePrints className="text-2xl text-gray-600 group-hover:text-white " />
                <Link className="text-base text-gray-800 group-hover:text-white font-semibold " href="http://localhost:3000/category/sneakers">
                  Sneakers
                </Link>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaShoePrints className="text-2xl text-gray-600 group-hover:text-white " />
                <Link className="text-base text-gray-800 group-hover:text-white font-semibold " href="http://localhost:3000/category/football-shoes">
                  Football Shoes
                </Link>
              </div>
            </div>
            {/* setting  */}
            
          </div>
        </div>
      </Disclosure>
    </div>
    {/* LEFT SIDE */}
    <div className="ml-32 text-center items-center justify-center grid font-bold mt-5 text-[50px] mx-auto md:mt-5px">
            About
            </div>
          
            <p className="ml-48 p-20 text-lg mb-32px text-[30px]">A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection. Form was originally tied to function but over time shoes also became fashion items. Some shoes are worn as safety equipment, such as steel-toe boots, which are required footwear at industrial worksites.

Additionally, fashion has often evolved into many different designs, such as high heels, which are most commonly worn by women during fancy occasions. Contemporary footwear varies widely in style, complexity and cost. Basic sandals may consist of only a thin sole and simple strap and be sold for a low cost. High fashion shoes made by famous designers may be made of expensive materials, use complex construction and sell for large sums of money. Some shoes are designed for specific purposes, such as boots designed specifically for mountaineering or skiing, while others have more generalized usage such as sneakers which have transformed from a special purpose sport shoe into a general use shoe.

Traditionally, shoes have been made from leather, wood or canvas, but are increasingly being made from rubber, plastics, and other petrochemical-derived materials. Globally, the shoe industry is a $200 billion a year industry. 90% of shoes end up in landfills, because the materials are hard to separate, recycle or otherwise reuse.</p>
<h1 className="text-center font-bold mt-5 text-[50px] mx-auto md:mt-5px">Americas</h1>

<p className="ml-48 p-20 text-lg mb-32px text-[30px]">

The oldest known leather shoe, about 5500 years old, found in Armenia

Esparto sandals from the 6th or 5th millennium BC found in Spain

Roman shoes: a man's, a woman's and a child's shoe from Bar Hill Roman Fort, Scotland.
The earliest known shoes are sagebrush bark sandals dating from approximately 7000 or 8000 BC, found in the Fort Rock Cave in the US state of Oregon in 1938. The world's oldest leather shoe, made from a single piece of cowhide laced with a leather cord along seams at the front and back, was found in the Areni-1 cave complex in Armenia in 2008 and is believed to date to 3500 BC. Ötzi the Iceman's shoes, dating to 3300 BC, featured brown bearskin bases, deerskin side panels, and a bark-string net, which pulled tight around the foot. The Jotunheimen shoe was discovered in August 2006: archaeologists estimate that this leather shoe was made between 1800 and 1100 BC, making it the oldest article of clothing discovered in Scandinavia.

It is thought that shoes may have been used long before this, but because the materials used were highly perishable, it is difficult to find evidence of the earliest footwear. By studying the bones of the smaller toes (as opposed to the big toe), it was observed that their thickness decreased approximately 40,000 to 26,000 years ago. This led archaeologists to deduce that wearing shoes resulted in less bone growth, resulting in shorter, thinner toes. These earliest designs were very simple, often mere "foot bags" of leather to protect the feet from rocks, debris, and cold.

Many early natives in North America wore a similar type of footwear, known as the moccasin. These are tight-fitting, soft-soled shoes typically made out of leather or bison hides. Many moccasins were also decorated with various beads and other adornments. Moccasins were not designed to be waterproof, and in wet weather and warm summer months, most Native Americans went barefoot. The leaves of the sisal plant were used to make twine for sandals in South America while the natives of Mexico used the Yucca plant.</p>
        

        
    <button className='align-middle ml-72 w-[200px] py-4 rounded-full bg-black text-white text-lg font-medium mb-7 hover:opacity-75'>
              <Link href="/">← Back to home</Link>
             </button>
    </Wrapper>
    </div>
  );
}


export default About;