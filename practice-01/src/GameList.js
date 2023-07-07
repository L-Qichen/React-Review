import { Game } from "./Game";
import { games } from "./data";

const GameList = () => {
  return (
    <section className="gamelist">
      {games.map((game) => {
        return (
          <Game game={game} key={game.id} />
        )
      })}
    </section>
  )
}
export default GameList;