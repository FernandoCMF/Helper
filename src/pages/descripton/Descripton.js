import React from 'react';
import image_2 from 'assets/img-2.jpg';

import {
  DescriptonContainer,
  DescriptonContent,
  DescriptonContent_text,
  DescriptonContent_image,
} from './DescriptonStyle';
const Descripton = () => {
  return (
    <>
      <DescriptonContainer>
        <DescriptonContent>
          <DescriptonContent_text>
            <h2 className="title">A vida não para</h2>
            <p className="text">
              A luta contra a pobreza não pode parar. Doando apenas R$ 2.00 por
              dia você pode mudar a vida de uma criança e de toda sua
              comunidade. Sua doação vai facilitar, por exemplo, que famílias
              tenham acesso a direitos básicos, como à água e à alimentação
              saudável.
            </p>
            <h2 className="title">Faça uma criança feliz</h2>
          </DescriptonContent_text>
          <DescriptonContent_image src={image_2} alt="children smile" />
        </DescriptonContent>
      </DescriptonContainer>
    </>
  );
};

export default Descripton;
