import { Person } from "./Person";
import { people } from "./data";
import './Style.css';

const People = () => {
  return (
    <>
      {people.map((person) => {
        return (
          <div className="main" key={person.id}>
            <Person {...person} />
          </div>
        )
      })}
    </>
  )
}
export default People;