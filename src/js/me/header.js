// load header
const headerContainer = document.querySelector('#header');
const headerRequest = new XMLHttpRequest();
headerRequest.open('GET', 'header.html');
headerRequest.onload = function() {
  headerContainer.innerHTML = headerRequest.responseText;
};
headerRequest.send();
