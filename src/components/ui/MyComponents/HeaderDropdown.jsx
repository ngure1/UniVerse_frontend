import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button } from "@/components/ui/button";
  import { Link } from "react-scroll";



const HeaderDropdown = (
    className
) => {
  return (
    <div className={`${className}`}>
        <DropdownMenu>
                <DropdownMenuTrigger>
                    <div>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 12.85L1 12.85L1 14.15L14 14.15L14 12.85ZM14 8.85002L1 8.85002L1 10.15L14 10.15L14 8.85002ZM1 4.85003L14 4.85003L14 6.15003L1 6.15002L1 4.85003ZM14 0.850025L1 0.850025L1 2.15002L14 2.15002L14 0.850025Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Home</DropdownMenuItem>
                    <DropdownMenuItem>Why join us</DropdownMenuItem>
                    <DropdownMenuItem>Our community</DropdownMenuItem>
                    <DropdownMenuItem>Latest Posts</DropdownMenuItem>
                    <DropdownMenuItem>The Team</DropdownMenuItem>
                    <DropdownMenuItem>Partners</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Login</DropdownMenuItem>
                    <DropdownMenuItem>Signup</DropdownMenuItem>
                </DropdownMenuContent>
        </DropdownMenu>
    </div>
 

  )
}

export default HeaderDropdown