import React, { useEffect } from "react";
import { useState } from "react";
import appwriteService from "../appwrite/config";
import Container from "../components/container/Container";
import ProfileCard from "../components/container/ProfileCard";
import AboutUs from "./AboutUs";
import Aunty from "./Aunty";
import WhyZarya from "./WhyZarya";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getProfile([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  {
    return (
      <>
        <div className="w-full py-8">
          <div class="flex h-[87vh] items-center justify-between p-8">
            <img
              class="w-1/2 rounded-lg"
              src="../../public/heroSectionZarya.png"
              alt="Image Description"
            />
            <img
              class="w-1/2 rounded-lg"
              src="../../public/poor.avif"
              alt="Image Description"
            />
          </div>
        </div>

        <Aunty/>
        <AboutUs />
        <WhyZarya />

      </>
    );
  }

  // return (
  //   <div className="w-full py-8">
  //     <Container>
  //       <div className="flex flex-wrap">
  //         {posts.map((post) => (
  //           <div className="p-2 w-1/4" key={post.$id}>
  //             <ProfileCard {...post} />
  //           </div>
  //         ))}
  //       </div>
  //     </Container>
  //   </div>
  // );
}

export default Home;
