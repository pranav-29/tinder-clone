import React from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {

    const [marvel] = React.useState ([

        {
            name: 'Marvel Heros',
            url: 'https://th.bing.com/th/id/OIP.8qN5T-51uvZqOmI9drUiUAHaEO?w=285&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
        },

        {
            name: 'Iron Man',
            url: 'https://th.bing.com/th/id/OIP.BN2_dGHh3q8lYz5MEl03uQHaJ4?w=124&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
        },
        
        {
            name: 'Doctor Strange',
            url: 'https://imgix.bustle.com/inverse/20/bd/d9/2c/fded/4f08/b1fb/e6dbb7e8613a/doctor-strange.jpeg?w=710&h=943&fit=max&auto=format%2Ccompress&q=50&dpr=2'
        },

        {
            name: 'Captain Marvel',
            url: 'https://img.starbiz.com/resize/750x-/2019/03/07/captain-marvel-5d20.jpg'
        },

        {
            name: 'Star Lord',
            url: 'https://th.bing.com/th/id/OIP._N5hhPxHe60LWYqbj4_U4gHaKa?w=182&h=257&c=7&r=0&o=5&dpr=1.25&pid=1.7'
        },

        {
            name: 'Rocket',
            url: 'https://th.bing.com/th/id/OIP.JDK0pG_Pe5YFyjisFA0t4wHaNK?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
        },

        {
            name: 'Groot',
            url: 'https://th.bing.com/th/id/OIP.IY0uk8nrUYgDDQIOObV25gHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
        },

        {
            name: 'Gamora',
            url: 'https://th.bing.com/th/id/OIP.K9tqha5620JdWnBN956lvAHaJu?w=126&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
        },

        {
            name: 'Loki',
            url: 'https://www.xtrafondos.com/wallpapers/vertical/vota-por-loki-7605.jpg'
        },

        {
            name: 'Scarlet Witch',
            url: 'https://th.bing.com/th/id/OIP.i171G9REulV4lqrKfUHJ7AHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
        },

        {
            name: 'Hawk Eye',
            url: 'https://th.bing.com/th/id/OIP.f39npRuO9rqpAgXQwr8hggHaNL?w=182&h=324&c=7&r=0&o=5&dpr=1.25&pid=1.7'
        }

    ]);

  return (
    <div className='card-container'>
        {
            marvel.map( marvel => (
                <TinderCard
                className='swipe'
                key={marvel.name}
                preventSwipe={['up','down']}
                >
                    <div
                   style={ { backgroundImage: `url(${marvel.url})` } } 
                    className='card'
                    >
                        <h2>{marvel.name}</h2>
                    </div>
                </TinderCard>
            ))
        }
    </div>
  )
}

export default TinderCards