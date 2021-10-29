import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import { Carousel, Image } from 'antd';
import banner1 from '../example_data/img/banner1.jpg';
import banner2 from '../example_data/img/banner2.jpg';
import banner3 from '../example_data/img/banner3.jpg';
import banner4 from '../example_data/img/banner4.jpg';
import { Content } from 'antd/lib/layout/layout';

const contentStyle = {
  height: '750px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
} as React.CSSProperties;

function PublicHomepage() {
  return (
    <Content style={{ padding: '0 50px'  }}>
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <Image
            width='100%'
            height='100%'
            src={banner1}
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <Image
            width='100%'
            height='100%'
            src={banner2}
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}><Image
            width='100%'
            height='100%'
            src={banner3}
          /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><Image
            width='100%'
            height='100%'
            src={banner4}
          /></h3>
      </div>
    </Carousel>
    </Content>

  )
};

export default PublicHomepage;