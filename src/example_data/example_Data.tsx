import { Product } from "../shared_interfaces/sharedInterface_product"
import img1 from "./img/banner1.jpg"
import img2 from "./img/banner2.jpg"
import img3 from "./img/banner3.jpg"
import img4 from "./img/banner4.jpg"
const sizes = ["xs","s","m","l"]
const exampleData = [img1,img2,img3,img4]
const exampleData2 = [
    "https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dwe4bde745/images/hi-res/P_823256443FM.jpg?sw=600&sh=900&sm=fit",
    "https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dw5a5bf3c0/images/hi-res/P_823256443TM.jpg?sw=600&sh=900&sm=fit",
    "https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dw86b2b32f/images/hi-res/P_823256443D1.jpg?sw=600&sh=900&sm=fit",
    "https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dw52e6ef54/images/hi-res/P_823256443D2.jpg?sw=600&sh=900&sm=fit"
    ]
export const example_product:Product = {
    images: exampleData2,
    sizes: sizes,
    title: "Sobretudo",
    price: 55.3,
    description: "Um sobretudo para senhora composto por flanela.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis fermentum urna, eu congue purus. Integer dignissim, velit luctus condimentum molestie, nisi nisl accumsan urna, auctor facilisis enim risus vitae neque. Nunc non auctor neque. Praesent sed elit turpis. Nulla vitae erat nec dui fermentum ultricies vitae quis massa. Nulla iaculis ut felis eget aliquet. Maecenas aliquet odio eu tortor pellentesque elementum quis quis est."
}