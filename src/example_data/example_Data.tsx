import { Product } from "../shared_interfaces/sharedInterface_product"

const sizes = ["xs","s","m","l"]
const exampleData = [
    "https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dw86b2b32f/images/hi-res/P_823256443D1.jpg?sw=600&sh=900&sm=fit",
    "https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dw52e6ef54/images/hi-res/P_823256443D2.jpg?sw=600&sh=900&sm=fit",
    "https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dwe4bde745/images/hi-res/P_823256443FM.jpg?sw=600&sh=900&sm=fit",
    "https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dw5a5bf3c0/images/hi-res/P_823256443TM.jpg?sw=600&sh=900&sm=fit"
]

export const example_product:Product = {
    images: exampleData,
    sizes: sizes
}