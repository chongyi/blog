export async function getContentList({ page = 1 } = {}) {
    const resp = await fetch(`/api/contents?page=${page}`)

    return await resp.json()
}

export async function getContent(identify) {
    const resp = await fetch(`/api/content/${identify}`)

    return await resp.json()
}