import LoginButton from "@/components/ui/auth/loginButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-400 to-violet-800">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Auth 🔐
        </h1>
        <p className="text-white space-y-6 text-lg">A Simple Auth Service</p>
      </div>
      <LoginButton>
        <Button className="space-y-6" variant="secondary" size="lg">
          Sign In
        </Button>
      </LoginButton>
    </main>
  );
}
