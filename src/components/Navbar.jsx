import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks } from "../constants/navItems";
import { Link } from "react-router-dom";
import { Avatar,
  AvatarFallback
 } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isPatientLoggedIn, setIsPatientLoggedIn] = useState(false); 
  const patientName = "Ratan"; 
  const handleLogout = () => {
    setIsPatientLoggedIn(false);
  };

  // const togglePatientLogin = () => {
  //   setIsPatientLoggedIn(true);
  // };

  return (
    <div className="flex justify-between p-5 fixed bg-[#ffffff] w-full z-20">
        <Link to="/">
            <div className="text-2xl font-medium">Travel N Cure</div>
        </Link>
        <div>
        <NavigationMenu> 
            <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
              <NavigationMenuContent className="pr-10 h-auto text-md">
                <Link to="/hospitals">
                  <NavigationMenuLink>Hospitals</NavigationMenuLink> 
                </Link>
                <Link to="/doctors">
                  <NavigationMenuLink>Doctors</NavigationMenuLink> 
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {navLinks
              .filter((nav) => !isPatientLoggedIn ? true : 
                (nav.title !== "Login" && nav.title !== "Register")
              )
              .map((nav) => (
                <NavigationMenuItem key={nav.id}>
                <Link to={nav.to}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {nav.title}
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
            ))}
            {isPatientLoggedIn && (
              <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarFallback>
                      {patientName ? patientName.charAt(0).toUpperCase() : "P"}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-auto ">
                  <DropdownMenuItem disabled>
                    {patientName || "Patient"}
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile/edit">View Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
        </NavigationMenu>
        </div>
        {/* <Button onClick={() => togglePatientLogin()}>ToggleLogin</Button> */}
    </div>
  );
};

export default Navbar;
