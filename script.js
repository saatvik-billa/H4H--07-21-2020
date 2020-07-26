import {list, captions, getCoordinates} from './js/data'

var map;
let properties = []

function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 11,
    center: {lat: 30.2672, lng: -97.7431}
  });

  let markers = []
  list.forEach( (element, index) => {
    markers.push(element)
    markers[index].map = map
  })

  markers.forEach((element, index) => {
      addMarker(element, index)
      properties.push(element)
  }) 
}

window.initMap = initMap; 
window.addMarker = addMarker;

async function addMarker(obj, i) {
  await getCoordinates(obj);

  var marker = new google.maps.Marker(obj);
  var infowindow = new google.maps.InfoWindow({
      content: obj.title
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker)
  })
}

const insertOrganizations = list => {
  list.forEach(el => {
    const markup = `
    <div class="row list-item">
      <img src="${el.image}">
      <p>${el.title}</p>
      <a href="${el.squareLink}" class="list-donate" target="_blank">Donate</a>
    </div>
    `

    document.querySelector('.beneficiaries').insertAdjacentHTML('beforeend', markup);
  }); 
}; 

insertOrganizations(list); 

const changePhoto = direction => {
  let photoElements = document.getElementById('photo').src.split('/');
  
  let imageElements = photoElements[photoElements.length - 1].split('.');
  const number = imageElements[0] * 1; 
  
  let newNumber; 
  if (direction === 'back') number === 1 ? newNumber = 5 : newNumber = number - 1
  if (direction === 'forward') number === 5 ? newNumber = 1 : newNumber = number + 1
  
  let newURL; 
  if (newNumber === 1) newURL = `resources/img/${1}.png`
  else newURL = `resources/img/${newNumber}.JPG`

  document.getElementById('photo').src = newURL; 

  document.querySelector('.caption').innerHTML = `<p>${captions[newNumber - 1]}</p>`; 
}

function toggleButton() {
  var e = document.querySelector('.dropdown-content');
  if (e.style.display == 'block') {
    e.style.display = 'none';
  } else {
    e.style.display = 'block'; 
  }
};

// ---- EVENT LISTENERS ----

['.dropbtn', '.link'].forEach(element => {
  document.querySelectorAll(element).forEach(el => {
    el.addEventListener('click', () => {
      toggleButton();
    })
  })
});

document.querySelectorAll('.sm').forEach(element => {
  element.addEventListener('click', () => {
    window.alert('We do not have any social media accounts at this time.')
  })
});

document.querySelector('.back').addEventListener('click', () => {
  changePhoto('back');
}) 

document.querySelector('.forward').addEventListener('click', () => {
  changePhoto('forward');
})


