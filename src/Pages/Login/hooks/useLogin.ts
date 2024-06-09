
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "../../../Redux/hooks";
import { useNavigate } from "react-router-dom";
import { setUserData } from '../../../Redux/userSlice'

interface CredentialResponse {
    credential?: string | undefined
}


const useLogin = () => {

    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSuccess = (credentialResponse: CredentialResponse) => {
        if (credentialResponse.credential) {
            const decoded = jwtDecode(credentialResponse.credential);
            dispatch(setUserData(decoded));
            navigate('/all');
            localStorage.setItem("userData", JSON.stringify(decoded))
        }
    }
    const onError = () => {
        alert('Login Failed');
    }


    return { onSuccess, onError }

}

export default useLogin