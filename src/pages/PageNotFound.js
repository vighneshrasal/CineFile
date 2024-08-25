import { Link } from "react-router-dom"
import pgNtFndImg from "../assets/images/bubble-gum-error-404.gif"
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {

  useTitle(`Page Not Found`);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-400 font-bold mt-10 dark:text-gray-600">404, Page Not Found!</p>
          <a href="https://icons8.com/illustrations/author/7WmtYU90j36d" target="_blank" rel="noreferrer"><img src={pgNtFndImg} alt="404 Page Not Found" /></a>
        </div>
        <div className="flex justify-center">
          <Link to="/"> 
            <button className="w-50 text-white font-medium text-xl bg-logoBlue rounded-lg px-5 py-2.5 mr-2 mb-6 hover:bg-logoBlueDark">Back to CineFile</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
