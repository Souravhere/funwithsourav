document.addEventListener("DOMContentLoaded",function(){
    // This code for the moblie menu
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
  
    menuToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });

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
    <a href="${ele.postlink}" target="_blank"><div class="flex gap-3 items-center justify-center mt-4 mb-4 text-xl text-white bg-indigo-600 py-2 rounded-xl shadow-lg text-center hover:bg-indigo-400 transition duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"  fill="currentColor" viewBox="0 0 24 24"><path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z"/></svg>
          <p>Demo</p>
    </div></a>
</div>
                    <div class="w-1/2">
    <a href="${ele.githublink}" target="_blank"><div class="flex gap-3 items-center justify-center mt-4 mb-4 text-xl text-white bg-indigo-600 py-2 rounded-xl shadow-lg text-center hover:bg-indigo-400 transition duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/></svg>
          <p>Demo</p>
    </div></a>
</div>
                </div>
                </div>
            </div>
        `
    });
})