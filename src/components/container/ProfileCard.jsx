import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../../appwrite/config.js";

function ProfileCard({
  $id,
  need,
  name,
  address,
  contact,
  profileImage,
  status,
  helpDone,
}) {
  return (
    <div>
      <Link to={`/profile/${$id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4">
          <div>
            {/* <img
              src={appwriteService.getFilePreview(profileImage)}
            //   alt={}
              className="rounded-xl"
            /> */}
          </div>
          <h2 className="text-xl font-bold">Need: {need}</h2>
          <p className="text-l font-normal">Name: {name}</p>
          <p className="text-l font-normal">Contact: {contact}</p>
          <p className="text-l font-normal">Address: {address}</p>
          <p className="texl-l font-bold">Help Status: {status}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProfileCard;
