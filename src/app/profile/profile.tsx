import {useState} from "react";
import {signOut, useSession} from "next-auth/react";
import axios from "axios";

export default function Home() {

  const {data: session, status} = useSession({required: true});
  const [response, setResponse] = useState("{}");

  const getUserDetails = async (useToken: boolean) => {
    try {
      const response = await axios({
        method: "get",
        url: process.env.NEXT_PUBLIC_BACKEND_URL + "auth/user/",
        headers: useToken ? {Authorization: "Bearer " + session?.access_token} : {},
      });
      setResponse(JSON.stringify(response.data));
    } catch (error) {
      setResponse(error.message);
    }
  };

  if (status == "loading") {
    return <div>SPIN</div>;
  }

  if (session) {
    return (
      <div>
        <div>
          <h3>PK: {session.user.pk}</h3>
          <h3>Username: {session.user.username}</h3>
          <h3>Email: {session.user.email || "Not provided"}</h3>
          <code>
            {response}
          </code>
        </div>
        <div className="flex justify-content">
          <input type="button" className="text-red" onClick={() => getUserDetails(true)}>
            User details (with token)
          </input>
          <input type="button" className="text-red" onClick={() => getUserDetails(false)}>
            User details (without token)
          </input>
          <input type="button" className="text-red" onClick={() => signOut({callbackUrl: "/"})}>
            Sign out
          </input>
        </div>
      </div>
    );
  }

  return <></>;
}