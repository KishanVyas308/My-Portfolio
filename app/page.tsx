import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import * as React from "react"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"
 
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div >
        <FloatingNav  navItems={
          [
        {
          name: 'Home',
          link: '#',
          icon: <i className="ri-home-line"></i>
        },
        {
          name: 'About',
          link: '#about',
          icon: <i className="ri-information-line"></i>
        },
        {
          name: 'Projects',
          link: '#projects',
          icon: <i className="ri-projector-line"></i>
        },
        {
          name: 'Contact',
          link: '#contact',
          icon: <i className="ri-contacts-line"></i>
        }
          ]
        }/>
        <Hero />
      </div>
    </main>
  );
}
