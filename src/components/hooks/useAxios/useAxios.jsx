import axios from "axios";


const instance = axios.create({
    baseURL:'https://task-server-sage-sigma.vercel.app/api/v1',
    withCredentials: true,
})

const useAxios = () => {

instance.interceptors.response.use(
    (response) => {
        // console.log(response);
        return response;
    },
    (error) => {
        console.log('error from hook:' , error?.response?.status);
        // logOut();
        return Promise.reject(error);
    }
);
   return instance;
};

export default useAxios;