import './style.css';
import small from '../assets/small.jpeg';
import big from '../assets/big.jpeg';

const smallImg = document.createElement('img')

smallImg.src = small;

document.body.appendChild(smallImg);

const bigImg = document.createElement('img')

bigImg.src = big;

document.body.appendChild(bigImg);