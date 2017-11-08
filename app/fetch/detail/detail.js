import { get } from '../get'

export function getShopDetailData(shopID) {
    const result = get('/api/detail/info/' + 'shopID')
    return result
}
