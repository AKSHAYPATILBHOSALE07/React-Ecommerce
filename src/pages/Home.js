import React from 'react'
import Hero from '../components/Hero'
import ItemListContainer from '../components/ItemListContainer'

const Home = () => {
    return (
        <main>
            <Hero title="The King of Beer" />
            <ItemListContainer />  
        </main>
    )
}

export default Home
