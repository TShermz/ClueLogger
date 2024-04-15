import { redirect, json } from "react-router-dom";

export async function auth(data) {
  //get url data params
  const { authData, mode } = data;

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode.", status: 422 });
  }

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "mode": "no-cors"
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
  console.log(resData);

  return redirect("/");
}

export async function logout() {
  const response = await fetch("http://localhost:8080/logout", {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw json({ message: "Could not authenticate user", status: 500 });
  }

  // const user = await response.json();

  return redirect('/');
}

export async function getSession() {
  const response = await fetch("http://localhost:8080/", {
    method: "GET",
    headers: {
      "mode": "no-cors"
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw json({
      message: "Could not check authentication status",
      status: 500,
    });
  }

  const user = await response.json();

  return user;
}
