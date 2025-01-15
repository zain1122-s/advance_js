let base_url = "https://jsonplaceholder.typicode.com/posts";

window.onload = function  postDetail() {
  const urlId = new URLSearchParams(window.location.search)

const postID = urlId.get("id")
  if (postID) {
    singlePost(postID)
  } else {
   document.getElementById("fetch_posts").addEventListener("click", fetchPosts());
  

  
}
}

async function singlePost(id) {
  try {
    const response = await fetch(`${base_url}/${id}`);
    if (response.ok) {
      const singleData = await response.json();
      const singleDataPost = document.getElementById("post_detail");
      singleDataPost.innerHTML = `
        <h2> post ID: ${singleData.id}  </h2>
        <h3> post UserId: ${singleData.userId}</h3>
        <h5>   ${singleData.title}  </h5>
        <p>   ${singleData.body}  </p>
        `;
    } else {
      console.log("failed!");
    }
  } catch (error) {
    console.log(error);
  }
}

async function fetchPosts() {
  try {
    const response = await fetch(`${base_url}`);
    console.log(response, "res");
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      
      let postCard = document.getElementById("post_container");
      data.map((item, index) => {
        console.log(item, "item");
        
        let card = document.createElement("div");
        card.className = "cards";
        card.id = `${item.id}` ;
        card.innerHTML = `
                 <div key=${index}>
                 <h2> post ID:  ${item.id}  </h2>
                 <h3> post UserId:  ${item.userId}  </h3>
                 <h5>   ${item.title}  </h5>
                 <p>   ${item.body}  </p>
                 <button onclick = "vewSinglePost(${item.id})">view single post</button>
                 <button onclick = "deletePost(${item.id})">delete post</button>
                 </div>
                 `;
        postCard.append(card);
      });
    } else {
      console.log("failed");
    }
  } catch (error) {
    console.log("failed to fetch!");
  }
}


function deletePost(id) {
  console.log(id, "post id");
  const dltCard = document.getElementById(id);
  dltCard.remove();
}
function vewSinglePost(id) {
  window.location.href = `postDetail.html?id=${id}`;
}