// load header
const footerContainer = document.querySelector('#footer');
const footerRequest = new XMLHttpRequest();
footerRequest.open('GET', 'footer.html');
footerRequest.onload = function() {
  footerContainer.innerHTML = footerRequest.responseText;
};
footerRequest.send();
