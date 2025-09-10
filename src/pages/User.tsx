import { UserCard } from "@/components/UserCard/UserCard"
import { selectUser } from "@/redux/features/user/userSlice"
import { useSelector } from "react-redux"

export const User = () => {
  const users = useSelector(selectUser)
  return (
    <div className="mt-5">
      <div className="my-5 flex justify-between">
        <h2 className="text-2xl font-bold">Users</h2>
      </div>
      {users?.map((user: any) => {
        return <UserCard user={user}/>
      })}
    </div>
  )
}
