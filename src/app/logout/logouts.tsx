import { Button } from "@/components/ui/button";
import { destroySession } from "../_lib/session";

export default function LogoutButton() {
  return (
    <Button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        destroySession();
      }}
    >
      Logout
    </Button>
  );
}
