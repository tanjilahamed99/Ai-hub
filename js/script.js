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
    data.forEach(element => {
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
        `
        dataContainer.appendChild(div);
    })
}
dataLoad();
