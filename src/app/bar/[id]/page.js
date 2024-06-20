import Image from "next/image"
import Link from "next/link"

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const getDrink = async (id) => {
  const res = await fetch(`${url}${id}`)
  if(!res.ok) {
    throw new Error("failed request")
  }
  return res.json()
}

const DrinkPage = async ({ params }) => {
  const data = await getDrink(params.id)
  const name = data?.drinks[0]?.strDrink
  const thumb = data?.drinks[0]?.strDrinkThumb
  const instructions = data?.drinks[0]?.strInstructions

  return (
    <div>
      <Link href="/bar" className="btn btn-primary mt-8">Back to bar</Link>
      <h1>{name}</h1>
      <Image src={thumb} alt={name} width={300} height={300} />
      <p>{instructions}</p>
    </div>
  )
}

export default DrinkPage