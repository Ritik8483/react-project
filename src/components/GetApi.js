import React, { useEffect, useState } from 'react'
import './GetApi.css';

export const GetApi = () => {
    const[data,setData]=useState([]);

    const getusers=async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    setData(await response.json());
    
    }
    useEffect(()=>{
        getusers();
    //     fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    //     .then((result)=>{result.json()
    //     .then((resp)=>{
    //     setData(resp);
    //     })
    // })
    },[])
    // console.log("JSON",data)

  return (
    <div>
         <table className='main_table'>
             <tbody>
                 <tr>
                     <th>postID</th>
                     <th>id</th>
                     <th>name</th>
                     <th>email</th>
                     <th>body</th>
                 </tr>
                 {
                     data.map((item)=>
                     <tr>
                         <td>{item.postID}</td>
                         <td>{item.id}</td>
                         <td>{item.name}</td>
                         <td>{item.email}</td>
                         <td>{item.body}</td>
                     </tr>
                     )
                 }
             </tbody>
         </table>
    </div>
  )
}
