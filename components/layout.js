import Navigation from "./navigation"
import Head from "next/head"
function Layout({children}){

return <div>

<Head><title>SkateBoard</title></Head>
<meta name="viewport" content="initial-scale=1.0, width=device-width" />
<Navigation/>
<main>{children}</main>
<footer>Tüm Haklar Saklıdır.</footer>

</div>


}

export default Layout