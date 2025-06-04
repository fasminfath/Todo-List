import './CSS/TodoItems.css'
import checkmark from './Assets/checkmark.png'
import not_tick from './Assets/not_tick.png'
import crosss from './Assets/crosss.png'

export const TodoItems = ({no,display,text,setTodos}) => {

    const deleteTodo = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo) => todo.no!==no);
        setTodos(data);
    }

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        for(let i = 0;i < data.length;i++)
            {
                if(data[i].no === no){
                    if (data[i].display==="") {
                       data[i].display = "line-through"; 
                    }
                    else
                    {
                        data[i].display = "";
                    }
                    break;
                }
            } 
            setTodos(data);
    }
    
  return (
    <div className='todoitems'>
        <div className= {`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
            {display===""?<img src={not_tick} alt="" />:<img src={checkmark} alt="" />}
            
            <div className="todoitems-text">
            {text}
            </div>
        </div>
        <img className='todoitems-crossicon' onClick={() => {deleteTodo(no)}} src={crosss} alt="" />
    </div>
  )
}
