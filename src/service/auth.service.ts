import axios from "axios";

import { ILogin, ISignUp } from "@/interface/user.interface";
export async function signUpService(params: ISignUp) {
  try {
    const { data } = await axios.post(
      "https://calmingcheese-us.backendless.app/api/data/Users",
      params
    );

    console.log(data);
  } catch (err) {
    throw err;
  }
}

export async function loginService(params: ILogin) {
  try {
    const { data } = await axios.get(
      `https://calmingcheese-us.backendless.app/api/data/Users?where=email%3D'${params.email}'%20and%20password%3D'${params.password}'`
    );

    console.log(data);
    return data[0];
  } catch (err) {
    throw err;
  }
}