import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getContent } from "../API"
import './Content.scss'
import Helmet from "react-helmet"
import ContentViewer from "../component/ContentViewer"

function Content({ isPage = false }) {
    const [content, setContent] = useState(null)
    const { contentId } = useParams()

    useEffect(() => {
        const fetchData = async (id) => {
            const resp = await getContent(id)
            setContent(resp)
        }

        fetchData(contentId)
    }, [contentId])

    return <>
        {content && <Helmet>
            <meta name="description" content={content.description} />
            {content.keywords && <meta name="keywords" content={content.keyword} />}
            <title>{content.title} - 灵感 - 来自生活的馈赠</title>
        </Helmet>}
        <div className="container m-auto px-4">
            {content ? <ContentViewer showMeta={!isPage}>{content}</ContentViewer> : <div>加载中</div>}
        </div>
    </>
}

export default Content