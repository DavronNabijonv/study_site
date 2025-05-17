import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { EnFlag, RuFlag, SearchIcon, UzFlag } from "@/assets";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NavbarData } from "@/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "motion/react";

import { useTranslations } from "@/hooks/useTranslations";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

function Navbar() {
  const navigate = useNavigate();
  const { lang } = useParams();
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  return (
    <header>
      {/* Navbar top */}
      <nav className="py-[26px] max-sm:py-4 bg-darkBlue">
        <div className="main-container">
          <div className="flex items-center justify-between gap-5">
            <Link
              to=""
              className="text-white font-bold text-[28px] max-sm:text-[23.21px] max-sm:font-semibold"
            >
              StudyUz
            </Link>

            <div className="flex items-center justify-end gap-4 w-full max-[1000px]:hidden">
              <label className="max-w-[560px] w-full bg-white flex items-center rounded-[8px] pl-[18px] h-12">
                <img
                  src={SearchIcon}
                  alt="search icon"
                  className="w-6 h-6 cursor-pointer"
                />
                <Input
                  placeholder={t.navbar.input}
                  prefix={SearchIcon}
                  className="w-full h-full placeholder:text-[#868686] bg-white rounded-l-none border-none ring-0 rounded-[8px] shadow-none !text-[18px]"
                />
              </label>

              <Button className="max-w-[195px] w-full h-12">
                {t.navbar.contact}
              </Button>
            </div>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={() => setOpen(!open)}>
              <SheetTrigger className="min-[1000px]:hidden">
                <AlignJustify className="cursor-pointer text-white w-6 h-6" />
              </SheetTrigger>
              <SheetContent
                className="bg-darkBlue border-0 max-sm:w-full flex flex-col justify-between"
                closeIconClasses="text-white opacity-100 w-6 h-6 cursor-pointer"
                aria-describedby={undefined}
              >
                <SheetHeader className="p-4 pt-9">
                  <SheetTitle className="text-white font-semibold text-[23.21px]">
                    StudyUz
                  </SheetTitle>
                  <div className="border-t border-[#010F3E] pt-6 flex flex-col">
                    <div className="flex flex-col gap-8">
                      {NavbarData.map((item, idx) => (
                        <Link
                          to={item.path}
                          key={item.id}
                          className="text-[18px] font-medium text-white"
                          onClick={() => setOpen(false)}
                        >
                          <motion.p
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              duration: 1.5,
                              delay: idx * 0.1,
                              ease: "easeIn",
                              type: "spring",
                            }}
                          >
                            {t.navbar.links[item.title]}
                          </motion.p>
                        </Link>
                      ))}
                    </div>

                    <Select
                      value={lang}
                      onValueChange={(value) => {
                        navigate(`/${value}`);
                        setOpen(false);
                      }}
                    >
                      <SelectTrigger
                        className="w-full cursor-pointer ring-0 border-0 shadow-none focus-visible:ring-0 text-white p-0 text-[18px] mt-8"
                        downIconClasses="text-white"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-darkBlue text-white border-0">
                        <SelectGroup>
                          <SelectItem value="uz">
                            <img src={UzFlag} alt="Uzbekistan Flag" />
                            <span>UZ</span>
                          </SelectItem>
                          <SelectItem value="ru">
                            <img src={RuFlag} alt="Russian Flag" />
                            <span>RU</span>
                          </SelectItem>
                          <SelectItem value="en">
                            <img src={EnFlag} alt="USA Flag" />
                            <span>En</span>
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </SheetHeader>

                <SheetFooter>
                  <Button type="button" className="w-full h-[55px] capitalize">
                    {t.navbar.contactUs}
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Navbar links */}
      <div className="main-container flex justify-between gap-5 items-center py-6 max-[1000px]:hidden">
        <div className="flex items-center gap-8 max-[1100px]:gap-0">
          {NavbarData.map((item) => (
            <NavLink
              to={item.path}
              key={item.id}
              className={({ isActive }) =>
                cn(
                  "text-[16px] font-medium py-2 px-4 transition-all duration-300 text-center rounded-[8px]",
                  isActive
                    ? "bg-darkBlue text-white"
                    : "text-[#242424] hover:bg-darkBlue hover:text-white"
                )
              }
            >
              {t.navbar.links[item.title]}
            </NavLink>
          ))}
        </div>

        <Select value={lang} onValueChange={(value) => navigate(`/${value}`)}>
          <SelectTrigger className="w-fit cursor-pointer ring-0 border-0 shadow-none focus-visible:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-[#272A31] text-white">
            <SelectGroup>
              <SelectItem value="uz">
                <img src={UzFlag} alt="Uzbekistan Flag" />
                <span>UZ</span>
              </SelectItem>
              <SelectItem value="ru">
                <img src={RuFlag} alt="Russian Flag" />
                <span>RU</span>
              </SelectItem>
              <SelectItem value="en">
                <img src={EnFlag} alt="USA Flag" />
                <span>En</span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}

export default Navbar;
