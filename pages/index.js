import Head from 'next/head'

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <Head>
                <title>KFBFARLEY - I am Farley</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='flex flex-col items-center justify-center flex-1 text-center'>
                <h1 className='text-6xl font-bold'>
                    <img
                        className='rounded-full opacity-100 transition duration-500 ease-in-out hover:opacity-80'
                        src='img/farley.jpg'
                    ></img>
                </h1>

                <div className='flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full'>
                    <a
                        href='https://github.com/kfbfarley'
                        target='_blank'
                        className='p-6 m-6 text-left border w-15 rounded-xl hover:text-blue-600 focus:text-blue-600'
                    >
                        <img className='w-5' src='/img/github.svg'></img>
                    </a>

                    <a
                        href='https://pt.linkedin.com/in/kfbfarley'
                        target='_blank'
                        className='p-6 m-6 text-left border w-15 rounded-xl hover:text-blue-600 focus:text-blue-600'
                    >
                        <img className='w-5' src='/img/linkedin.svg'></img>
                    </a>

                    <a
                        href='https://instagram.com/kfbfarley'
                        target='_blank'
                        className='p-6 m-6 text-left border w-15 rounded-xl hover:text-blue-600 focus:text-blue-600'
                    >
                        <img className='w-5' src='/img/instagram.svg'></img>
                    </a>
                </div>
            </main>
        </div>
    )
}
