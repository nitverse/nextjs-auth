import { FC } from "react";
import {auth, signOut} from '@/auth'
import { Button } from "@/components/ui/button";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
    const session = await auth();

  return( 
        <div>
            {JSON.stringify(session)}
            <form action= {async () => {
                "use server";
                await signOut();
            }}>
                <Button>
                    Sign Out
                </Button>
            </form>
        </div>
);
};

export default page;
