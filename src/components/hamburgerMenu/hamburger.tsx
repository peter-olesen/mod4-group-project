import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const navItems = [
  { name: "Main Menu", href: "/" },
  { name: "Homepage", href: "/" },
  { name: "Norse Mythology", href: "/" },
  { name: "Gods and creatures", href: "/" },
];

export function NavBarComponent() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/src/assets/images/Logo_nav_bar.png"
              className="h-12 sm:h-10 md:h-12 w-auto object-contain"
            />
            <a href="/" className="flex-shrink-0">
              {/* <span className="text-2xl font-bold text-primary">Nordur</span> */}
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-foreground font-modernAntiqua px-3 py-12 active:bg-black active:text-white  rounded-md text-3xl w-full text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
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
