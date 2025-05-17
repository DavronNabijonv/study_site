import { usBuilds, usOur, usShowcase, usTeam } from "@/assets";
import Txt from "./my_components/txt";
import Btn from "./my_components/btn";
import { ourTeam, whyUSIcons } from "./main_info";
import { FaLinkedin , FaDribbble } from "react-icons/fa";

export default function About_us() {
  return (
    <div className="about_us">

      <div className="showCase relative flex sm:items-center items-start sm:justify-start justify-center lg:h-[700px] ">
        <img
          src={usShowcase}
          loading="lazy"
          className=" lg:h-[100%] h-[600px]  w-[100%] object-cover "
          alt="showCAse image"
        />

        <div className="absolute w-full h-full mx-auto bg-[#000000] opacity-50 left-[0]"></div>

        <div className="container absolute z-[1000] ">
          <div className="conatiner max-w-[1200px] w-full mx-[auto] px-[10px] ">
            <div className="showCase_card flex flex-col lg:gap-[20px] gap-[10px] h-full max-w-[500px] w-full sm:mx-[0] mx-auto max-lg:pt-[50px] ">
              <Txt
                txt="World Study Academy"
                txt_styles=" lg:text-[75px] sm: text-[40px] font-[700] text-white lg:leading-[75px] max-sm:w-[80%] "
              />
              <Txt
                txt="Study at top universities, live affordably, and experience a vibrant new culture."
                txt_styles=" lg:text-[24px] sm:text-[18px] text-[16px] text-white "
              />
              <Btn
                txt="Get to Know"
                btn_styles=" rounded-[15px] text-white sm:text-[18px] text-[16px] bg-primary p-[10px] sm:w-[200px] sm:mt-[0] mt-[50%] "
              />
            </div>
          </div>
        </div>

      </div>

        <div className="about_main" >
            
            <div className="container max-w-[1200px] w-full mx-auto px-[15px] ">

            <div className="about_our lg:my-[100px] sm:my-[60px] my-[30px] flex flex-col lg:gap-[50px] gap-[25px] ">
                <h1 className=" lg:text-[48px] sm:text-[30px] text-[28px] text-black font-[700] " >About <span className=" text-primary   " >our company</span> </h1>
                <div className="our_body flex lg:gap-[15px] gap-[50px] lg:justify-between justify-center flex-wrap ">
                    <div className=" flex flex-col gap-[10px] " >
                        <Txt txt="World study Academy" txt_styles=" lg:text-[40px] sm:text-[28px] text-[20px] text-black " />
                        <Txt 
                        txt="World Study Academy is a global education consultancy and student support platform dedicated to helping aspiring learners achieve their academic dreams abroad. With a mission to connect students with world-class universities and programs, we provide personalized guidance throughout every stage of the international education journey — from choosing the right course to securing admission and preparing for life in a new country." 
                        txt_styles=" text-[#737272] lg:text-[19px] sm:text-[16px] text-[15px] lg:w-[500px] sm:text-[16px]  "
                        />
                    </div>
                    <img src={usOur} loading="lazy" className=" rounded-[20px] lg:max-w-[500px] max-w-[100%] " alt="about-our-image" />
                </div>
            </div>

            </div>

            <div className="journey bg-[#F8F8F5]  py-[80px] ">
                <div className=" container flex flex-wrap lg:justify-between justify-center max-lg:gap-[50px] max-w-[1200px] w-full mx-auto px-[15px]   ">
                <div className="left lg:max-w-[580px]  flex flex-col max-sm:justify-center max-sm:items-center gap-[10px] ">
                    <Txt
                        txt="We’re only just getting started on our journey" 
                        txt_styles=" text-black lg:text-[48px] sm:text-[35px] text-[30px]  font-[700] " 
                    />
                    <div className=" grid sm:grid-cols-2 grid-cols-1 gap-[10px] max-sm:gap-[40px] " >
                        <div className="cardSon max-sm:text-center ">
                            <span className="text-primary sm:text-[60px] text-[40px] font-[600] " >400+</span>
                            <p className="text-[20px] text-black " >Successful Graduates</p>
                        </div>
                        <div className="cardSon max-sm:text-center ">
                            <span className="text-primary sm:text-[60px] text-[40px] font-[600] " >60+</span>
                            <p className="text-[18px] text-black " >Students from 50+ Countries</p>
                        </div>
                        <div className="cardSon max-sm:text-center ">
                            <span className="text-primary sm:text-[60px] text-[40px] font-[600] " >10+</span>
                            <p className="text-[18px] text-black " >Partnerships with Global Universities</p>
                        </div>
                        <div className="cardSon max-sm:text-center ">
                            <span className="text-primary sm:text-[60px] text-[40px] font-[600] " >95%</span>
                            <p className="text-[18px] text-black " >Student Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
                <img src={usBuilds} loading="lazy" className="rounded-[20px] lg:max-w-[400px] h-auto " alt="build iamges" />
                </div>
            </div>

            <div className="container max-w-[1200px] w-full mx-auto px-[15px] lg:my-[100px] sm:my-[70px] my-[50px] ">

                <div className="icons">
                    <Txt txt="Why choose us?" txt_styles="text-black sm:text-[48px] text-[35px] mb-[50px] " />
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[20px] lg:10px max-lg:gap-[30px] justify-center  " >
                        {whyUSIcons.map((item)=>(
                            <div key={item.id} className=" flex flex-col items-center justify-start gap-[10px] " >
                                <img src={item.icon} loading="lazy"  alt="why us icon" />
                                <Txt txt={item.title} txt_styles=" text-center text-black text-[20px] " />
                                <Txt txt={item.txt} txt_styles=" text-center " />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="ourTeam sm:mt-[100px] mt-[50px] ">
                    <Txt txt="Meet our team" txt_styles="text-black sm:text-[48px] text-[35px] mb-[50px] " />
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[20px] lg:gap-[10px] max-lg:gap-[30px] justify-center  " >
                        {ourTeam.map((item)=>(
                            <div key={item.id} className=" py-[20px] px-[10px] flex flex-col items-center justify-start gap-[10px] bg-[#FAFAFA] " >
                                
                                <div className={`${item.bg_color} rounded-[100%] `}>
                                    <img src={item.img} className="rounded-[100%] w-[100px] " loading="lazy" alt="team mate image" />
                                </div>

                                <div className=" flex flex-col gap-[10px] ">
                                    <Txt txt={item.name} txt_styles=" text-black text-[18px] text-center " />
                                    <Txt txt={item.job} txt_styles=" text-[#6941C6] text-center " />
                                    <Txt txt={item.user_describe} txt_styles=" text-center text-[#535862] text-[16px] " />
                                </div>

                                <div className="btnGRp flex gap-[10px] ">
                                    <a href={item.twitter_link} className=" text-[#A4A7AE] text-[20px] " ><button></button></a>
                                    <a href={item.linkedIn_link} className=" text-[#A4A7AE] text-[20px] "  ><button><FaLinkedin /></button></a>
                                    <a href={item.dribble} className=" text-[#A4A7AE] text-[20px] "  ><button><FaDribbble /></button></a>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="journey relative flex flex-col items-center justify-center h-[760px] ">
                <img src={usTeam} loading="lazy" className=" h-[100%] w-full object-cover " alt="last image" />
                <div className="absolute w-full h-full mx-auto bg-[#000000] opacity-50 left-[0]"></div>

                <div className="txtJourney absolute flex flex-col lg:gap-[20px] gap-[10px] xl:w-[1200px] w-auto mx-auto ">
                    <Txt txt="Start Your Journey With World Study Academy" 
                    txt_styles=" lg:text-[80px] sm:text-[40px] max-sm:text-[32px] text-white font-[600] text-center lg:leading-[100px] sm:leading-[50px] leading-[40px] "
                      />
                    <Txt txt="At World Study Academy, we're more than just an education gateway — we're your partner in building a future full of opportunity, growth, and global connection." 
                    txt_styles=" text-white lg:text-[24px] text-[20px] text-center sm:w-[70%] w-[98%] mx-auto "
                     />
                     <div className="btnGRP flex gap-[20px] flex-wrap items-center justify-center ">
                        <Btn txt="Contact Us" btn_styles=" rounded-[15px] w-[220px] text-black hover:text-white bg-[#F8F8F8] hover:bg-primary p-[8px] text-[18px] " />
                        <Btn txt="Apply Now" btn_styles=" rounded-[15px] w-[220px] text-black hover:text-white bg-[#F8F8F8] hover:bg-primary p-[8px] text-[18px] " />
                     </div>
                </div>

            </div>

        </div>

    </div>
  );
}
