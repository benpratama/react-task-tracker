import { FaTimes } from 'react-icons/fa'
function Task({task,f_onDelete,f_onReminder}){
    // console.log(task)
    return (
        <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={()=>{f_onReminder(task.id)}}>
            <h3>
                {task.text} 
                {/* 
                    onClick={()=>{f_onDelete(task.id)}}
                    jadi kalo mau kirim parameter ke function itu harus bikin function cursor
                    kalo engak nanti dia bakal dijalnin pas lagi render                
                */}
                <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>{f_onDelete(task.id)}}/>
            </h3>
            <h5>{task.day}</h5>
        </div>
    )
}
export default Task;