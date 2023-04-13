export const typeDefs = `
    type Query {
        hello: String
        goodbye: String

        users: [User]
        user(id: ID!): User
        todos: [Todo]
        todo(id: ID!): Todo
    }


    type User {
        id: ID!
        username: String
        name: String
        email: String
        todos: [Todo]
    }

    type Todo {
        id: ID!
        user_id: ID
        title: String
        description: String
        done: Boolean
        user: User
    }
`;
