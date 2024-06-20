import Drinks from "../components/Drinks"

const Bar = async () => {
  const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z")
  if(!res.ok) {
    throw new Error("failed request")
  }
  const data = await res.json()

  return (
    <Drinks drinks={data.drinks} />
  )
}

export default Bar