import React, { useState } from "react";

export default function SideBar() {
  let [menu, setMenu] = useState("blog");
  let handleMenuChange = (menu) => {
    setMenu(menu);
  };
  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ height: "100vh  " }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            {/* <use xlink:href="#bootstrap"></use> */}
          </svg>
          <span className="fs-4">Blogger</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              onClick={() => handleMenuChange("blog")}
              className={
                menu === "blog" ? "nav-link active" : "nav-link text-white"
              }
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                {/* <use xlink:href="#home"></use> */}
              </svg>
              Blogs
            </a>
          </li>
          <li>
            <a
              onClick={() => handleMenuChange("create")}
              className={
                menu === "create" ? "nav-link active" : "nav-link text-white"
              }
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                {/* <use xlink:href="#speedometer2"></use> */}
              </svg>
              Create Blog
            </a>
          </li>
        </ul>
        <hr />

      </div>
    </div>
  );
}
