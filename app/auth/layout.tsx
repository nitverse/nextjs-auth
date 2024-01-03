import { FC, ReactNode } from "react";

interface AuthLayoutProps {}

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-400 to-violet-800">
        {children}
    </div>
  );
};

export default AuthLayout;
