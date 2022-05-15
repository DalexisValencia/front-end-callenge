import './details.scss';
import BreadCrumb from '../../components/breadcrumb/breadcrumb';

const details = () => {
    return ( 
        <section className='max-width-element details-item'>
            <BreadCrumb/>
            <div className='details-item__wrapper'>
                <div className='details-item__summary'>
                    <div className='details-item__image-wrapper'>
                        <figure className='details-item__figure'>
                            <img src="https://http2.mlstatic.com/D_NQ_NP_624984-MCO46185694732_052021-O.webp" alt="" />
                        </figure>
                    </div>
                    
                    <aside className='details-item__column-right'>
                        <span className='details-item__label'>
                            Nuevo -234 vendidos
                        </span>
                        <h1 className='details-item__name'>
                            Deco reverse sombrero dos lineas
                        </h1>
                        <h2 className='details-item__price'>
                            <span className='details-item__price-symbol'>$</span>
                            <span className='details-item__price-fraction'>1280</span>
                            <img src="" alt="" className='etails-item__shiping-free'/>
                        </h2>
                        <button className='details-item__buy'>
                            Comprar
                        </button>
                    </aside>
                </div>
                <div className='details-item__description'>
                    <h3 className='details-item__description-title'>
                        Description
                    </h3>
                    <p className='details-item__description-p'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam sed autem iusto alias eum nulla suscipit adipisci aspernatur, dolores laboriosam maxime obcaecati? Fuga pariatur quos, voluptas ea nisi maxime.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default details;