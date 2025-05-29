export default function TaskInputForm() {
    return (
        <form className="task-container-header">
            <label>
                <span className="label-text">Add Task:</span>
                <input type="text" name="task-name-input"/>
            </label>

            <label htmlFor="">
                <span className="label-text">Due to: </span>
                <input type="date" name="date-input" />
            </label>

            <button>Add task</button>
        </form>
    )
}