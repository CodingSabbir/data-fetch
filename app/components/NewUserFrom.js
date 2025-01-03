import { addUser } from "@/action/User";
import Button from "./ui/Button";
export default function NewUser() {
  return (
    <form action={addUser}>
      <div className="bg-slate-200 mb-5 py-5">
        <h1 className="text-center font-semibold text-4xl py-5">
          Register Form
        </h1>
        <div className="container mx-auto p-10 bg-white shadow-md">
          <div>
            <input
              className="p-2 w-full bg-black text-md border outline-none text-white rounded-sm"
              name="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mt-2">
            <input
              className="p-2 w-full bg-black text-md border outline-none text-white rounded-sm"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mt-2">
          <Button/>
          </div>
        </div>
      </div>
    </form>
  );
}
