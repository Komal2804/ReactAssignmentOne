const UserDetailsComp=()=>{
    let url="https://jsonplaceholder.typicode.com/users";
    const fetchDataPromise=()=>{
        fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((result)=>{
            const newResult=result.filter(function(e){
                if (e.id===1){
                    return e;
                }
            });
            console.log(newResult);
            
        })
        fetchDataPromise();
    }
    return(
        <div>
            <UserDetailsComp/>
            <p>Personal Information of Users</p>
            </div>
    );
    
}

export default UserDetailsComp;