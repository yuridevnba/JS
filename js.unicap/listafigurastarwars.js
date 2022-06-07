const btnShow = document.getElementById('btn');
const btnNext = document.getElementById('btn-2');
const btnPrevious = document.getElementById('btn-3');
const list = document.getElementById('list');

let currentPage = 'https://swapi.dev/api/people';
let nextPage = null;
let previousPage = null;


  const ListStarWarsPeople = () =>{
      fetch(currentPage)
      .then((res) =>{
          return res.json();
        })
    .then((data)=>{
        let result = data.results
        nextPage = data.next
        previousPage = data.previous
        ShowListStarWars(result)
    })
    .catch((error)=>{
        console.log(error)
    })
}

const NextPage = () =>{
    currentPage = nextPage;
    nextPage = null;
    ListStarWarsPeople();
}

const PreviousPage = () =>{
    currentPage = previousPage;
    previousPage = null;
    ListStarWarsPeople();
}

const ShowListStarWars = (result) =>{
  list.innerHTML = '';
  let r = result
  let row;
  let column;

  for (let i = 0; i < r.length; i++) {

      row = document.createElement('tr')
      let {name,height,mass,gender,birth_year,skin_color,eye_color} = r[i]

      column = document.createElement('td')
      column.appendChild(document.createTextNode(name))
      row.appendChild(column)
      list.appendChild(row)

      column = document.createElement('td')
      column.appendChild(document.createTextNode(birth_year))
      row.appendChild(column)
      list.appendChild(row)


      column = document.createElement('td')
      column.appendChild(document.createTextNode(height))
      row.appendChild(column)

      column = document.createElement('td')
      column.appendChild(document.createTextNode(gender))
      row.appendChild(column)

      column = document.createElement('td')
      column.appendChild(document.createTextNode(mass))
      row.appendChild(column)

      column = document.createElement('td')
      column.appendChild(document.createTextNode(eye_color))
      row.appendChild(column)

      column = document.createElement('td')
      column.appendChild(document.createTextNode(skin_color))
      row.appendChild(column)
  }

}

btnShow.onclick = ListStarWarsPeople;
btnNext.onclick = NextPage;
btnPrevious.onclick = PreviousPage; 
 93  
