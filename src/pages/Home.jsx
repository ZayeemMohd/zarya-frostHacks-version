import React, { useEffect } from "react";
import { useState } from "react";
import appwriteService from "../appwrite/config";
import Container from "../components/container/Container";
import ProfileCard from "../components/container/ProfileCard";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getProfile([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          {/* <div className="flex flex-wrap">
            <h1 className="text-15xl">ZARYA</h1>
          </div> */}
          <div class="wrapper h-screen grid place-items-center">
            <div class="typing-demo w-22ch animate-typing whitespace-nowrap overflow-hidden border-r-3 border-solid border-black font-mono text-2xl">
              This is a typing demo.
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <ProfileCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
