import React from 'react'

export default function TestApi() {
    useEffect(() => {
        fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
            .then((response)=> response.json())
            .then((data)=>{
            console.log(data);
        })
    
            .catch(e) 
}, []);

  return 
    <div>TestApi</div>
}

