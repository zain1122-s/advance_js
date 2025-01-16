const base_url =   "https://jsonplaceholder.typicode.com/posts";
 
function posts_is (){
    return new Promise((resolve, reject) => {
        fetch(base_url,{
            headers:{accept : "application/json"},
        }).then ((res) =>{
            console.log(res , "res");
            if(res.ok){
                return res.json();
            }else{
                reject("failed to fetch data");
            }
        }
    )
    })
}

