import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";
import { List, Space } from "antd"
import React from "react";
import { useState } from "react"
import { example_product } from "../example_data/example_Data";
import { Product } from "../shared_interfaces/sharedInterface_product"

interface gender {
    gender: string
}

const data = [example_product, example_product, example_product, example_product,
    example_product, example_product, example_product, example_product,]

export const Product_view: React.FC<gender> = selected_gender => {

    /*const [elements_values, setValues] = useState<Product[]>([])
    fetch("/" + selected_gender.gender)
        .then(elements => elements.json())
        .catch(reason => {
            console.log(reason);
            return <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 10,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item
                        key={item.title}
                        extra={<img width={272} alt="logo" src={item.images[Math.round(Math.random()* 100) % 4]} />}

                    >
                        <List.Item.Meta
                            title={item.title}
                            description={item.description}
                        />
                        {content}
                    </List.Item>
                )}
            />
        })
        .then(elements => setValues(elements)) */
    return <List style={{textAlign:"left"}}
        itemLayout="vertical"
        size="large"
        pagination={{
            onChange: page => {
                console.log(page);
            },
            pageSize: 5,
        }}
        dataSource={data}
        renderItem={(item) => (
            <List.Item
                key={item.title}
                extra={<img width={272} height={272} alt="logo" src={item.images[Math.round(Math.random()* 100) % 4]} />}
            >
                <List.Item.Meta
                    title={item.title}
                    description={item.description}
                />
                <p>{item.content}</p>
                <p>{"Price: "+item.price}</p>
            </List.Item>
        )}
    />
}