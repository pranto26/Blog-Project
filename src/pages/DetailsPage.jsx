import React from 'react';
import Layout from '../layout/Layout';
import {useParams} from "react-router-dom";
import { postDetails } from '../ApiRequest/APIRequest';
import Loader from '../components/Loader';
import BlogDetails from '../components/BlogDetails';
import { useState,useEffect } from 'react';

const DetailsPage = () => {

    let {postID}=useParams();

    let [list,SetList]=useState(null);

    useEffect(()=>{
        (async ()=>{
            let res= await postDetails(postID);
            SetList(res);
        })()

    },[postID])


    return (
        <div>
            <Layout>
               
            {list===null?<Loader/>:<BlogDetails list={list}/>}

            </Layout>
            
        </div>
    );
};

export default DetailsPage;