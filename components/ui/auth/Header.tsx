import { FC } from "react";

interface HeaderProps {
  label: string;
}

const Header: FC<HeaderProps> = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl font-semibold">Auth 🔐</h1>
        <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
