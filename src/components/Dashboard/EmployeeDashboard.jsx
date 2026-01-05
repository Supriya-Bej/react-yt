import Header from '../Other/Header'
import Tasknumber from '../Other/Tasknumber'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header  changeUser={props.changeUser}  data={props.data}/>
      <Tasknumber data ={props.data}/>
      <TaskList data ={props.data}/>
    </div>
  )
}
export default EmployeeDashboard
