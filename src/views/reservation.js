// @ts-nocheck
import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Reservation = () => {
  const param = useParams()
  const request = 'http://localhost:4000/admin/account/add-reservation-json'

  useEffect(() => {
    axios
      .get(`${request}/${param?.id}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [request])
  return <div></div>
}

export default Reservation
