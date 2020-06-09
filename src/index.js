document.addEventListener('DOMContentLoaded', function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl).then(res=>{return res.json()})
  .then(json=>
   {
  let all=json.message
  for (let i of all)
  {

   let img = document.getElementById("img").src=i

  }

  })

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  fetch(breedUrl).then(res=>{
    return res.json()
  })

  .then(json=>{
      let d = document.getElementById("dog-breeds")

    let all2=json.message

    for(let f in all2)
    {
      let d = document.getElementById("dog-breeds")

   d.innerHTML=`<li>${f}</li>`;



    console.log(d)


  }
  d.innerHTML=`<li>${f}</li>`


   })



})
