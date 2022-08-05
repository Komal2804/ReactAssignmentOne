import React from 'react'

function ImageComp() {
  let url="https://jsonplaceholder.typicode.com/users";
  const FetchDataPromise=()=>{
  fetch(url)
  .then((r)=>{
      return r.json();
  })
  .then((result)=>{
      const newResult = result.filter(function(e){
          return e.id<=10;
      });
     console.log(newResult);
   
  });

};
FetchDataPromise();
  return (
    <div>ImageComp</div>
  )
}

export default ImageComp