import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({api, title}) => {
  const {data : movies} = useFetch(api);

  useTitle(`${title} / CineFile`);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-4">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie)=> (
            <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}
