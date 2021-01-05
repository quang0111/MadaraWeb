import React from 'react';

const SectionSale = (props) => {
 return (
  <section className="section_sale">

   <div className="row">
     <div className="wrapper">
       <div className="wrapper_img"><img src="https://fe-mandala.vercel.app/images/plane.svg"></img></div>
       <p>Miễn phí vận chuyển trên toàn quốc</p>
     </div>
     <div className="wrapper">
       <div className="wrapper_img wrapper_center"><img src="https://fe-mandala.vercel.app/images/plane.svg"></img></div>
       <p>Nhận ngay quà tặng trị giá 350.000đ</p>
    </div>
     <div className="wrapper">
       <div className="wrapper_img"><img src="https://fe-mandala.vercel.app/images/plane.svg"></img></div>
       <p>Giảm 30% cho đơn hàng trên 5.000.000đ</p>
     </div>
   </div>

 </section>
 );
}

export default SectionSale;