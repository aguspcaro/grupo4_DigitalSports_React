import React from 'react';

const Number = ({ CantPorPagina, totalProd, paginate }) => {
  const pageNumbers = [];

  // La funcion math.ceil redondea para arriba
  for (let i = 1; i <= Math.ceil(totalProd / CantPorPagina); i++) { // cantidad maxima de prodcutos divido la cantidad de prodcutos por pagina, redondeado para arriba. Nos va a dar el numero de vueltas a iterar
    pageNumbers.push(i);
  }

  return (
    <nav>

      <ul className='pagination'>

        {pageNumbers.map(number => (

          <li key={number} className='page-item'>

            <a onClick={() => paginate(number)} className='page-link'>

              {number}

            </a>

          </li>

        ))}

      </ul>

    </nav>
  );
};

export default Number;