import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import Posts from "../Components/Posts";
import PostData from "../MockData/Post";

export default function Home() {
  let navigate = useNavigate();

  return (
    <>
      <div class="col">
        <div class="row">
          <div class="col-2 p-0">
            <SideBar />
          </div>
          <div class="col-10">
            <Header />
            <p class="h4 mt-4 mx-4">Blogs</p>
            <div className="row col-12" >
              {
                PostData.map((post) => {
                  return (
                    <div className="col-4 mt-4">
                      <Posts post={post} />
                    </div>
                  )
                })
              }


            </div>
          </div>

        </div>
      </div>

    </>
  );
}
