"use client";
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { doCredentialLogin } from "../app/actions";
import { useRouter } from "next/navigation";

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

export function LoginForm() {

  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const response = await doCredentialLogin(formData);

      if(!!response.error) {
        console.error(response.error);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleFormSubmit}>
        <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <input id="email" type="email" name="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <input id="password" type="password" name="password" required />
            </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign in</Button>
        </CardFooter>
      </form>
    </Card>
  )
}