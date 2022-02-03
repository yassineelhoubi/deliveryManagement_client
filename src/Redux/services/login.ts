import axios from "axios"

interface User {
  email: string
  password: string
  token?: string;
  role?: string;
  username?: string;
}
const login = async (user: User) => {
  let url = ''
  if (user.role == "admin") {
    url = 'http://localhost:3000/api/admin/login'
  } else {
    url = 'http://localhost:3000/api/auth/login'
  }
  const res = await axios.post(url, {
    email: user.email,
    password: user.password
  })
  return res

}
export { login }


// const UseFeth = (url) => {
//     const [data , setData] = useState()

//     useEffect(() => {
//         const res = await
//     },[url])
// return data
// }


// const {data } = UseFeth(url)