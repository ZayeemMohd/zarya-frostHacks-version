import conf from "../conf/conf"
import { Client, Databases , Storage, Query, ID} from "appwrite";


export class Service {
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async getProfile(slug){
        try {

          return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
            
        } catch (error) {
            console.log("Appwrite service :: getPost() :: ",error)
            return false
        }
    }

    async getPost(queries = [Query.equal("status","pending")]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries)
        } catch (error) {
            console.log("Appwrite service :: getPosts() :: ",error)
            return false
        }
    }

    async createProfile({title, slug, name, address, contact, profileImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    title, name, address, contact, profileImage, status, userId
                }

            )
            
        } catch (error) {
            console.log("Appwrite service :: createPost() :: ",error)
            return false
        }
    }

    async updateProfile(slug, {title, name, address, contact, profileImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {title, name, address, contact, profileImage, status}
            )
        } catch (error) {
            console.log("Appwrite service :: updateProfile() :: ",error)
            return false
        }
    }

    async deleteProfile(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;    
        } catch (error) {
            console.log("Appwrite service :: updateProfile() :: ",error)
            return false
        }
    }

    // storage service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile() :: ",error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: deleteFile() :: ",error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        ).href
    }
}

const service = new Service() 
export default service;

