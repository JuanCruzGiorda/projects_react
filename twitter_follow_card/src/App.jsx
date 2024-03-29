import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
{
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
},
{
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
},
{
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
},
{
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
},
{
    userName: 'MoureDev',
    name: 'Brais Moure',
    isFollowing: false
},
{
    userName: 'SoyDalto',
    name: 'Soy Dalto',
    isFollowing: true
}
]

export function App () {
return (
    <section className='App'>
    {
        users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
        >
            {name}
            </TwitterFollowCard>
        ))
    }
    </section>
)
}