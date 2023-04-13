create view todos_with_tags
as
SELECT * , group_concat(tag_id), group_concat(name)  FROM todos 
    JOIN todos_tags ON todos_tags.todo_id = todos.id
    JOIN tags ON todos_tags.tag_id = tags.id
    
    group by todo_id;

