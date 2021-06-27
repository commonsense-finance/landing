import Head from 'next/head'
import Navbar from './navbar'

export const title = 'Common Sense Finance'

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name={title}
                    content={title}
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        title
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={title} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                    crossOrigin="anonymous">    
                </script>
            </Head>
            <header>
                <Navbar />
            </header>
            <main className="container-flex">
                {children}
            </main>
            <footer className="container">
                <div className="row text-center">
                    <div className="col-sm-12 col-md-4">
                        <p>&copy; 2020–2021 Common Sense Finance, Inc.</p>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <p><a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <p>Social Icons</p>
                    </div>
                </div>
                
            </footer>
        </div>
        
    )
}