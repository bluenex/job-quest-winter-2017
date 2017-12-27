# TODO App

This is a note to myself on how to run these components. 

### Requirements

- MongoDB

### Steps

- Run database, in this project I put `db` folder in root of the `backend_part` but is ignored by `.gitignore`.

```sh
mongod -dbpath ./backend_path/db
```

- To use MongoDB shell, use `mongo` command.
- Run backend using `nodemon` in the `backend_part` dir.

```sh
cd backend_part
nodemon
```

- Finally, run frontend.

```sh
cd frontend_part/todoapp_front`
npm start
```

### Post Note

- Postman is a good friend for api testing, make friend with it.