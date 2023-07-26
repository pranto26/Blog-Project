import React from 'react';
import Layout from '../layout/Layout';
import BlogList from '../components/BlogList';
import Loader from '../components/Loader';
import { postLatest } from '../ApiRequest/APIRequest';
import { useState } from 'react';
import { useEffect } from 'react';


const HomePage = () => {

    let [list,SetList]=useState(null);

    useEffect(()=>{

        (async ()=>{
          let res= await postLatest();
          SetList(res);
        })()

    },[])


    return (
        <div>
            <Layout>

            {list===null?<Loader/>:<BlogList list={list} />}
                
            </Layout>
            
        </div>
    );
};

export default HomePage;