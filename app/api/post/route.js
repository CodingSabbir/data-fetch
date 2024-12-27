import getJoke from "@/utils/getJoke";

export const dynamic = "force-dynamic"; // route cashing er jonno use 
export async function GET(request) {
  const posts = await getJoke();
  return Response.json(posts)
}
