import { useState } from "react";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselProps } from "@/utils/interface";


const contentStyle: React.CSSProperties = {
    height: 200,
    width : 300,
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    objectFit: 'cover'
  };

export default function ({ images }: CarouselProps) {

  return (
        <Carousel autoplay autoplaySpeed={5000}>
           
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
                            style={contentStyle}
                            alt="Carousel Slide"
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    </div>
                ))}
            
        </Carousel>
   
  );
}
