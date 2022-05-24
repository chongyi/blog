import dayjs from "dayjs"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { Link } from "react-router-dom"
import { getContentList } from "../API"

function List({ list }) {
    return <ul className="space-y-6">
        {(list && list.map(item => (
            <li className="space-y-2" key={item.id}>
                <div className="text-xl font-bold"><Link to={`/content/${item.name}`}>{item.title}</Link></div>
                <div className="text-sm text-stone-500">发布于 {dayjs(item.published_at).format('YYYY-MM-DD HH:mm')}</div>
            </li>
        )))}
    </ul>
}

function Home() {
    const [list, setList] = useState([])
    const [pagination, setPagination] = useState({ page: 1, has_more: false })

    const fetchData = async (pagination) => {
        const resp = await getContentList(pagination)
        setList(prev => [...prev, ...resp.data])
        setPagination({ page: resp.page, has_more: resp.last_page !== resp.page })
    }

    const nextPage = async () => {
        if (pagination.has_more) {
            await fetchData({
                page: pagination.page + 1
            })
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <div className="container m-auto">
        <section className="py-6 px-4">
            <div>
                <InfiniteScroll
                    hasMore={pagination.has_more}
                    dataLength={list.length}
                    next={nextPage}
                    endMessage={<div className="text-center text-sm text-gray-300 my-8">- 已经到底了 -</div>}
                >
                    <List list={list} />
                </InfiniteScroll>
            </div>
        </section>
    </div>
}

export default Home