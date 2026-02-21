import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FormatList from './components/FormatList';

export const loader = ({ params }) => {

  const { language } = params

  return { language }
}

const Book = ({ book }) => {

  const gradients = [

    "to-indigo-300",
    "to-indigo-400",
    "to-indigo-500",
    "to-indigo-600",

  ];

  const fromGradients = [

    "from-sky-300",
    "from-sky-400",
    "from-sky-500",
    "from-sky-600",

  ];

  const randomGradient =
    gradients[Math.floor(Math.random() * gradients.length)];

  const randomFromGradient =
    fromGradients[Math.floor(Math.random() * fromGradients.length)];

  return (
    <>
      <a href={book.url} target='_blank'>
        <article className="relative hover:cursor-pointer rounded overflow-hidden">
          <header className="absolute">
            <FormatList formats={book.formats} />
          </header>
          <div className={`bg-gradient-to-r ${randomFromGradient} ${randomGradient} w-full h-96 flex items-center justify-center text-center`}>
            <p className='font-bold text-xl'>{book.title}</p>
          </div>
          <footer className="absolute bottom-0 p-2 bg-slate-800 w-full  ">
            {/*<p className='font-semibold line-clamp-1'>{book.title}</p>*/}
            <p className='text-ellipsis overflow-hidden whitespace-pre'>Author: {book.author}</p>
          </footer>
        </article>
      </a>
    </>
  )
}

export const Books = () => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false)

  const { language } = useLoaderData();


  const loadBooks = async () => {
    try {
      setLoading(true)
      const result = await fetch("/books.json")

      const json = await result.json()
      setBooks(json.books)
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadBooks()
  }, [])

  if (loading) return (
    <p>Cargando...</p>
  )

  return (
    <>
      {
        books.map((book, index) => language.toLowerCase() === book.tags[0] && <Book key={index} book={book} />)
      }
    </>
  )
}

export default Books;
