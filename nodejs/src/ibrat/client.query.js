const createUser = `
  mutation {
    createUser(
      firstName: "New user first name"
      lastName: "New user last name"
      age: "New user age"
    ) {
      id
      fullName {
        firstName: String
        lastName: String
      }
      age
    }
  }
`;

const updateUser = `
  mutation {
    updateUser(
      id: 1
      firstName: "Updated user first name"
      lastName: "Updated user last name"
      age: "Updated user age"
    ) {
      id
      fullName {
        firstName: String
        lastName: String
      }
      age
    }
  }
`;

const deleteUser = `
  mutation {
    deleteUser(id: 1){
      id
    }
  }
`;

const createTodo = `
  mutation {
    createTodo(
      title: "New todo title"
      description: "New todo description"
      userId: 1
    ) {
      id
      content {
        title
        desctiption
      }
    }
  }
`;

const updateTodo = `
  mutation {
    updateTodo(
      id: 1
      title: "Updated todo title"
      description: "Updated todo description"
      userId: 1
    ) {
      id
      content {
        title
        desctiption
      }
    }
  }
`;

const deleteTodo = `
  mutation {
    deleteTodo(id: 1){
      id
    }
  }
`;

const getUserById = `
  query {
    getUserById(id: 1){
      fullName {
        firstName
        lastName
      }
      age
    }
  }
`;

const getTodoById = `
  query {
    todo(id: 1){
      content {
        title
        description
      }
      user {
        fullName {
          firstName
          lastName
        }
        age
      }
    }
  }
`;

const getTodos = `
  query {
    todos(limit: 2){
      content {
        title
        description
      }
      user {
        fullName {
          firstName
          lastName
        }
        age
      }
    }
  }
`;

module.exports = {
  Query: {
    getTodoById,
    getTodos,
    getUserById,
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
    createTodo,
    updateTodo,
    deleteTodo,
  },
};
