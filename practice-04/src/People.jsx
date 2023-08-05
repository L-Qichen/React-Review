import { Person } from "./Person";
import { people } from "./data"

const People = () => {
  return (
    <div className="main">
      {people.map((person) => {
        return (
          <Person key={person.id} {...person} />
        )
      })}
    </div>
  )
}
export default People;