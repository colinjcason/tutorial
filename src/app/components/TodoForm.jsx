import { createTask } from "../../../utils/actions";

const TodoForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full mb-8">
        <input
          type="text"
          className="input input-bordered w-full join-item"
          placeholder="type here"
          name="content"
        />
        <button className="btn btn-primary join-item" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
