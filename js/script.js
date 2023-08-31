const dataLoad = async (seeMore) => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json();
    const mainData = data.data.tools
    // console.log(mainData);
    dipsPlayData(mainData, seeMore);
};


const dipsPlayData = (data, seeMore) => {
    // console.log(data);
    const dataContainer = document.getElementById('ai-container');

    const showMoreBtn = document.getElementById('seeMore')
    if (!seeMore) {
        showMoreBtn.classList.remove('hidden')
    }
    else {
        showMoreBtn.classList.add('hidden')
    }
    if (!seeMore) {
        data = data.slice(0, 6);
    }
    data.forEach(element => {
        // console.log(element)
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
          <div class="p-4"> 
         <button onclick ="details('${element.id}') ; my_modal_4.showModal()" class="btn bg-[#FEF7F7] rounded-full"> <i class="fa-solid fa-arrow-right text-[#EB5757]"></i></button>
          </div>
         </div>
         
        `
        dataContainer.appendChild(div);
    })
}


const details = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const data = await res.json();
    const detailsData = data.data;
    console.log(detailsData);
    //
    const detailContainer = document.getElementById('details-container');
    const divLeft = document.createElement('div');
    divLeft.classList = 'border-2 border-[#EB5757] p-7 w-[60%] rounded bg-orange-50'
    const divRight = document.createElement('div');
    divRight.classList = 'shadow p-7 rounded w-[40%]'
    detailContainer.textContent = '';

    divLeft.innerHTML = `
            <h2 class="text-2xl font-semibold pr-2">${detailsData?.description ? detailsData.description : "not available"}</h2>
           <div class="flex mt-5 gap-4 items-center">
              <div class="bg-white p-4 text-center rounded-lg"><h2 class="px-5 text-[#03A30A] font-extrabold">${detailsData.pricing[0].price} ${detailsData.pricing[0].plan}</h2></div>
              <div class="bg-white p-4 text-center rounded-lg"><h2 class="px-5 text-[#F28927] font-extrabold" >${detailsData.pricing[1].price} ${detailsData.pricing[1].plan}</h2></div>
              <div class="bg-white p-4 text-center rounded-lg"><h2 class="px-3 text-[#EB5757] font-extrabold">${detailsData.pricing[2].price} ${detailsData.pricing[2].plan}</h2></div>
           </div>
           <div class="flex justify-around mt-5">
              <div>
                <h1 class="text-2xl font-semibold mb-4">features</h1>
                    <li class="text-[#585858] font-normal">${detailsData.features[1].feature_name}</li>
                    <li class="text-[#585858] font-normal">${detailsData.features[2].feature_name}</li>
                    <li class="text-[#585858] font-normal">${detailsData.features[3].feature_name}</li>
              </div>
              <div>
                <h1 class="text-2xl font-semibold mb-4">Integrations</h1>
                    <li class="text-[#585858] font-normal">${detailsData.integrations[0]}</li>
                    <li class="text-[#585858] font-normal">${detailsData.integrations[1]}</li>
                    <li class="text-[#585858] font-normal">${detailsData.integrations[2]}</li>
            </div>
           </div>
       `
    divRight.innerHTML = `
    <img class="w-[400px]" src=${detailsData?.image_link[0]} />
    <h2 class="text-center font-semibold text-2xl mt-5">${detailsData.input_output_examples[0].input}</h2>
    <h2 class="text-center text-[#585858] font-normal mt-2 px-4">${detailsData.input_output_examples[0].output}</h2>
       `
    detailContainer.appendChild(divLeft);
    detailContainer.appendChild(divRight);
}



const seeMore = () => {
    dataLoad(true);
};


dataLoad();



