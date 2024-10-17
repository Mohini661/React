// import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer w-full flex flex-col text-md font-[sans-serif] text-white bg-black bg-blend-darken ">
      <div className="flex flex-col">
        <div className="flex justify-between px-10 py-5">
          <div className="flex flex-col">
            <h6 className="pb-3 text-gray-500">Our Address</h6>
            <p>2200 Clarendon Blvd., Suite 1400A </p>
            <p> Arlington, VA 22201, USA</p>
          </div>
          <div className="flex flex-col">
            <h6 className="pb-3 text-gray-500">Keep in touch</h6>
            <div className="flex justify-between items-center">
              <a
                className="a"
                href="https://youtu.be/DZ-vHgffIYk?si=lKUO6BBcXxAXSSzR"
              >
                <FaFacebookSquare />
              </a>
              <a
                className="a"
                href="https://youtu.be/DZ-vHgffIYk?si=lKUO6BBcXxAXSSzR"
              >
                <FaInstagramSquare />
              </a>
              <a
                className="a "
                href="https://youtu.be/DZ-vHgffIYk?si=lKUO6BBcXxAXSSzR"
              >
                <FaYoutube />
              </a>
              <a
                className="a"
                href="https://youtu.be/DZ-vHgffIYk?si=lKUO6BBcXxAXSSzR"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h6 className="pb-3 text-gray-500">Phone</h6>
            <a className="a" href="tel:+1234567890">
              1800-145-789
            </a>
          </div>
          <div className="flex flex-col">
            <h6 className="pb-3 text-gray-500">Email</h6>
            <a className="a" href="mailto:mohinipatel161098@gmail.com">
              clothshop@gmail.com
            </a>
          </div>
        </div>
        <div className="flex justify-center text-gray-500 p-2">
          <p>© 2024 www.clothshop.com. All Rights Reserved. </p>
        </div>
      </div>
    </div>

    // <div className="footer-cotainer w-screen flex flex-col text-md font-[sans-serif] text-white bg-black bg-blend-darken bg-cover ">
    //
    //   <div className="flex flex-col">
    //
    //   </div>
    //   <div className="flex flex-col">
    //     <h6 className="pb-3 text-gray-500">Keep in touch</h6>
    //     <div className="social flex flex-col">
    //       <a
    //         className="a"
    //         href="https://youtu.be/DZ-vHgffIYk?si=lKUO6BBcXxAXSSzR"
    //       >
    //         Facebook
    //       </a>
    //       <a
    //         className="a"
    //         href="https://youtu.be/DZ-vHgffIYk?si=lKUO6BBcXxAXSSzR"
    //       >
    //         Instagram
    //       </a>
    //       <a
    //         className="a"
    //         href="https://youtu.be/DZ-vHgffIYk?si=lKUO6BBcXxAXSSzR"
    //       >
    //         YouTube
    //       </a>
    //     </div>
    //   </div>
    //   <div className="flex flex-col">
    //     <h6 className="pb-3 text-gray-500">Phone</h6>
    //     <a className="a" href="tel:+1234567890">
    //       1800-145-789
    //     </a>
    //   </div>
    //   <div className="flex flex-col">
    //     <h6 className="pb-3 text-gray-500">Email</h6>
    //     <a className="a" href="mailto:mohinipatel161098@gmail.com">
    //       clothshop@gmail.com
    //     </a>
    //   </div>

    //   <div className="flex justify-center text-gray-500">
    //     <p>© 2024 www.myntra.com. All Rights Reserved. </p>
    //   </div>
    // </div>
  );
};

export default Footer;
