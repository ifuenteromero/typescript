import userService, { User } from "../services/user-service";
import useFetchData from "./useFetchData";

const useUsers = () => useFetchData<User>(userService)

export default useUsers;