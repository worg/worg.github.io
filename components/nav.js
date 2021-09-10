import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import cn from "classnames";

import s from "./nav.module.scss";

const Nav = ({ full = false, pathName = "/" }) => (
  <header className={cn(s["main-nav"], { full })}>
    <nav>
      <Link href="/">
        <a className={cn({ [s.active]: pathName === "/" })}>
          &nbsp;&nbsp;/&nbsp;&nbsp;
        </a>
      </Link>
      <Link href="/about">
        <a className={cn({ [s.active]: pathName === "/about" })}>About Me</a>
      </Link>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/worg"
        title="Read my code… or better fork it!"
      >
        Github
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/worg"
        title="Stuff I tweet"
      >
        Twitter
      </a>
      <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/elworg">
        LinkedIn
      </a>
    </nav>
  </header>
);

export default withRouter(Nav);
