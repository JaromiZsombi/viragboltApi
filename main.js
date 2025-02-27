const urlAdat = `https://raw.githubusercontent.com/mkatay/projects_json/refs/heads/main/flowers`
const urlKateg = `https://raw.githubusercontent.com/mkatay/projects_json/refs/heads/main/flowers_categories`
let products = []

getData(urlKateg, renderButtons)
getData(urlAdat, setProducts)

function renderButtons(data){
	console.log(data)
	document.querySelector('.cards').innerHTML=''
	data.forEach(obj=>{
		document.querySelector('.cards').innerHTML+=`
		<button id="${obj.nev}" onclick="kategGombNyomas(${obj.nev})" class="gomb inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            ${obj.nev}
        </button>`
	})
}


function setProducts(data){
	products = data
	console.log(products)
}


function kategGombNyomas(e){
	document.querySelector('.seeds').innerHTML=''
	products.forEach(obj=>{
		if(obj.kategoria_nev == e.id){
			document.querySelector('.seeds').innerHTML+=`
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src=${obj.kepUrl} alt=${obj.nev} />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">${obj.nev}</h5>
        </a>
       
        <button popovertarget="mypopover-${obj.nev}" class="gomb inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            More details
             <svg class="rtl:rotate-180 w-3.5 h-2 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
        <div id="mypopover-${obj.nev}" class="border-gray-200 hover:bg-gray-50 group border-x border-y dark:border-gray-600 popover_container" popover>
            <img class="popover_img" src="${obj.kepUrl}" alt="">
            <p>Ár: ${obj.ar} </p>
			<p>Készleten: ${obj.keszlet}db</p>
			<p class="leiras">${obj.leiras} </p>
        </div>

    </div>
</div>`
		}
	})
}

function handleClick(e){
    e.preventDefault()
    console.log('ok');
    queryString=document.getElementById('queryString').value
    console.log(queryString)
	document.querySelector('.seeds').innerHTML=''
	products.forEach(obj=>{
		if(obj.leiras.includes(queryString) || obj.nev.includes(queryString)){
		document.querySelector('.seeds').innerHTML+=`
		<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<a href="#">
				<img class="rounded-t-lg" src=${obj.kepUrl} alt=${obj.nev} />
			</a>
			<div class="p-5">
				<a href="#">
					<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">${obj.nev}</h5>
				</a>

				<button popovertarget="mypopover-${obj.nev}" class="gomb inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					More details
					 <svg class="rtl:rotate-180 w-3.5 h-2 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
					</svg>
				</button>
				<div id="mypopover-${obj.nev}" class="border-gray-200 hover:bg-gray-50 group border-x border-y dark:border-gray-600 popover_container" popover>
					<img class="popover_img" src="${obj.kepUrl}" alt="">
					<p>Ár: ${obj.ar} </p>
					<p>Készleten: ${obj.keszlet}db</p>
					<p class="leiras">${obj.leiras} </p>
				</div>

			</div>
			</div>`
		}
	})
}