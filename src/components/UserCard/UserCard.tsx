import type { User } from "@/types"

interface UserCardProps {
    user: User
}
export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const { name, role } = user
    return (
        <>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition relative flex gap-5 mt-5 float-left ml-5 w-[45%]">
                {/* Delete Button */}
                <button
                    // onClick={onDelete}
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
                >
                    {/* If lucide-react installed, use <X size={18}/> */}
                    ✖
                </button>

                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-500 text-sm mt-1">{role}</p>
            </div>
        </>
    )
}
