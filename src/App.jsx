import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

const TagsList = [
  {
    "name": "🏠 Home",
    "path": "Home"
  },
  {
    "name": "🟨 JavaScript",
    "path": "JavaScript"
  },
  {
    "name": "🟦 TypeScript",
    "path": "TypeScript"
  },
  {
    "name": "🐍 Python",
    "path": "Python"
  },
  {
    "name": "♦️ Ruby",
    "path": "Ruby"
  },
  {
    "name": "⚙️ Rust",
    "path": "Rust"
  },
  {
    "name": "🐘 PHP",
    "path": "PHP"
  },
  {
    "name": "🤔 Haskell",
    "path": "Haskell"
  },
  {
    "name": "🐹 Golang",
    "path": "Golang"
  },
  {
    "name": "🤖 Kotlin",
    "path": "Kotlin"
  },
  {
    "name": "☕ Java",
    "path": "Java"
  }
]

const Tags = () => {

  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(TagsList)
  }, [])


  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6
       gap-2 text-center">
        {
          tags.map(tag => tag.path === "Home"
            ? <Link to={`/`} className="p-2 bg-cyan-600 rounded" key={tag.path}>{tag.name}</Link>
            : <Link to={`language/${tag.path}`} className="p-2 bg-cyan-600 rounded" key={tag.path}>{tag.name}</Link>)
        }
      </section>
    </>
  )
}

function App() {

  return (
    <main className="max-w-screen-md m-auto flex flex-col gap-2 min-h-screen justify-center px-4">
      <header className="flex flex-col justify-center gap-2">
        <h1 className="font-bold text-4xl text-center">Libros de Programación Gratis</h1>
        <Tags />
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-2">

        <Outlet />
      </section>
    </main>
  )
}

export default App