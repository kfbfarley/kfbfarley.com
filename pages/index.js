import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>KFBFARLEY - I am Farley</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Hey, I am {' '}
          <span className="text-blue-600" href="">
            Farley!
          </span>
        </h1>

        <p className="mt-3 text-2xl">
          This page is not ready yet. It should be ready within a few weeks.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="/about"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">About me &rarr;</h3>
            <p className="mt-4 text-xl">
              Find out information about me and my carrer.
            </p>
          </a>

          <a
            href="/blog"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Blog &rarr;</h3>
            <p className="mt-4 text-xl">
              Sharing ideas and making fun of the most recent technologies.
            </p>
          </a>

          <a
            href="/projects"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Portfolio &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover the most recent projects published of my own.
            </p>
          </a>

          <a
            href="/contact"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Contact &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly get in touch with me, I reply within a few minutes.
            </p>
          </a>
        </div>
      </main>
      <footer className="flex flex-row items-center justify-center w-full h-24 border-t">
        <div class="flex flex-col">
            <div>Created by {' '}
        <a className="text-blue-600" href="https://github.com/kfbfarley">
            @kfbfarley
        </a>{' '}
            and hosted by {' '}
        <a className="text-blue-600" href="https://vercel.com">
            Vercel</a></div>
        </div>
      </footer>
    </div>
  )
}
