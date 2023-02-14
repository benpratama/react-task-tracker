import Task from "./Task";
// const tasks = [
//     {
//         id:1,
//         text:'going to gym',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true
//     },
//     {
//         id:2,
//         text:'shop meal',
//         day: 'Feb 6th at 2:30pm',
//         reminder: false
//     }
// ]

function Tasks(props){
    // console.log(props)
    return (
        <>
            {props.tasks.map(
                task=>(<Task key={task.id} task={task} f_onDelete={props.f_onDelete} f_onReminder={props.f_onReminder} />)
                )
            }
        </>
    )
}
export default Tasks;