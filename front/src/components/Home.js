import React, { Fragment } from 'react'



export const Home = () => {

    
    

  return (
    <Fragment>
        

        <h1 id="encabezado_productos">Ultimos Productos</h1>

        <section id="productos" className='container mt-5'>
          <div className='row'>
            
            {/*Producto 1 */}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
              <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='.libro.jpg' alt='Libro'></img>
                <div className='card-body d-flex flex-column'>
                  <h5 id='titulo_producto'><a href='http://localhost:3000'>Descripción 1</a></h5>
                  <div className='rating mt-auto'>
                    <div className='rating-outer'>
                      <div className='rating-inner'></div>
                    </div>
                    <span id='No_de_Opiniones'>5 reviews</span>
                  </div>
                  <p className='card-text'>$72.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                    Ver detalle
                  </a>
                </div>
              </div>
            </div>

            {/*Producto 2*/}

            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
              <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/libro2.jpg' alt='Libro'></img>
                <div className='card-body d-flex flex-column'>
                  <h5 id='titulo_producto'><a href='http://localhost:3000'>Descripción 2</a></h5>
                  <div className='rating mt-auto'>
                    <div className='rating-outer'>
                      <div className='rating-inner'></div>
                    </div>
                    <span id='No_de_Opiniones'>4 reviews</span>
                  </div>
                  <p className='card-text'>$68.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                    Ver detalle
                  </a>
                </div>
              </div>
            </div>

            {/*Producto 3*/}

            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
              <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/libro3.jpg' alt='Libro'></img>
                <div className='card-body d-flex flex-column'>
                  <h5 id='titulo_producto'><a href='http://localhost:3000'>Descripción 3</a></h5>
                  <div className='rating mt-auto'>
                    <div className='rating-outer'>
                      <div className='rating-inner'></div>
                    </div>
                    <span id='No_de_Opiniones'>0 reviews</span>
                  </div>
                  <p className='card-text'>$128.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                    Ver detalle
                  </a>
                </div>
              </div>
            </div>

            {/*Producto 4*/}

            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
              <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/libro4.jpg' alt='Libro'></img>
                <div className='card-body d-flex flex-column'>
                  <h5 id='titulo_producto'><a href='http://localhost:3000'>Descrición 4</a></h5>
                  <div className='rating mt-auto'>
                    <div className='rating-outer'>
                      <div className='rating-inner'></div>
                    </div>
                    <span id='No_de_Opiniones'>6 reviews</span>
                  </div>
                  <p className='card-text'>$9.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                    Ver detalle
                  </a>
                </div>
              </div>
            </div>


          </div>
        </section>

    </Fragment>
  )
}

export default Home;
