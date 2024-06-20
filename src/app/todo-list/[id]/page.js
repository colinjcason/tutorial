import Link from "next/link"
import { getTask } from "../../../../utils/actions"
import EditForm from "../../components/EditForm"

const SingleTodo = async ({ params }) => {
  const task = await getTask(params.id)
  return (
    <div className="mb-16">
      <Link href="/todo-list" className="btn btn-accent">Back</Link>
      <EditForm task={task} />
    </div>
  )
}

export default SingleTodo