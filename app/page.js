import getJoke from "@/utils/getJoke";
import { cookies } from 'next/headers'

export default async function Home() {
  const theme = cookies().get('theme')
  const joke= await getJoke()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>{joke.value}</h1>
    </div>
  );
}
