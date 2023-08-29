const dataLoad = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json();
    const mainData = data.data.tools
    // console.log(mainData);
    dipsPlayData(mainData);
};
const dipsPlayData = (data) => {
    const dataContainer = document.getElementById('ai-container');
    // console.log(dataContainer);
    let count = 0;
    data.slice(0, 6).forEach(element => {
        console.log(element)
        const div = document.createElement('div')
        div.classList = `card  bg-base-100 shadow-xl p-5`;
        div.innerHTML = `
        <figure class ="mb-4"><img class="w-300px" src=${element.image ? element.image : "image not fond"} /></figure>
        <h2 class="card-title">Features</h2>
        <ul>
         <li>${element.features[0] ? element.features[0] : ""}</li>
         <li>${element.features[1] ? element.features[1] : ""}</li>
         <li>${element.features[3] ? element.features[3] : ""}</li>
         </ul>
         <hr class="my-6">
         <div class="flex items-center justify-around">
         <div class="flex-1">
         <h2>${element.name ? element.name : ""}</h2>
         <div class="flex items-center gap-2">
           <i class="fa-solid fa-calendar-days"></i>
           <h2>${element.published_in ? element.published_in : ""}</h2>
         </div>
         </div>
          <div class="bg-[#FEF7F7] rounded-full p-4"> 
          <i class="fa-solid fa-arrow-right text-[#EB5757]"></i>
          </div>
         </div>
         
        `
        dataContainer.appendChild(div);
    })
}
dataLoad();
