import React from 'react'
import { useEffect } from 'react'
import { useLocation,useParams} from 'react-router-dom'
function Category() {
const location = useLocation()
const params=useParams()
  useEffect(() => {
   console.log("🚀 ~ file: App.js ~ line 23 ~ Profile ~ params", params)

 })

  return (
    <div><h1>Category page</h1></div>
  )
}

export default Category