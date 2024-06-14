import { log } from 'console'
import React from 'react'

const Bar = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z")
  if(!res.ok) {
    throw new Error("failed request")
  }
  const data = await res.json()
  console.log(data)


  return (
    <div>Bar</div>
  )
}

export default Bar