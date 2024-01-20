import React from 'react';
import { Link } from 'react-router-dom';
import appwriteService from "../../appwrite/config.js"

function ProfileCard({
    $id, title, name, address, contact, profileImage, status
}) {
    return (
        <div>
            <Link to={`/profile/${$id}`}>
                <div className='w-full bg-gray-100 rounded-xl p-4'>
                    <div>
                        <img src={appwriteService.getFilePreview(profileImage)} alt={title}
                        className="rounded-xl" 
                        />
                    </div>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <p className='text-l font-normal'>{name}</p>
                    <p className='text-l font-normal'>{address}</p>
                    <p className='text-l font-normal'>{contact}</p>
                    <p className='texl-l font-bold'>{status}</p>
                </div>
            </Link>
        </div>
    );
}

export default ProfileCard;