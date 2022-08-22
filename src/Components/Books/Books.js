import React, { useEffect, useContext } from 'react'
import axios from 'axios';
import { AppContext } from '../../context/context'
import './books.css';

function Books() {

    const { books, setBooks } = useContext(AppContext)

    const getBooks = async () => {
        await axios.get('https://gutendex.com/books').then(res => {
            setBooks({ 0: res.data.results })
        })
    }
    useEffect(() => {
        getBooks()
    }, [])
    return (
        <div className='p-16 overflow-hidden'>
            <div className='flex justify-between align-center'>
                <h2 className='font-bold text-3xl'>Popular Now</h2>
                <a href='#' className='text-gray-700'>View All</a>
            </div>
            <div className='container-lg flex flex-wrap'>
                {
                    books[0]?.slice(0, 5).map((book, index) => <div className="w-2/12 rounded overflow-hidden mx-4 my-4" data-modal-toggle={`crypto-modal-${index}`}>
                        <img className="w-full h-64 rounded-lg" src={book.formats['image/jpeg']} />
                        <div className="py-4">
                            <div className="font-bold text-lg mb-2">{book.title.substring(0, 18)}</div>
                            <p className="text-gray-700 text-sm">
                                111
                            </p>

                            <div className='review flex mt-5 space-x-1'>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                                <div className='star h-4 w-4 bg-cover bg-no-repeat'></div>
                            </div>
                        </div>


                    </div>)
                }


            </div>
        </div>
    )
}

export default Books
