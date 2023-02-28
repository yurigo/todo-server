const data = [
{ id: 1, text: "npm init", done: true },
{ id: 2, text: "npm i express", done: true },
{ id: 3, text: "npm i -D nodemon", done: false },
{ id: 4, text: "npm i cors", done: false },
];

GET http://localhost:3000/todos/

POST http://localhost:3000/todos/
{
{ text: "nuevo todo" }
}

PUT
PATCH

http://localhost:3000/todos/:ID
{
{ done: true }
}

DELETE

http://localhost:3000/todos/:ID
