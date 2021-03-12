async function getAllCities() {
    let APIusa=
    await fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json ").then(resp => {
        
        return resp.json();
    }).catch(Error => {


    })
    return APIusa;
}
async function findOne(){
    let uuu = await gettAllCities();
    let html ='';
    uuu.forEach(element => {
       let htmlSegment=''
        if(element.city.toLowerCase().includes(document.getElementById("search").value.toLowerCase()))
        {
            console.log(element);
            htmlSegment=`<div class="city">
            <h1>${element.state}</h1>
            <h2>${element.city} </h2>
        </div>`;
        html += htmlSegment;
        }
    });
    let container = document.querySelector('.container');
    container.innerHTML = html;
}
getAllCities();
async function gettAllUsa(){
    let usa=  await fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
        .then(response => {
            return response.json();
        })
        .catch(error => {
            return error;
        });
        return usa;
    };
    async function findOne(){
        let uuu = await gettAllUsa();
        let html ='';
        uuu.forEach(element => {
           let htmlSegment=''
            if(element.city.toLowerCase().includes(document.getElementById("search").value.toLowerCase())  || element.state.toLowerCase().includes(document.getElementById("search").value.toLowerCase()))
            {

                console.log(element);
                htmlSegment=`<div class="city">
                <h1> State:${element.state}</h1>
                <h2>City:${element.city} </h2>
                <p>Longitude:${element.longitude}</p>
                <p>Population:${element.population}</p>
                <p>Rank:${element.rank}</p>
                <p>Growth:${element.growth_from_2000_to_2013}</p>
            </div>`;
            html += htmlSegment;
            }
        });
        let container = document.querySelector('.container');
        container.innerHTML = html;
    }