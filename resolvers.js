
import { all as allUsers , item as getUser  } from "./daos/users.dao.js"
import { all as allTodos , item as getTodo , allTodosByUser  } from "./daos/todos.dao.js"

export const resolvers = {
    Query: {
        hello: () => "hello world",
        goodbye: function() {
            return "bye"
        },
        users: async () => await allUsers(),
        user: async (_root, args) => await getUser(args.id),
        todos: async () => await allTodos(),
        todo: async (_, {id}) => await getTodo(id)
    },

    Todo: {
        user: async (root) => await getUser(root.user_id),
    },

    User: {
        todos: async (root) => await allTodosByUser(root.id),
    }
};