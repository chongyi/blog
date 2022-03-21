import Header from "../component/Header"
import Helmet from "react-helmet"

function MainLayout({ children }) {
    return <>
        <Helmet>
            <meta name="description" content="生活，感之粼粼，问之潢潢。" />
            <title>灵感 - 来自生活的馈赠</title>
        </Helmet>
        <Header />
        {children}
    </>
}

export default MainLayout