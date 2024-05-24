import { useAuthContext } from "../hooks/useAuthContext"

const Account = () => {
  const { user } = useAuthContext()

  return (
    <div className="bg-gray-300 min-h-[90vh] flex justify-center p-5">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg w-[1400px] py-5">
        <div className="bg-gray-400 "></div>
        <span>{user.email}</span>
      </div>
    </div>
  )
}

export default Account