import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./MainHeader.module.css";

import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink"

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Broser Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
