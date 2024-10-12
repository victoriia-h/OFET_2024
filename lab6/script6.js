document.getElementById('getUserBtn').addEventListener('click', function () {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            const usersContainer = document.getElementById('usersContainer');
            usersContainer.innerHTML = '';

            data.results.forEach(user => {
                const userInfo = `
                    <div class="user-info">
                        <img src="${user.picture.large}" alt="User picture">
                        <p><strong>Місто:</strong> ${user.location.city}</p>
                        <p><strong>Поштовий індекс:</strong> ${user.location.postcode}</p>
                        <p><strong>Координати:</strong> Широта: ${user.location.coordinates.latitude}, Довгота: ${user.location.coordinates.longitude}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                    </div>
                `;
                usersContainer.innerHTML += userInfo;
            });
        })
        .catch(error => console.error('Помилка:', error));
});
