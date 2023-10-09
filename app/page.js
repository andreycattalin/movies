"use client"

import Peli from '@/components/Peli'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGI4OTE3NWI4Mjk5MzZjYTgyODVjNDE0NTk4MmExZSIsInN1YiI6IjY0MGVmNzkxZWRlMWIwMDBkOTc1YWZlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5VcgTce8OeSBvbVbb42XSi8NzzjsR0gkYSs5mtzbQo'
      }
    };

    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc', options)
      .then(response => response.json())
      .then(movies => {
        console.log(movies)
        setData(movies)
        setLoading(false)
      })
      .catch(err => console.error(err));
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <main className="grid grid-cols-3 md:grid-cols-4">
      {data.results.map(peli =>
        <Peli key={peli.id} peli={peli} />
      )}
    </main>
  )
}
