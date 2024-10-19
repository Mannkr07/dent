'use server'

import { signIn, signOut } from "../../app/auth"

export async function doCredentialLogin(formData) {
  try {

    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false
    })

    return response;

  } catch (error) {
    throw new Error("Invalid credentials")
  }
}

export async function doLogout() {
  await signOut();
}