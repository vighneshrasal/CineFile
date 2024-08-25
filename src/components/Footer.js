export const Footer = () => {
  return (
      <footer className="bg-white border-t-2 border-gray-200 shadow dark:bg-gray-900">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 C™. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="https://www.instagram.com/vighnesh_rasal/" rel="noreferrer" target="_blank" className="hover:text-logoBlue me-4 md:me-6">Instagram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vighnesh-rasal/" rel="noreferrer" target="_blank" className="hover:text-logoBlue me-4 md:me-6">LinkedIn</a>
            </li>
            <li>
              <a href="mailto:vighneshrasal@gmail.com" rel="noreferrer" target="_blank" className="hover:text-logoBlue me-4 md:me-6">vighneshrasal@gmail.com</a>
            </li>
            <li>
              <a href="https://github.com/vighneshrasal" rel="noreferrer" target="_blank" className="hover:text-logoBlue">Github</a>
            </li>
          </ul>
        </div>
      </footer>
  )
}
