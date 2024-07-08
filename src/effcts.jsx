import React, { useState,useEffect} from 'react';
function UseEffect(){
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try{
                const response=await fetch('https://jsonplaceholder.typicode.com/posts');
                const result=await response.json();
                setData(result);
            }
            catch(error){
                console.error('Error fetching Data:',error);
            }
            finally
            {
                setLoading(false);
            }
        };
        fetchData();
    },[]);
    if(loading){
        return <p>Loading...</p>;
    }
    return(
        <>
        <div>
            <h1>Data From API</h1>
            <table className='table table-bordered'>
                <thead>
                <tr>
                    <th>SNO</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                </thead>
                {
                    data.map(item=>(
                        <tbody key={item.id}>
                            <tr key={item.id}>   
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            </tr>
                            </tbody>
                        
                        

                    ))
                }
            </table>
        </div>
        </>
    );
    
}
export default UseEffect;