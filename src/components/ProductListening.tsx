import { Space, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

function ProductListening() {
    return (
        <Space>
            <Card
                hoverable
                style={{ width: 400 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>

            <Card
                hoverable
                style={{ width: 400 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>

            <Card
                hoverable
                style={{ width: 400 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            

        </Space>
    );
}

export default ProductListening;