import { Link, Navigate, useNavigate } from "react-router-dom"
import Zoop from "../WrapperAndComponents/Zoop"
const Footer = () => {
    const socialdata = [
        { name:"Facebook", link : ""},
        { name: "Instagram", link: "" },
        { name: "X", link: "" },
        { name: "Youtube", link: "" }
    ]

    const NavHandler = () => {
        const navigate = useNavigate()
        navigate("/about");
    }

  return (
      <div className="footer bg-black text-white  relative pt-[5vw] px-[6vw] min-h-[60vh] overflow-hidden">
    <div className="h-full w-full">
        <div className="footpart1 py-6 border-b-2 mb-[6vw] md:mb-[2vw] border-zinc-600 flex flex-row-reverse md:flex-row items-center justify-between">
                  <div className="footnavs text-[5vw] xs:text-[3.6vw] sm:text-[2.8vw] md:text-[1.4vw] flex flex-col md:flex-row md:gap-20">
                <Link to="/about">
                     <Zoop>About</Zoop>
                </Link>
                <Link to="/">
                    <Zoop>Home</Zoop>
                </Link>
                <Link to="/products">
                    <Zoop>Products</Zoop>
                </Link>
            </div>
            <div className="text-[3.6vw] md:text-[4vw]">
                  <a href="mailto:support@youthiapa.com">support@youthiapa.com</a>
            </div>
        </div>
        <div className="footpart-2 w-full">
            <div className="fottop flex flex-col sm:flex-row justify-between ">
              <div className="flex flex-row items-start gap-[10vw] md:gap-[15vw] pb-8">
                <div>
                    <h4 className="text-[3.6vw] xs:text-[2.8vw] sm:text-[2vw] md:text-[1.2vw]">Quick Access</h4>
                    <div className="pt-3 text-[3.3vw] xs:text-[2.8vw] sm:text-[2vw] md:text-[1vw] md:leading-[1.5vw]">
                        <Zoop>Cargos</Zoop>
                        <Zoop>CoordFit</Zoop>
                        <Zoop>Oversized</Zoop>
                    </div>
                </div>
                <div>
                    <h4 className="text-[3.6vw] xs:text-[2.8vw] sm:text-[2vw] md:text-[1.2vw]">Info Links</h4>
                    <div className="pt-3 text-[3.2vw] xs:text-[2.8vw] sm:text-[2vw] md:text-[1vw] md:leading-[1.5vw]">
                        <Zoop>Track</Zoop>
                        <Zoop>Privacy</Zoop>
                        <Zoop>Refund</Zoop>
                        <Zoop>Shipping</Zoop>
                        <Zoop>T&C </Zoop>
                    </div>
                </div>
              </div>
                    <div className="text-[3.2vw] xs:text-[2.8vw] sm:text-[2vw] md:text-[1vw] md:leading-[1.5vw] text-end">
                    <Zoop>Facebook</Zoop>
                    <Zoop>Instagram</Zoop>
                    <Zoop>X</Zoop>
                    <Zoop>Youtube</Zoop>
              </div>
            </div>
            <div className="fotbottom pb-7 flex items-end justify-between">
                <h3 className="text-[15vw] md:text-[10vw] leading-none">Youthiapa</h3>
                      <p className="flex text-[3.3vw] xs:text-[2.8vw] sm:text-[2vw] md:text-[1vw]">©25</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer