import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { useEffect } from "react";
import Container from "../components/container/Container";
import PostForm from "../components/post-form/PostForm"

function EditProfile(props) {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getProfile(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  return (
    <div className="py-6">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
}

export default EditProfile;
