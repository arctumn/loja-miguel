import { Button, Divider, Layout, Radio } from 'antd';
import { useState } from 'react';
import { Product } from "../shared_interfaces/sharedInterface_product";
import { Image, Row, Col } from 'antd';
import "./Button.css";
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
const isHidden = (elm: HTMLElement | null) => {
    if (elm === null) return false;
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return (rect.bottom < 0 || rect.top - viewHeight >= 0);
}

export const ProductPage: React.FC<Product> = (product: Product) => {
    //console.log(<div><p>AAAA</p></div>)
    const [visibility, setVisibility] = useState(false)
    return (

        <Row onWheel={() => { setVisibility(isHidden(document.getElementById('cart'))) }}>
            <Col span={18}>
                <ImageGallery images={product.images} />
            </Col>
            <Col span={5}>
                <h1 style={{ textAlign: "left" }}>{product.title}</h1>
                <h3 style={{ textAlign: "left" }}>{"Price: " + product.price}</h3>
                <Divider />
                <h3 style={{ textAlign: "left" }}>{product.description}</h3>
                <Divider />
                {SizesButtons(product.sizes)}
                <Divider />
                <Button id='cart'
                    onClick={() => {alert(product.title + " Added to cart\n DAVID É PRECISO ADICIONAR AO CARRINHO SOMEHOW XD"); console.log(product)}}
                    type="primary" >Adicionar ao Carrinho</Button>

                <Divider />
                <p style={{ textAlign: "justify" }}>{product.content}</p>

            </Col>
            <Footer style=
                {visibility ? {
                    
                    visibility: 'visible',
                    borderTop: '1px solid #e8e8e8',
                    position: 'fixed',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    textAlign: 'center',
                    display: 'flex'
                    } : {
                    
                    visibility: 'hidden',
                    borderTop: '1px solid #e8e8e8',
                    position: 'fixed',
                    left: 0,
                    bottom: 0,
                    width: '100%',

                    textAlign: 'center',
                    display: 'flex'
                    }
                }>
               <Image preview={false} style={ {height: '100%'}} width={50} src={product.images[0]}/>
               <p style={{
                       
                       fontSize:'1.2em',
                       marginTop: '2.5vh',
                       marginLeft: '1vw'
                    }}
               ><strong>{product.title}</strong></p>
               <p style={{
                        
                        fontSize:'1.2em',
                        marginTop: '2.5vh',
                        marginLeft: '2vw'
                    }}> {product.price + "€"}</p>
                <button className="antd-copy" onClick={() => {alert(product.title + " Added to cart\n DAVID É PRECISO ADICIONAR AO CARRINHO SOMEHOW XD"); console.log(product)}} style={{
                        
                        
                    }} >Adicionar ao carrinho</button>
            </Footer>
        </Row>

    )
}