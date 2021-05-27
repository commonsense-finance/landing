import Head from 'next/head'

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
            </Head>
            <header>
                <nav class="navbar navbar-expand-md navbar-light fixed-top ">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">CommonSense</a>

                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Indexs</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Docs</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="#" >Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
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