import { Button, Divider, Layout, Radio } from 'antd';
import { useState } from 'react';
import { Product } from "../shared_interfaces/sharedInterface_product";
import { Image, Row, Col } from 'antd';
import "./ItemLayout.css";

const { Footer } = Layout;



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
            {images.images.map(image => <Image width={500} src={image} />)}
        </Image.PreviewGroup>
    )
}
const isHidden = (elm: HTMLElement | null) => {
    if (elm === null) return '0px';
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return (rect.bottom < 0 || rect.top - viewHeight >= 0) ? '0px' : '-200px';
}

export const ProductPage: React.FC<Product> = (product: Product) => {
    //console.log(<div><p>AAAA</p></div>)

    const [visibility, setVisibility] = useState('-200px')
    return (

        <Row onWheel={() => { setVisibility(isHidden(document.getElementById('cart'))) }}>
            <Col xs={24} sm={24} md={15}>
                <ImageGallery images={product.images} />
            </Col>
            <Col xs={24} sm={24} md={7}>
                <div className="product-info">
                    <h1 >{product.title}</h1>
                    <h3>{"Preço: " + product.price + "€"}</h3>
                    <Divider />
                    <h3 >{product.description}</h3>
                    <Divider />
                </div>

                {SizesButtons(product.sizes)}
                <div style={{marginTop: '24px', marginBottom: '24px'}} />
                <Button id='cart'
                    onClick={() => { alert(product.title + " Added to cart\n DAVID É PRECISO ADICIONAR AO CARRINHO SOMEHOW XD"); console.log(product) }}
                    type="primary" >Adicionar ao Carrinho</Button>

                <Divider />
                <p style={{ textAlign: "justify" }}>{product.content}</p>

            </Col>

            <Footer className='moovable-footer' style=
                {{
                    borderTop: '1px solid #e8e8e8',
                    position: 'fixed',
                    left: 0,
                    zIndex: 1,
                    width: '100%',
                    textAlign: 'center',
                    display: 'flex',
                    boxShadow: '0 0 10px rgb(0 0 0 / 20%)',
                    bottom: visibility,
                }
                }>
                <Image preview={false} style={{ height: '100%' }} width={"50px"} src={product.images[0]} />
                <p style={{

                    fontSize: '1.2em',
                    marginTop: '2.5vh',
                    marginLeft: '1vw'
                }}
                ><strong>{product.title}</strong></p>
                <p style={{

                    fontSize: '1.2em',
                    marginTop: '2.5vh',
                    marginLeft: '2vw'
                }}> {product.price + "€"}</p>
                <div className="footer-button"><Button type="primary" style={{
                    marginTop: '1.5em',
                }
                } onClick={() => { alert(product.title + " Added to cart\n DAVID É PRECISO ADICIONAR AO CARRINHO SOMEHOW XD"); console.log(product) }} >Adicionar ao carrinho</Button></div>
            </Footer>

        </Row>

    )
}