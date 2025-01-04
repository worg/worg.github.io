import React from "react";
import cn from "classnames";

import s from "./about.module.scss";

const About = () => {
  return (
    <div className={cn("main-container", s.container)}>
      <section className={s.me}>
        My name is <em>Hiram</em> but most of my friends call me worg.
        <br />
        I'm a Full Stack Developer in Mexico City,
        <br />
        I like to solve problems through code.
        <br />
      </section>
      <section className={s.skills}>
        Nowadays I enjoy to develop Web UIs using React, TypeScript and
        <br />
        write systems and CLI tools using Go or Bash.
        <br />
      </section>
      <section className={s.contact}>
        You can reach me at <a href="mailto:hi+web@worg.xyz">hi+web@worg.xyz</a>
      </section>
    </div>
  );
};

export default About;
