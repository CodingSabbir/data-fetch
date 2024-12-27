import getJoke from "@/utils/getJoke";
import RandJoke from "./components/RandomJoke";
export const revalidate = 10;

export default async function Home() {
  const joke = await getJoke();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>{joke.value}</h1>
      <RandJoke/>
    </div>
  );
}
