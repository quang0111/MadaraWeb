import React from "react";

import { Container, Row } from "reactstrap";

const MainContent = () => {
  return (
    <div className="mainContent">
      <Container>
        <div className="content">
          <h2 className="green__vera">Green Vera</h2>
          <p className="content__title">
            Sản phẩm tinh dầu dưỡng da mới nhất của mandala
          </p>
          <p className="content__price">
            Gía chỉ 750.000
          </p>
          <a className="content__buy">Mua hàng</a>
        </div>
      </Container>
    </div>
  );
}

export default MainContent;
