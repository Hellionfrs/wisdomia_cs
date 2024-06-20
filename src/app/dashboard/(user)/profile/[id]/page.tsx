import { fetchUser, updateUser } from "./actions";
import Form from "./form";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log(id);
  const user = await fetchUser(id);
  
  console.log(user);
  return (
    <div>
      <Form user={user} id={id} />
    </div>
  );
}
