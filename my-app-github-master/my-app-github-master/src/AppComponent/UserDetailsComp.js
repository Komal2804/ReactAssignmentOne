
const UserDetailsComp=()=>{
    
    let url="https://jsonplaceholder.typicode.com/users";
    const FetchDataPromise=()=>{
    fetch(url)
    .then((r)=>{
        return r.json();
    })
    .then((result)=>{
        const newResult = result.filter(function(e){
            return e.id<2;
        });
       console.log(newResult);
     
    });

};
FetchDataPromise();
    return(
<div>
    <p>User Information</p>
   
</div>
    );
};
export default UserDetailsComp;