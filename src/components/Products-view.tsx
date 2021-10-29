import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";
import { List, Space } from "antd"
import React from "react";
import { useState } from "react"
import { Product } from "../shared_interfaces/sharedInterface_product"

interface gender {
    gender: string
}


export const Product_view: React.FC<gender> = selected_gender => {

    const [elements_values, setValues] = useState<Product[]>([])
    fetch("/"+selected_gender.gender)
    .then(elements => elements.json())
    .then(elements => setValues(elements))
    return <List
        itemLayout = "vertical"
        size = "large"
        pagination = {{
            onChange: page => {
              console.log(page);
            },
            pageSize: 10,
          }}
        dataSource ={elements_values}
        renderItem = {(item) => (
            <List.Item
                key = {item.title}
                extra = {<img width={272} alt="logo" src={item.images[0]} />}
                />
        )}
    />
}