import { connectToDatabase } from "@/lib/tododb";
import { Todo } from "@/models/Todo";


export default async function handler(req, res) {
    const db = await connectToDatabase(process.env.MONGODB_URI);

    switch (req.method) {
        case 'GET':
            const listTodos = await Todo.find();
            res.status(200).json({ listTodos });
            break;
        case 'POST':
            const addTodo = new Todo({
                description: req.body.description,
            });
            await addTodo.save();
            res.status(201).json({ addTodo });
            break;
        case 'DELETE':
            const { id } = req.query;
            const deletedTodo = await Todo.findByIdAndDelete(id);
            if (!deletedTodo) {
                return res.status(404).json({ error: 'Todo not found' });
            }
            res.status(200).json({ deletedTodo });

        default:
            res.status(405).end();
            break;
    }
}
