'use client'
import { BsLink } from 'react-icons/bs'; 
import { BiSolidSend } from 'react-icons/bi';
import { useState } from 'react';
import { useLazyGetSummaryQuery } from '@/redux/article';

export default function Demo() {
    const [article, setArticle] = useState({
        url: '',
        summary: '',
    })

    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const { data } = await getSummary({ articleUrl: article.url })

        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary }
            setArticle(newArticle)
            console.log(newArticle)
        }
    }
    
    return (
        <section className="mx-auto m-10 w-full max-w-xl">
            {/* Search bar */}
            <div className='flex flex-col w-full gap-2'>
                <form
                    className='relative flex justify-center items-center'
                    onSubmit ={handleSubmit}
                    >
                    <BsLink size={25} className='absolute left-0 my-2 ml-3'/>
                    <input
                        type='url'
                        placeholder='Cole o link aqui'
                        value={article.url}
                        onChange={(e) => setArticle({ ...article, url: e.target.value })}
                        className='url_input peer'
                        required
                    />
                    <button
                        type='submit'
                        className='submit_btn
                        peer-focus:border-gray-700
                        peer-focus:text-gray-700
                        '
                    >
                        <BiSolidSend />
                    </button>
                </form>

                {/* Browse URL History */}
           </div>
            
            {/* Result */}
        </section>
    )
}