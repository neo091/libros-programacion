/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


// eslint-disable-next-line react-refresh/only-export-components
export const loader = ({ params }) => {

    const { language } = params
    return { language }
}

const BooksList = [
    {
        "title": "Eloquent JavaScript",
        "author": "Marijn Haverbeke",
        "formats": ["PDF", "HTML", "Epub", "Mobi"],
        "url": "https://midu.link/eloquent",
        "cover": "https://eloquent-javascript-es.vercel.app/img/cover.jpg",
        "other_url": [],
        "tags": ["javascript"]
    },
    {
        "title": "JavaScript, ¡Inspírate!",
        "author": "Ulises Gascón",
        "formats": ["eBook"],
        "url": "https://cardbiss.com/wp-content/uploads/2021/08/javascript-inspirate-2.pdf",
        "cover": "https://d2sofvawe08yqg.cloudfront.net/javascript-inspirate/s_hero?1620526425",
        "other_url": [],
        "tags": ["javascript"]
    },
    {
        "title": "JavaScript Moderno",
        "author": "Ilya Kantor",
        "formats": ["HTML"],
        "url": "https://es.javascript.info/",
        "cover": "https://es.javascript.info/ebook/js.png",
        "other_url": [],
        "tags": ["javascript"]
    },
    {
        "title": "MDN: Guía de JavaScript",
        "author": "MDN",
        "formats": ["HTML"],
        "url": "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide",
        "cover": "https://i.imgur.com/kJoysjK.png",
        "other_url": [],
        "tags": ["javascript"]
    },
    {
        "title": "Introducción a TypeScript",
        "author": "Emmanuel Valverde Ramos",
        "formats": ["HTML"],
        "url": "https://khru.gitbooks.io/typescript/",
        "cover": "https://static-00.iconduck.com/assets.00/text-x-typescript-icon-1490x2048-yrdkts7z.png",
        "other_url": [],
        "tags": ["typescript"]
    },
    {
        "title": "TypeScript en Profundidad",
        "author": "Basarat Ali Syed",
        "formats": ["HTML"],
        "url": "https://github.com/melissarofman/typescript-book",
        "cover": "https://static-00.iconduck.com/assets.00/text-x-typescript-icon-1490x2048-yrdkts7z.png",
        "other_url": [],
        "tags": ["typescript"]
    },
    {
        "title": "Introducción a TypeScript",
        "author": "Adictos al trabajo",
        "formats": [],
        "url": "https://mega.nz/file/TldlTZID#1A90Wn8xYloDvekX8rQewI3Yh8HMJXlufRUEWEcOzNU",
        "cover": "https://i.imgur.com/jkqlZc7.png",
        "other_url": [],
        "tags": ["typescript"]
    },
    {
        "title": "TypeScript para Principantes",
        "author": "Envato Tuts+",
        "formats": [],
        "url": "https://mega.nz/file/7hdwEY6b#ESsixH9wCUFhUugkRq8BEa1uZlzFXCJX6QxHdL5Yz9Q",
        "cover": "https://i.imgur.com/B4DO7Y9.png",
        "other_url": [],
        "tags": ["typescript"]
    },
    {
        "title": "Manual de TypeScript",
        "author": "Emmanuel Valverde, Pedro Hernández-Mora",
        "formats": [],
        "url": "https://mega.nz/#!qwcFDZ7a!ggLXIZ4c-O1Do0OEuvK0Mz8k39LvYQwdaJ2LtKKxgsE",
        "cover": "https://i.imgur.com/CxYCAHR.png",
        "other_url": [],
        "tags": ["typescript"]
    },
    {
        "title": "Uso avanzado de TypeScript en un ejemplo real",
        "author": "Nelio Software",
        "formats": ["HTML"],
        "url": "https://neliosoftware.com/es/blog/uso-avanzado-de-typescript/",
        "cover": "https://neliosoftware.com/es/wp-content/uploads/sites/3/2020/10/calendario.png",
        "other_url": [],
        "tags": ["typescript"]
    },
    {
        "title": "Aprendizaje TypeScript",
        "author": "RipTutorial",
        "formats": ["PDF"],
        "url": "https://riptutorial.com/Download/typescript-es.pdf",
        "cover": "https://i.imgur.com/iHDl8zi.png",
        "other_url": [],
        "tags": ["typescript"]
    },
    {
        "title": "Aprende Python",
        "author": "Sergio Delgado Quintero",
        "formats": ["PDF"],
        "url": "https://aprendepython.es",
        "cover": "https://i.imgur.com/kJoysjK.png",
        "other_url": [],
        "tags": ["python"]
    },
    {
        "title": "Python para todos",
        "author": "Raúl González Duque",
        "formats": ["PDF"],
        "url": "https://launchpadlibrarian.net/18980633/Python%20para%20todos.pdf",
        "cover": "https://i.imgur.com/lAbcK3o.png",
        "other_url": [],
        "tags": ["python"]
    },
    {
        "title": "Aprenda a pensar como un programador con Python",
        "author": "Allen Downey, Jeffrey Elkner, Chris Meyers",
        "formats": ["PDF"],
        "url": "https://argentinaenpython.com/quiero-aprender-python/aprenda-a-pensar-como-un-programador-con-python.pdf",
        "cover": "https://i.imgur.com/yKXZ3hp.jpeg",
        "other_url": [],
        "tags": ["python"]
    },
    {
        "title": "Aprende a programar con Ruby",
        "author": "RubySur",
        "formats": ["HTML"],
        "url": "http://rubysur.org/aprende.a.programar",
        "cover": "https://www.softzone.es/app/uploads-softzone.es/2022/01/Los-mejores-editores-de-codigo-para-programar-con-Ruby-930x487.jpg",
        "other_url": [],
        "tags": ["ruby"]
    },
    {
        "title": "Aprendizaje Rust",
        "author": "RipTutorial",
        "formats": ["PDF"],
        "url": "https://riptutorial.com/Download/rust-es.pdf",
        "cover": "https://i.imgur.com/Nt1w354.png",
        "other_url": [],
        "tags": ["rust"]
    },
    {
        "title": "El Lenguaje de Programación Rust (2016)",
        "author": "Jose Narvaez",
        "formats": ["HTML"],
        "url": "https://goyox86.github.io/elpr/README.html",
        "cover": "https://i.imgur.com/yKXZ3hp.jpeg",
        "other_url": [],
        "tags": ["rust"]
    },
    {
        "title": "El Lenguaje de Programación Rust (2024)",
        "author": "RustLang en Español",
        "formats": ["PDF"],
        "url": "https://book.rustlang-es.org",
        "cover": "https://i.imgur.com/yKXZ3hp.jpeg",
        "other_url": ["https://book.rustlang-es.org/print"],
        "tags": ["rust"]
    },
    {
        "title": "Comprehensive Rust",
        "author": "Google",
        "formats": ["PDF"],
        "url": "https://google.github.io/comprehensive-rust/es/",
        "cover": "https://i.imgur.com/yKXZ3hp.jpeg",
        "other_url": ["https://google.github.io/comprehensive-rust/es/print.html"],
        "tags": ["rust"]
    },
    {
        "title": "Rust para C#/.NET Developers",
        "author": "Microsoft",
        "formats": ["PDF"],
        "url": "https://dotnet-book.rustlang-es.org",
        "cover": "https://i.imgur.com/yKXZ3hp.jpeg",
        "other_url": ["https://dotnet-book.rustlang-es.org/print"],
        "tags": ["rust"]
    },
    {
        "title": "PHP, la manera correcta",
        "author": "Josh Lockhart, Phil Sturgeon",
        "formats": ["HTML"],
        "url": "https://phpdevenezuela.github.io/php-the-right-way/",
        "cover": "https://i.imgur.com/yKXZ3hp.jpeg",
        "other_url": [],
        "tags": ["php"]
    },
    {
        "title": "Programación en PHP a través de ejemplos",
        "author": "Manuel Palomo, Ildefonso Montero",
        "formats": ["PDF"],
        "url": "https://mega.nz/file/AFIkhRpC#8muP4I2jZRiNirbQmXDMBDf8QPxw5HkbbaGk2xzDvNE",
        "cover": "https://i.imgur.com/DpomI4Z.png",
        "other_url": [],
        "tags": ["php"]
    },
    {
        "title": "Piensa en Haskell",
        "author": "José A. Alonso Jiménez, Mª José Hidalgo Doblado",
        "formats": ["PDF"],
        "url": "http://www.cs.us.es/~jalonso/publicaciones/Piensa_en_Haskell.pdf",
        "cover": "https://i.imgur.com/5F9yEle.png",
        "other_url": [],
        "tags": ["haskell"]
    },
    {
        "title": "¡Aprende Haskell por el bien de todos!",
        "author": "",
        "formats": ["HTML"],
        "url": "http://aprendehaskell.es/main.html",
        "cover": "https://i.imgur.com/yKXZ3hp.jpeg",
        "other_url": [],
        "tags": ["haskell"]
    },
    {
        "title": "El pequeño libro de Go",
        "author": "Karl Seguin",
        "formats": ["PDF"],
        "url": "https://raulexposito.com/estaticos/pdf/go.pdf",
        "cover": "https://i.imgur.com/O9Fm3p4.png",
        "other_url": [],
        "tags": ["golang"]
    },
    {
        "title": "Go en Español",
        "author": "Nacho Pacheco",
        "formats": ["HTML"],
        "url": "https://nachopacheco.gitbooks.io/go-es/content/doc",
        "cover": "https://i.imgur.com/yKXZ3hp.jpeg",
        "other_url": [],
        "tags": ["golang"]
    },
    {
        "title": "Curso programación Android en Kotlin",
        "author": "AristiDevs",
        "formats": ["HTML"],
        "url": "https://cursokotlin.com/curso-programacion-kotlin-android/",
        "cover": "https://cursokotlin.com/wp-content/uploads/2020/07/suscr%C3%ADbete-1024x576.jpg",
        "other_url": [],
        "tags": ["kotlin"]
    },
    {
        "title": "Fundamentos de programación en Java",
        "author": "Jorge Martínez Ladrón",
        "formats": ["PDF"],
        "url": "https://www.tesuva.edu.co/phocadownloadpap/Fundamentos%20de%20programcion%20en%20Java.pdf",
        "cover": "https://i.imgur.com/w1FHG6t.png",
        "other_url": [],
        "tags": ["java"]
    }
]

const Book = ({ book }) => {

    return (
        <>
            <article className="relative hover:cursor-pointer" onClick={() => {
                window.open(book.url)
            }}>
                <header className="absolute">
                    {
                        book.formats.map((format, index) => <small className="py-1 px-2 bg-slate-500 bg-opacity-50 inline-block m-1 rounded" key={`${format}-${index}`}>{format}</small>)
                    }
                </header>
                <img src={book.cover} alt="" className=" block w-full h-full" />
                <footer className="absolute bottom-0 p-2 bg-slate-800  w-full  ">
                    <p className='font-semibold'>{book.title}</p>
                    <p className='text-ellipsis overflow-hidden whitespace-pre'>Author: {book.author}</p>
                </footer>
            </article>
        </>
    )
}

export const Books = () => {

    const [books, setBooks] = useState([]);

    const { language } = useLoaderData();

    console.log(language)


    useEffect(() => {
        setBooks(BooksList)
    }, [])

    return (
        <>
            {
                books.map((book, index) => language.toLowerCase() === book.tags[0] && <Book key={index} book={book} />)
            }
        </>
    )
}

export default Books;
