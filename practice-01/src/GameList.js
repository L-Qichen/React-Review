import { Game } from "./Game";
import { games } from "./data";

const GameList = () => {
  return (
    <>
      <h1 className="header">amazon best sellers</h1>
      <main className="gamelist">
        {games.map((game) => {
          return (
            <Game game={game} key={game.id} />
          )
        })}
      </main>
    </>
  )
}
export default GameList;