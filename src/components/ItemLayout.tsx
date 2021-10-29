import { Divider, Layout, Radio } from 'antd';
import { useState } from 'react';
import { Product } from "../shared_interfaces/sharedInterface_product";
import { Image, Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;



const SizesButtons = (sizes: number[] | string[]) => {
    const options = sizes.map(size => { return { label: size.toString(), value: size } })

    const [current_option, setOption] = useState(options[0])

    return (
        <Radio.Group
            options={options}
            onChange={e => {
                setOption(e.target.value ? { label: e.target.value.toString(), value: e.target.value } : options[0])
            }
            }
            value={current_option.label}
            optionType="button"
            buttonStyle="solid"
        />

    )
}
interface Image_values {
    images: string[]
}

const ImageGallery: React.FC<Image_values> = (images) => {

    return (
        <Image.PreviewGroup>
            {images.images.map(image => <Image width={600} src={image} />)}
        </Image.PreviewGroup>
    )
}



export const ProductPage: React.FC<Product> = (product: Product) => {
    //console.log(<div><p>AAAA</p></div>)
    return (

        <Row>
            <Col span={18}>
                <ImageGallery images={product.images} />
            </Col>
            <Col span={5}>
                <h1 style={{textAlign:"left"}}>{product.title}</h1>
                <h3 style={{textAlign:"left"}}>{"Price: "+product.price}</h3>
                <Divider />
                <h3 style={{textAlign:"left"}}>{product.description}</h3>
                <Divider />
                {SizesButtons(product.sizes)}
                <Divider />
                <p style={{textAlign:"justify"}}>{product.content}</p>
                
            </Col>
        </Row>

    )
}