import React, { useState } from 'react';
import { Card, Button, Modal } from 'antd';
import { InfoCircleOutlined,  } from '@ant-design/icons';

interface ProductCardProps {
    data: {
        title: string;
        price: number;
        image: string;
        images: string;
        slug: string;
        description: string;
        creationAt: string;
        updatedAt:string;
    }
}

// {
//     "id": 2,
//     "title": "Classic Red Pullover Hoodie 777",
//     "slug": "classic-red-pullover-hoodie-777",
//     "price": 10,
//     "description": "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.",
//     "category": {
//         "id": 1,
//         "name": "Clothes",
//         "slug": "clothes",
//         "image": "https://i.imgur.com/QkIa5tT.jpeg",
//         "creationAt": "2025-03-31T16:21:43.000Z",
//         "updatedAt": "2025-03-31T16:21:43.000Z"
//     },
//     "images": [
//         "https://i.imgur.com/1twoaDy.jpeg",
//         "https://i.imgur.com/FDwQgLy.jpeg",
//         "https://i.imgur.com/kg1ZhhH.jpeg"
//     ],
//     "creationAt": "2025-03-31T16:21:43.000Z",
//     "updatedAt": "2025-04-01T01:33:40.000Z"
// }

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const [isModal, setIsModal] = useState(false);
  
  const showModal = () => {
    setIsModal(true);
  };

  const handleCancel = () => {
    setIsModal(false);
  };

  return (
    <div>
      <Card
        hoverable
        cover={<img alt={data.title} src={data.images[0]} />}
        style={{ width: 240, margin: 8, cursor: 'pointer' }}
        onClick={showModal} 

      >
        <Card.Meta title={data.title} description={`$${data.price} MXN`} />
        <Button
          type="dashed"
          icon={<InfoCircleOutlined />}
          style={{ marginTop: '10px' }}
        >
          Ver Mas Detalles
        </Button>
      </Card>

      
      <Modal
        title={`Details for ${data.title}`}
        open={isModal}
        centered
        onCancel={handleCancel}
        width='fit-content'
        footer={null}
      >
        <div className='cardo' style={{padding:10}}>
          <img src={data.images[0]} alt={data.title} style={{ width: '30%' }} />
          <div style={{width :'50%', marginLeft: 45}}>
            <h3>{data.title}</h3>
            <ul>
              <li><strong>Precio:</strong> ${data.price} MXN</li>
              <li><strong>Descripcion:</strong> {data.description}</li>
              <li><strong>Creacion:</strong> {data.creationAt}</li>
              <li><strong>Actualizacoin:</strong> {data.updatedAt}</li>
            </ul>

          </div>

        </div>
        <div className='centerFlex'>
          <Button type="primary" color='red'  onClick={handleCancel}>
            Cerrar
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
