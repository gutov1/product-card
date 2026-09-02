const usersContainer = document.querySelector('#users-container');
const loadingScreen = document.querySelector('#loading-screen');
const errorScreen = document.querySelector('#error-screen');
const emptyScreen = document.querySelector('#empty-screen');
const infoMessage = document.querySelector('#info-message');
const userCardTemplate = document.querySelector('#user-card-template');

async function fetchUsersFromServer() {
  try {
    loadingScreen.hidden = false;
    errorScreen.hidden = true;

    await new Promise(resolve =>  {
      setTimeout(resolve, 2000); 
    });

    const response = await fetch('./users.json');

    if (!response.ok) {
      throw new Error('Не удалось загрузить пользователей');
    }

    const data = await response.json();

    if (!Array.isArray(data.users)) {
      throw new Error('Неверный формат данных');
    }

    saveUsers(data.users);
    renderUsers(data.users);
  } catch (error) {
    loadingScreen.hidden = true;
    errorScreen.hidden = false;
    console.error(error);
  }
}

function renderUsers(users) {
  usersContainer.innerHTML = '';

  loadingScreen.hidden = true;
  errorScreen.hidden = true;
  infoMessage.hidden = true;

  if (users.length === 0) {
    emptyScreen.hidden = false;
    return;
  }

  emptyScreen.hidden = true;

  users.forEach(user => {
    const card = userCardTemplate.content.cloneNode(true);

    card.querySelector('.user-card__firstname').textContent = user.name;
    card.querySelector('.user-card__surname').textContent = user.surname;
    card.querySelector('.user-card__id-value').textContent = user.id;
    card.querySelector('.user-card__email').textContent = user.email;
    card.querySelector('.user-card__age').textContent = user.age;

    const deleteButton = card.querySelector('.user-card__delete');

    deleteButton.addEventListener('click', () => {
      const filteredUsers = users.filter(currentUser => currentUser.id !== user.id);

      saveUsers(filteredUsers);
      renderUsers(filteredUsers);
    });

    usersContainer.append(card);
  });
}

function saveUsers(users) {
  const usersString = JSON.stringify(users);
  localStorage.setItem("users", usersString);
}

const getUsers = () => {
  const stored = localStorage.getItem("users");

  if (stored) {
    const users = JSON.parse(stored);
    renderUsers(users);
    return;
  }
  loadingScreen.hidden = false;
  fetchUsersFromServer();
};

const deleteAllUsersBtn = document.querySelector('#btn-delete-all');
deleteAllUsersBtn.addEventListener('click', () => {
  const users = [];

  saveUsers(users);
  renderUsers(users);
});

const loadUsersBtn = document.querySelector('#btn-get-all');
loadUsersBtn.addEventListener('click', () => {
  fetchUsersFromServer();
})

getUsers();