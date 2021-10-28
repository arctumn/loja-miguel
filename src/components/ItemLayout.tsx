import { Radio } from 'antd';
import { useState } from 'react';
import { Product } from "../shared_interfaces/sharedInterface_product";
import { Image } from 'antd';

const exampleData = [
    "https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dw86b2b32f/images/hi-res/P_823256443D1.jpg?sw=600&sh=900&sm=fit",
    "https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dw52e6ef54/images/hi-res/P_823256443D2.jpg?sw=600&sh=900&sm=fit",
    "https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dwe4bde745/images/hi-res/P_823256443FM.jpg?sw=600&sh=900&sm=fit",
    "https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dw5a5bf3c0/images/hi-res/P_823256443TM.jpg?sw=600&sh=900&sm=fit"
]

const SizesButtons = (sizes: number[] | string[]) => {
    const options = sizes.map(size => {return {label: size.toString(), value: size}})
    
    const [current_option, setOption] = useState(options[0])
    
    return(
        <Radio.Group
          options={options}
          onChange={ e => { 
                setOption(e.target.value ? {label: e.target.value.toString(), value: e.target.value} : options[0])
                }
            }
          value={current_option.label}
          optionType="button"
          buttonStyle="solid"
        />

    )
}


const ImageGallery = (images: string[]) => {
    return (
        <Image.PreviewGroup>
            {images.map(image => <Image width={300} src={image} />)}
        </Image.PreviewGroup>
    )
}



export const ProductPage: React.FC<Product> = (product:Product) => {
        //console.log(<div><p>AAAA</p></div>)
    return (
        <div>
            {ImageGallery(exampleData)}
            {SizesButtons(product.sizes)}
            
        </div>
    )
}