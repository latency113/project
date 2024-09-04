import React from 'react'
import Layout from '../components/Layout'
import Apple from "../images/Apple.png";
import './productdetail.css'
import QuantitySelector from '../components/QuantitySelector';

const Productdetail = () => {
  return (
    <Layout>
        <div className="flex w-auto bg-white border border-gray-200 p-2 rounded-lg shadow mt-5">

                <img className="w-2/6 p-8 rounded-t-lg" src={Apple} alt="product image"/>

            <div className=''>
                    
                
                <div className="">
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    แอปเปิ้ล 1 ตะกร้า
                  </h5>
                    <span className="text-xl font-medium text-gray-900 dark:text-white">
                        12฿/ลูก
                    </span>
                </div>


                <div className='flex space-x-3'>
                <QuantitySelector/>
                </div>
            </div>
        </div>
    </Layout>

  )
}

export default Productdetail
