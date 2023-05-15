const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  //Add a header tag to the div
  const root = document.getElementById("root");
  const h1 = document.createElement("h1");
  h1.innerHTML = "FREELANCERS";
  root.appendChild(h1);

  //creates an unordered list with the user information
  const ul = document.createElement("ul");
  for (let i = 0; i < users.length; i++) {
    const li = document.createElement("li");
    li.innerHTML =
      "<b>Name: </b>" +
      users[i].name +
      ", <b>Age: </b>" +
      users[i].age +
      ", <b>Occupation: </b>" +
      users[i].occupation;
    ul.appendChild(li);
  }

  //adds unordered list to the div
  root.appendChild(ul);
}

//call the main function
main();
