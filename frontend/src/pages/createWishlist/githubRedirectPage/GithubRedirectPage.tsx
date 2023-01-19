import {useSearchParams} from "react-router-dom";
import axios from "axios";
import {useEffect} from "react";

export default function GithubRedirectPage(){

    const [searchParams] = useSearchParams()

    useEffect(sendCodeToBackend, [])

    function sendCodeToBackend(){
        axios.post("/api/users/oauth/github", searchParams.get("code"), {
            headers:{
                "Content-Type": "test/plain"
            }
        })
    }

    return(
        <div>
            <p>Welcome Back
            Code: {searchParams.get("code")}
            </p>
        </div>
    )
}