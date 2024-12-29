'use client'
import { useFormStatus } from "react-dom";
export default function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className={` ${pending ? 'bg-slate-400 text-black' : "bg-teal-500"} w-full text-black rounded-sm p-2`}
      type="submit"
      disabled={pending}
    >
      {pending ? "Submitting" : "Submit"}
    </button>
  );
}
