import './style.css';
import small from '../assets/small.jpeg';


export default () => {
  const smallImg = document.createElement('img');

  smallImg.src = small;

  document.body.appendChild(smallImg);
}