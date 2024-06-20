import Image from "next/image"
import Link from "next/link"

const Drinks = async ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks?.map((drink) => (
        <li key={drink.idDrink}>
          <Link href={`/bar/${drink.idDrink}`}>
            <div className="relative h-60 w-60 mb-4">
              <Image
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 100vw"
                className="rouned-md object-cover"
              />
              {drink.strDrink}

            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Drinks