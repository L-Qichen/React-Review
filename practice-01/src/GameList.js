import { Game } from "./Game";

import game01 from './img/Game01.jpg'
import game02 from './img/Game02.jpg'
import game03 from './img/Game03.jpg'
import game04 from './img/Game04.jpg'

const GameList = () => {
  return (
    <section className="gamelist">
      <Game game={{
        title: 'Mario Kart 8 Deluxe',
        platform: 'Nintendo Switch',
        img: game01,
        price: '$65.00',
      }} />
      <Game game={{
        title: 'The Legend of Zelda™: Tears of the Kingdom',
        platform: 'Nintendo Switch',
        img: game02,
        price: '$89.47',
      }} />
      <Game game={{
        title: 'Mario Party Superstars',
        platform: 'Nintendo Switch',
        img: game03,
        price: '$68.94',
      }} />
      <Game game={{
        title: 'Hogwarts Legacy',
        platform: 'PlayStation 4',
        img: game04,
        price: '$69.96',
      }} />
    </section>
  )
}
export default GameList;