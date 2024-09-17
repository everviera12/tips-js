const getData = async (url) => {
  try {
    console.log(`Fetching data from: ${url}`);
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Response status: ${response.status}`);
      return;
    }

    const data = await response.json();

    console.table(data.slice(0, 3));
    // console.table(data.map(user => user.username));

    const primerosTresUsuarios = data.slice(0, 3).map(user => user.username);
    console.log('Primeros 3 nombres de usuario:', primerosTresUsuarios);
    console.log('Primeros 3 nombres de usuario:', JSON.stringify(primerosTresUsuarios));

  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
};

getData('https://jsonplaceholder.typicode.com/users');
