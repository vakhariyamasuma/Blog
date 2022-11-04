import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("userData");
        navigate("/login");
    }
    return (
        <>
            <div class="row" style={{ borderBottom: "1px solid #ccc" }}>
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        {/* <a class="navbar-brand" href="#">Navbar</a> */}
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            <div class="d-flex mx-2" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                                &nbsp;&nbsp;
                                <img src="http://cdn.onlinewebfonts.com/svg/img_476656.png" className="mt-1" style={{ height: "28px", cursor: "pointer" }} onClick={handleLogout} />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
