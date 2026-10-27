"use client";
const navLinks = [
  { id: 1, label: "Facebook", href: "#" },
  { id: 2, label: "Youtube", href: "#" },
  { id: 3, label: "Instagram", href: "#" },
];
function Footer() {
  return (
    <>
      <footer className="bg-black text-gray-400 p-12">
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2
             lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8"
        >
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
              Music School is a primier institution dedicateted to teaching the
              art and science of music. We nurture talent from the group up,
              gostering a vibrant community of musicians.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors
                                duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors
                                duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors
                                duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors
                                duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
             <h2 className="text-white text-lg font-semibold mb-4">
              Follow Us
            </h2>
            <div className="flex space-x-4">
               {
                navLinks.map((link)=>(
                     <a
                     key={link.id}
                    href={link.href}
                    className="hove:text-white transition-colors duration-300"
                    >{link.label}
                </a>
                ))
               }
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h2>
            <p>New Delhi,india</p>
            <p>Delhi 1001</p>
            <p>Email:</p>
            <p>adrashtariyal124@gmail.com</p>
            <p>Phone:8864860736</p>
          </div>
        </div>
        <p className="text-center tex-xl pt-8">@ 2024 Music School. All rights reserved</p>
      </footer>
    </>
  );
}

export default Footer;
