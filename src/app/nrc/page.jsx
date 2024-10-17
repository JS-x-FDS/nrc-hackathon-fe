import Detail from "@/app/components/jds-template";
import { auth } from "@/auth";
import Login from "@/app/login/page";

const Page = async () => {
  const session = await auth();
  if (!session) return <Login />;
  return <Detail />;
};

export default Page;
