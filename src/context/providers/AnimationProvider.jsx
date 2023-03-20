import {useEffect} from 'react';
import animationcontext from '../AnimationContext';

const AnimationProvider = ({children}) => {
  const scrollAnimation = () => {
    const elements =  document.querySelectorAll('.animation');
    
    elements.forEach( (el) => {

      const elementPosition = el.getBoundingClientRect().top;
      const viewPortHeight = window.innerHeight - 100;

        if(elementPosition < viewPortHeight){
            el.classList.add('animate');
          }else{
            el.classList.remove('animate');
        }
    })

  }

    useEffect(()=>{
      window.addEventListener('scroll', scrollAnimation);
    },[])
  return (
      <animationcontext.Provider value>{children}</animationcontext.Provider>
  )
}

export default AnimationProvider