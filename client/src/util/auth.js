import { redirect } from "react-router-dom";
import Cookies from 'js-cookie';

export async function auth(data) {
  //get url data params
  const { authData, mode } = data;
  authData.token = "";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode.", status: 422 });
  }

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    credentials: "include",
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    const error = new Error("An error occured while logging in.");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user", status: 500 });
  }

  const resData = await response.json();
  // const token = resData.token;

  // localStorage.setItem("token", token);
  // const expiration = new Date();
  // expiration.setHours(expiration.getHours() + 1);
  // localStorage.setItem("expiration", expiration.toISOString());

  return redirect("/");
}

export async function logout() {
  Cookies.remove('clue_chaser_member_token');
  return redirect("/");
}
