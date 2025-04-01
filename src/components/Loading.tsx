import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

function Loading() {


  return (
    <>
      <div className='modalDobleFactor' style={{  display:'block' }}>
          <Layout style={{ background: '#235b4e12' }}>
            <Content>
              <div className='d-flex justify-content-center align-items-center ' >
                <div className="loader" /> 
              </div>
            </Content>
          </Layout>
      </div>
    </>
  );
}

export default Loading;
