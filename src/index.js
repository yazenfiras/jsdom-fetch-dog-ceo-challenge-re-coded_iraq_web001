document.addEventListener('DOMContentLoaded', function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl).then(res=>{return res.json()})
  .then(json=>
   {
  let all=json.message
  for (let i of all)
  {
    let imgsDiv=document.getElementById("dog-image-container");
    let newImage=document.createElement("img")
    newImage.src=`${i}`
    imgsDiv.appendChild(newImage)
  }
  })

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  fetch(breedUrl).then(res=>{
    return res.json()
  })

  .then(json=>{

    let all2=json.message



    for(let f in all2)
    {
      let d = document.getElementById("dog-breeds")

      let li=document.createElement("li")
        li.classList.add("newcolor")

      li.innerHTML=`${f}`

      d.appendChild(li)



      })


  }
  let m=  li.addEventListener("click",()=>{

        newcolor.style.color="red"
  

   })



})
