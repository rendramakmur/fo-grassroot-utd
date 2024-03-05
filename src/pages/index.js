import Banner from '@/components/Banner'
import GameList from '@/components/GameList'
import Meta from '@/components/Meta'
import fetchData from '@/helpers/fetchData'
import { useState } from 'react'

export default function Home({ games }) {
  return (
    <main className="mx-auto md:max-w-md h-screen w-screen">
      <Meta title="Home" description="Grassroot United FC - Football for everyone | Join us and play fun football together" />
      <Banner />
      <GameList games={games} />
    </main>
  )
}

export async function getStaticProps() {
  try {
    const gameListResponse = await fetchData(`/api/game?page=1&limit=3`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return {
      props: {
        games: gameListResponse
      }
    }
  } catch (error) {
    console.error(error)

    return {
      props: {
        games: {
          data: {
            data: [],
            totalPage: 1
          }
        }
      }
    }
  }
}