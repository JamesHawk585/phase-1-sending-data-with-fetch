// Add your code here

function submitData(userName, userEmail) {
    const userData = {
        name: userName,
        email: userEmail
    };

    return fetch(`http://localhost:3000/users`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => { 
        const newId = data.id;
        const newIdElement = document.createElement("p");
        newIdElement.innerHTML = `New ID: ${newId}`;
        document.body.appendChild(newIdElement);
      })
      .catch(error => {
        const errorElement = document.createElement("p");
        errorElement.innerHTML = error.message;
        document.body.appendChild(errorElement);
      });
  }