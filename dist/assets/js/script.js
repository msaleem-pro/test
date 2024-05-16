const category = [
  "Programming",
  "Fitness",
  "Food",
  "Science"
]
const posts = [
  {
    postID: 1,
    postTitle: "How to be come a Full Stack Developer?",
    postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloribus repellat libero? Natus sit...",
    postCate: "Programming",
    postImg: "https://www.datasciencecentral.com/wp-content/uploads/2022/07/AdobeStock_122245738.jpg",
    auther: {
      name: "M Saleem",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    date: "15-Dec-2023",
    like: "20k",
    comments: "8k",
    save: "3k",
  },

  {
    postID: 2,
    postTitle: "How to loss weight in 1 week?",
    postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloribus repellat libero? Natus sit...",
    postCate: "Fitness",
    postImg: "https://images.pexels.com/photos/1199590/pexels-photo-1199590.jpeg?auto=compress&cs=tinysrgb&w=600",
    auther: {
      name: "Joe Root",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    date: "15-Sep-2023",
    like: "20k",
    comments: "8k",
    save: "3k",
  },
  {
    postID: 3,
    postTitle: "10 Best Foods for Health.",
    postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloribus repellat libero? Natus sit...",
    postCate: "Food",
    postImg: "https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=600",
    auther: {
      name: "M Saleem",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    date: "15-Dec-2023",
    like: "20k",
    comments: "8k",
    save: "3k",
  },
  {
    postID: 4,
    postTitle: "Life Hacks using daily science",
    postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloribus repellat libero? Natus sit...",
    postCate: "Science",
    postImg: "https://images.pexels.com/photos/3082451/pexels-photo-3082451.jpeg?auto=compress&cs=tinysrgb&w=600",
    auther: {
      name: "M Saleem",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    date: "15-Dec-2023",
    like: "20k",
    comments: "8k",
    save: "3k",
  },
  {
    postID: 5,
    postTitle: "Best exersice to run fast",
    postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloribus repellat libero? Natus sit...",
    postCate: "Fitness",
    postImg: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=600",
    auther: {
      name: "M Saleem",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    date: "15-Dec-2023",
    like: "20k",
    comments: "8k",
    save: "3k",
  },
  {
    postID: 6,
    postTitle: "How water is booild at 100°c",
    postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloribus repellat libero? Natus sit...",
    postCate: "Science",
    postImg: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
    auther: {
      name: "M Saleem",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    date: "15-Dec-2023",
    like: "20k",
    comments: "8k",
    save: "3k",
  },
  {
    postID: 7,
    postTitle: "Learning Node jS in 2024?",
    postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloribus repellat libero? Natus sit...",
    postCate: "Programming",
    postImg: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    auther: {
      name: "M Saleem",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    date: "15-Dec-2023",
    like: "20k",
    comments: "8k",
    save: "3k",
  },
  {
    postID: 8,
    postTitle: "How to make Pizza at home",
    postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloribus repellat libero? Natus sit...",
    postCate: "Food",
    postImg: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600",
    auther: {
      name: "M Saleem",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    date: "15-Dec-2023",
    like: "20k",
    comments: "8k",
    save: "3k",
  },
  {
    postID: 9,
    postTitle: "How missile is take off",
    postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloribus repellat libero? Natus sit...",
    postCate: "Science",
    postImg: "https://images.pexels.com/photos/18649547/pexels-photo-18649547/free-photo-of-anatolian-eagle-2022-exercises-in-konya-the-mcdonnell-douglas-turkish-air-force-f-4e-phantom-terminator-2020-color-of-nato.jpeg?auto=compress&cs=tinysrgb&w=600",
    auther: {
      name: "M Saleem",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    date: "15-Dec-2023",
    like: "20k",
    comments: "8k",
    save: "3k",
  },

  {
    postID: 10,
    postTitle: "How to Learn CSS in 1 month?",
    postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloribus repellat libero? Natus sit...",
    postCate: "Programming",
    postImg: "https://miro.medium.com/v2/resize:fit:600/1*OFsc0SD55jhi8cjo7aCA4w.jpeg",
    auther: {
      name: "Babar Azam",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    date: "12-Dec-2024",
    like: "24k",
    comments: "10k",
    save: "12k",
  },
  {
    postID: 11,
    postTitle: "Why JavaScript is so famous for webste development?",
    postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloribus repellat libero? Natus sit...",
    postCate: "Programming",
    postImg: "https://images.idgesg.net/images/article/2023/04/shutterstock_1361674454-100939444-large.jpg?auto=webp&quality=85,70",
    auther: {
      name: "M Rizwan",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    date: "12-Dec-2024",
    like: "24k",
    comments: "10k",
    save: "12k",
  }
]

let favPostData = []



const display = (e, id) => {
  const actionCont = document.getElementById(`post-action-cont-${id}`)
  actionCont.classList.toggle("active-post-action-cont")
  e.stopPropagation()

}
const getFavPost = id => {
  return posts.find(item => {
    if (id == item.postID) {
      return item
    }
  })
}
const displayFavPosts = (data) => {
  const favPosts = document.querySelector(".fav-posts")
  favPosts.innerHTML = ""
  data.forEach(id => {
    const { postID, postTitle, postImg } = getFavPost(id)
    let finalTitle = postTitle.substring(0, 20) + "...";

    favPosts.innerHTML += `
    
            <a href="#">
              <div class="fav-post flex gap-2">
                <div class="w-1/3 rounded-md overflow-hidden">
                  <img src="${postImg}"
                    class="w-full h-full object-cover " alt="">
                </div>
                <div class="w-3/4">
                  <h3 class="text-sm font-semibold">${finalTitle}</h3>
                </div>
              </div>
            </a>
    
    `
  })

}
displayFavPosts(favPostData)
const readMore = (id) => {
  console.log(id)
}

const addToFav = (id) => {
  favPostData = [id, ...favPostData]
  console.log(favPostData)
  displayFavPosts(favPostData)
}

const displayAllPosts = (data) => {

  const postWrapper = document.querySelector(".post-wrapper")
  postWrapper.innerHTML = "";
  data.forEach((item, ind) => {
    const { postID, postTitle, postDesc, postCate, postImg, auther, save, like, comments, date } = item;
    postWrapper.innerHTML += `
  
  <!-- ------------------------------------------- -->
        <div id="post-${postID}" class="post-cont w-full flex flex-col  md:flex-row gap-2 bg-white rounded-lg relative shadow-lg">
          <!-- Action Container -->
          <div id="post-action-cont-${postID}"
            class="post-action-cont w-52 bg-white border absolute top-12 right-6 rounded-md shadow-lg p-3 flex gap-2 flex-col">
            <div class="save-cont flex gap-4 items-center">
              <button onclick="addToFav(${postID})" class="flex gap-3 items-center"><i class="fa-solid fa-bookmark"></i><span>Save
                  Post</span></button>
            </div>

            <div class="save-cont flex gap-5 items-center">
              <button class="flex gap-3 items-center"><i class="fa-solid fa-link"></i> <span>Copy Link</span></button>
            </div>

          </div>
          <!-- Action Container ends -->
          <button onclick = "display(event, ${postID})" id="post-action-btn-${postID}" class="post-action-btn absolute right-3 top-3  w-8 h-8 rounded-full bg-white shadow-lg "><i
              class="fa-solid fa-ellipsis-vertical"></i></button>
          <div class="post-img-cont w-full md:w-1/3 md:h-full h-52 overflow-hidden rounded-lg">
            <img src="${postImg}"
              class="h-full w-full object-cover" alt="">

          </div>
          <div class="post-content md:w-2/3 w-full  p-5">
            <h2 class="post-title text-xl font-bold  ">
              ${postTitle}
            </h2>
            <div class="meta-data flex gap-5 items-center  pt-2 pb-6">
              <div class="auther flex gap-3 items-center ">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  class="min-w-8 h-8 object-cover rounded-full" alt="">
                <div>
                  <h4 class="text-sm font-semibold">${auther.name}</h4>
                  <h6 class="post-time">${date}</h6>
                </div>
              </div>

              <div class="like-cont flex gap-2 items-center">
                <span class="text-lg"><i class="fa-solid fa-heart"></i></span> <span class="text-sm">${like}</span>
              </div>

              <div class="like-cont flex gap-2 items-center">
                <span class="text-lg"><i class="fa-solid fa-bookmark"></i></span> <span class="text-sm">${save}</span>
              </div>

              <div class="like-cont flex gap-2 items-center">
                <span class="text-lg"><i class="fa-solid fa-comments"></i></span> <span class="text-sm">${comments}</span>
              </div>

            </div>
            <p class="">${postDesc}</p>

            <div  class="read-more-cont flex justify-end mt-3">
             
              <button onclick="readMore(${postID})" class="my-btn ">read more</button>
            </div>
          </div>

        </div>
        <!-- ---------------------------------------------->

  `
  })
}

displayAllPosts(posts);

const allpostActionCont = document.querySelectorAll(".post-action-cont")
document.addEventListener("click", () => {
  allpostActionCont.forEach((item, ind) => {
    item.classList.remove("active-post-action-cont")

  })
})

const displayPostByCate = (cate) => {
  let finalData = posts.filter(item => {
    if (cate == item.postCate) {
      return item
    }
  })
  displayAllPosts(finalData)
}

// displaying category in navigation
const cateList = document.querySelector(".cate-list")
cateList.innerHTML = "";
category.forEach((cate, ind) => {
  cateList.innerHTML += `
  <li class="dropdown-link " onclick="displayPostByCate('${cate}')" >${cate}</li>
  `
})

