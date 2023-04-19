// Create a new Request object
const request = new Request('js/internacion.json');

// Send the request
fetch(request)
    // Parse the response into a JavaScript object
    .then(response => { return response.json(); })
    // Use the data to create a function that randomly selects a user
    .then(data => {
        const randomUser = () => {
            const randomIndex = Math.floor(Math.random() * data.length);
            return data[randomIndex];
           
        }
        
    });

console.log(data);

import jsonData, { length } from 'js/internacion.json';
let randomIndex = Math.floor(Math.random() * length);
let randomRegister = jsonData[randomIndex];
