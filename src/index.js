// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

function createContactRow(contact) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><img src="${contact.pictureUrl}" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
  `;

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  const deleteBtn = row.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    row.remove();
  });
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
const likeBtn = row.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });

  return row;
}

threeContacts.forEach(contact => {
  const row = createContactRow(contact);
  tableBody.appendChild(row);
});

  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener("click", () => {
  if (contacts.length === 0) return; // evita error si ya no quedan

  const randomIndex = Math.floor(Math.random() * contacts.length);
  const newContact = contacts.splice(randomIndex, 1)[0];

  const row = createContactRow(newContact);
  tableBody.appendChild(row);
});
