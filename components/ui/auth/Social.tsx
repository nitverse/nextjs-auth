"use client";

import { FC } from "react";
import { Button } from "../button";
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"

interface SocialProps {}

const Social: FC<SocialProps> = ({}) => {
  return <div className="flex items-center w-full gap-x-2">
     <Button size={"lg"} variant={"outline"} className="w-full" onClick={()=> {}}>
        <FcGoogle size={25} />
     </Button>
     <Button size={"lg"} variant={"outline"} className="w-full" onClick={()=> {}}>
        <FaGithub size={25} />
     </Button>
  </div>;
};

export default Social;
