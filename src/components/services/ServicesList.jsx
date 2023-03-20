import {useState} from 'react';
import {BiChevronRight} from 'react-icons/bi';

const ServicesList = ({services}) => {
    const [showPara, setShowPara] = useState(0);

const handleShowParagraph =(index) => {
    return setShowPara(index);
}

    return (
         <>
         {
            services.length > 0 ? 
                services.map( (service,index) => (
                    <div className="services__list animation" key={index} onClick={ () => handleShowParagraph(index)}>
                        <h4 className={ showPara === index ? 'services__list__heading services__list__heading__active' : 'services__list__heading'}><BiChevronRight size={18} className={ showPara === index ? 'services__list__heading__chevron--down' : ''}/> {service.heading}</h4>
                        <p className={showPara === index ? 'services__list__para services__list__para--show' : 'services__list__para'} >{service.p}</p>
                    </div>
                ) )
                : 'zero'
         }
         </>
    )

}

export default ServicesList; 