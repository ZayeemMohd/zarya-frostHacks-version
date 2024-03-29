import React, { useEffect } from "react";
import { useState } from "react";
import appwriteService from "../appwrite/config";
import Container from "../components/container/Container";
import ProfileCard from "../components/container/ProfileCard";

function AllProfiles(props) {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    appwriteService.getProfile([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  
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

export default AllProfiles;
