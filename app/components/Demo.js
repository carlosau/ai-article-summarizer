'use client'
import { BsLink } from 'react-icons/bs'; 
import { BiSolidSend } from 'react-icons/bi';

export default function Demo() {
    return (
        <section className="mx-auto m-10 w-full max-w-xl">
            {/* Search bar */}
            <div className='flex flex-col w-full gap-2'>
                <form
                    className='relative flex justify-center items-center'
                    onSubmit ={() => {}}
                    >
                    <BsLink size={25} className='absolute left-0 my-2 ml-3'/>
                    <input
                        type='url'
                        placeholder='Cole o link aqui'
                        value=""
                        onChange={() => {}}
                        className='url_input peer'
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