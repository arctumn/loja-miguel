export interface Product{
    title?: string,
    price?: number,
    images: string[],
    sizes: number[] | string[]
    description?: string
    content?:string
}
