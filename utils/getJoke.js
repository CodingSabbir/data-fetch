export default async function getJoke(){
    const res= await fetch('https://api.chucknorris.io/jokes/random')
    if(!res.ok){
        throw new Error('Fetch Error....')
    }
    return res.json()
}