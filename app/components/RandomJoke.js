import getJoke from "@/utils/getJokeAxios"

export default async function RandJoke(){
    const joke= await getJoke()
return(
    <div>
        <h2>{joke.data.value}</h2>
    </div>
)
}