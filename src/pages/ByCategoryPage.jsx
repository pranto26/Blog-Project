import React, {useEffect, useState} from 'react';
import Layout from '../layout/Layout';
import { useParams } from 'react-router-dom';
import { postByCategory } from '../ApiRequest/APIRequest';
import BlogList from '../components/BlogList';
import Loader from '../components/Loader';

const ByCategoryPage = () => {
  let {categoryID}=useParams();
  let [list,SetList]=useState(null);

  useEffect(()=>{
    (async ()=>{
        let res= await postByCategory(categoryID);
        SetList(res);
    })()

},[categoryID])
  



 
    return (
      <Layout>
          {list===null?<Loader/>:<BlogList list={list} />}
      </Layout>
    );
};

export default ByCategoryPage;