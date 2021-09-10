import React from "react";
import Link from "next/link";

import s from "./_error.module.scss";

const ErrorPage = () => {
  return (
    <div className={s["error-container"]}>
      <h1>Oops! something's missing</h1>
      <h4>
        you might want to go back to{" "}
        <Link href="/">
          <a>home</a>
        </Link>
      </h4>
    </div>
  );
};

export default ErrorPage;
