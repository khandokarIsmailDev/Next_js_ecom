import data from '@/data/productData.json'

export function singleProduct(id){
    const findProduct = data.filter(product => product.id === parseInt(id))
    return findProduct
}