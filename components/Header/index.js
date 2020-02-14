// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //create elements
    let header = document.createElement('div');
    let date = document.createElement('span');
    let headLine = document.createElement('h1');
    let temp = document.createElement('span');

    //add classes
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //add attributes
    date.textContent = 'MARCH 28, 2019';
    headLine.textContent = 'Lambda Times';
    temp.textContent = '98°';

    //append
    header.append(date);
    header.append(headLine);
    header.append(temp);

    return header
}

let headerContainer = document.querySelector('.header-container');
headerContainer.append(Header());
