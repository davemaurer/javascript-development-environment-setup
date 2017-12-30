import {getUsers} from './api/userApi';

// Populate table of users via API call
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
    // Note backticks surrounding the <tr></tr> because we are using an ES6 template string format.
  });

  global.document.getElementById('users').innerHTML = usersBody;
});
