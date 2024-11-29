import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Back to Frontpage", path: "/" },
  { name: "Quiz", path: "/quiz" },
];

const norseItems = [
  { name: "Norse Mythology", path: "/norse-mythology" },
  { name: "Norse Extended", path: "/norse-myth-extended" },
  { name: "Gods and creatures", path: "/" },
];

const folkloreItems = [
  { name: "Icelandic Folklore", path: "/icelandic-folklore" },
  { name: "Icelandic Sagas", path: "/icelandic-sagas" },
  { name: "Icelandic Historical Map", path: "/historical-map" },
  { name: "Icelandic Blabber", path: "/icelandic-folklore" },
];

export function NavBarComponent() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-background border-b sticky top-0 right-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/src/assets/images/Logo_nav_bar.png"
              className="h-12 sm:h-10 md:h-12 w-auto object-contain"
            />
            <NavLink to="/" className="flex-shrink-0">
              {/* <span className="text-2xl font-bold text-primary">Nordur</span> */}
            </NavLink>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
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
                <div className="flex flex-col  items-center  space-y-4 mt-4 ">
                  {navItems.map((item) => (
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
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
