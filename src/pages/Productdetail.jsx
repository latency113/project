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
                    <a href="#">
                        <div className="flex space-x-1 text-white bg-green-600 hover:bg-green-800 p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>  
                            <p>ใส่ตะกล้า</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </Layout>

  )
}

export default Productdetail
