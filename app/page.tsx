import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import * as React from "react"
import { FaHome, FaInfoCircle, FaProjectDiagram, FaAddressBook } from "react-icons/fa";
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
      <div className="flex justify-center items-center flex-col">
        <FloatingNav navItems={
          [
            {
              name: 'Home',
              link: '#',
              icon: <FaHome />
            },
            {
              name: 'About',
              link: '#about',
              icon: <FaInfoCircle />
            },
            {
              name: 'Projects',
              link: '#projects',
              icon: <FaProjectDiagram />
            },
            {
              name: 'Contact',
              link: '#contact',
              icon: <FaAddressBook />
            }
          ]
        }/>
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
