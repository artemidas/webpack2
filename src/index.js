const button = document.createElement('button');

button.innerText = 'Click me!'
button.onclick = () => {
  System.import('./image_module').then(module =>
    module.default()
  );
}
document.body.appendChild(button);
