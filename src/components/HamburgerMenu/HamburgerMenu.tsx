import * as React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const navItems = [
  { name: "Back to Frontpage", path: "/" },
  { name: "Quiz", path: "/quiz" },
];

const norseItems = [
  { name: "Introduction", path: "/norse-mythology" },
  { name: "Norse Mythology Guide", path: "/norse-extended" },
  { name: "Gods and creatures", path: "/gods-creatures" },
];

const folkloreItems = [
  { name: "Introduction", path: "/icelandic-folklore" },
  { name: "Icelandic Sagas", path: "/icelandic-sagas" },
  { name: "Icelandic Historical Map", path: "/historical-map" },
];

import topLogo from "../../assets/images/Logo_nav_bar.png";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-background border-b sticky top-0 right-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/">
              <img
                src={topLogo}
                className="h-12 sm:h-10 md:h-12 w-auto object-contain"
              />
            </NavLink>
            {/* <NavLink to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">Nordur</span>
            </NavLink> */}
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {norseItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </NavLink>
              ))}
              {folkloreItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </NavLink>
              ))}
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-2">
                  <span className="sr-only">Open menu</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="sm:w-[300px]  ">
                <div className="flex flex-col    space-y-4 mt-4 ">
                  <div className=" ">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-3xl font-modernAntiqua">
                          Norse Mythology
                        </AccordionTrigger>

                        <AccordionContent className="font-montserrat text-xl">
                          {norseItems.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.path}
                              className="text-foreground font-modernAntiqua px-3 py-6 active:bg-black active:text-white flex flex-col rounded-md text-xl w-full"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-3xl font-modernAntiqua">
                          Icelandic Folklore
                        </AccordionTrigger>

                        <AccordionContent className="font-montserrat text-xl">
                          {folkloreItems.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.path}
                              className="text-foreground font-modernAntiqua px-3 py-6 active:bg-black active:text-white flex flex-col  rounded-md text-xl w-full"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="flex flex-col">
                      {navItems.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          className="text-foreground font-modernAntiqua py-6 active:bg-black active:text-white  rounded-md text-3xl w-full"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                  {/* <h2 className="text-foreground font-modernAntiqua text-2xl">
                    Norse Mythology
                  </h2>
                  {norseItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className="text-foreground font-modernAntiqua px-3 py-6 active:bg-black active:text-white  rounded-md text-3xl w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  <h2 className="text-foreground font-modernAntiqua text-2xl">
                    Icelandic Folklore
                  </h2>
                  {folkloreItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className="text-foreground font-modernAntiqua px-3 py-6 active:bg-black active:text-white  rounded-md text-3xl w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))} */}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
