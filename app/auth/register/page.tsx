import LoginForm from "@/components/ui/auth/LoginForm";
import RegisterForm from "@/components/ui/auth/RegisterForm";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
        <RegisterForm />
    </div>
  );
};

export default page;
