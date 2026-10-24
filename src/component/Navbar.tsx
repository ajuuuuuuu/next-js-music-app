"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
interface Props {}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl",
          className,
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>

          <MenuItem setActive={setActive} active={active} item="ourCourses">
            <div className="flex flex-col space-y-4">
              <HoveredLink href="/courses">All courses</HoveredLink>
              <HoveredLink href="/courses">Basic Music Therory</HoveredLink>
              <HoveredLink href="/courses">advance composition</HoveredLink>
              <HoveredLink href="/courses">music prodiction</HoveredLink>
              <HoveredLink href="/courses">Song Writing</HoveredLink>
            </div>
          </MenuItem>

          <Link href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            ></MenuItem>
          </Link>

        </Menu>

      </div>
    </>
  );
}

export default Navbar;
