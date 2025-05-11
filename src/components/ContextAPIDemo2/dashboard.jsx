import { useUserContext } from './UserContext'

 const Dashboard = () => {
    const { user } = useUserContext();
  return (
   <>
    <div>Dashboard</div>
    <div>Username : {user}</div>
   </>

  )
}

export default Dashboard;