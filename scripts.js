document.addEventListener("DOMContentLoaded",function(){
    const Containerbox = document.getElementById("Container")
    Containerbox.innerHTML = ``
    const dataset = [
        // Here add the new calculator
        {
            type:"Beginner Friendly",
            tag:"CSS",
            img:"./SourseImges/3dcard.png",
            imgalt:"3d Card UI",
            title:"360 CSS Slider",
            postlink:"./3D Card/3dcard.html",
            githublink:"https://github.com/Souravhere/funwithsourav/tree/main/3D%20Card"
        }
    ]
    dataset.forEach(ele => {
        Containerbox.innerHTML += `
         <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg">
                <h3 class="mb-3 text-xl font-bold text-indigo-600">${ele.type}</h3>
                <div class="relative">
                  <img class="w-full rounded-xl" src="${ele.img}" alt="${ele.imgalt}" />
                  <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">${ele.tag}</p>
                </div>
                <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">${ele.title}</h1>
                <div class="flex items-center justify-between gap-3 w-full">
                    <div class="w-1/2">
                        <a href="${ele.postlink}" target="_blank"><p class="mt-4 mb-4 text-xl text-white bg-indigo-600 py-2 rounded-xl shadow-lg text-center hover:bg-indigo-400 transition duration-500">Demo</p></a>
                    </div>
                    <div class="w-1/2">
                        <a href="${ele.githublink}" target="_blank"><p class="mt-4 mb-4 text-xl text-white bg-green-600 py-2 rounded-xl shadow-lg text-center hover:bg-green-400 transition duration-500">Code</p></a>
                    </div>
                </div>
                </div>
            </div>
        `
    });
})