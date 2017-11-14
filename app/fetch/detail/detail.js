import { get } from '../get'

export function getShopDetailData(shopID) {
    const result = get('/api/detail/info/' + 'shopID')
    return result
}

export function getCommentData(page, id) {
    const result = get('/api/detail/comment/' + page + '/' + id)
    return result
}
