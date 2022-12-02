import  "./form";
import "./submit";


import logo from '../images/logo.png';
import bear from '../images/bear.png';
import dog from '../images/dog.png';

window.addEventListener('load', function () {
    document.getElementById('logo').src = logo;
    document.getElementById('bearThumbnail').src = bear;
    document.getElementById('dogThumbnail').src = dog;
  });