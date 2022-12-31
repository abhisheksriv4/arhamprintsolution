import React from 'react'
import './Figures.css'
import NumberCounter from 'number-counter'

const Figures = () => {
  return (
    <div className="figures_button">
        <div className="text-f">
            <span>Some Facts About Us</span>
            <span>Vivamus ut scelerisque tellus. Morbi egestas neque et lorem sodales faucibus. Etiam efficitur vehicula commodo. Curabitur ac libero ullamcorper, interdum arcu et, posuere arcu.</span>
        </div>
        {/* numbers or figures  */}
        <div className="figures">
            <div>
                <span><NumberCounter end={140} start={100} delay="4" preFix="+"/></span>
                <span>Printing Options</span>
            </div>
            <div>
                <span><NumberCounter end={958} start={850} delay="4" preFix="+"/></span>
                <span>Happy Customers</span>
            </div>
            <div>
                <span><NumberCounter end={15} start={8} delay="4" preFix="+"/></span>
                <span>Machines</span>
            </div>
        </div>


        {/* hero buttons  */}
        <div className="hero-buttons">
            <buttons className=" btn">Get Started</buttons>
            <buttons className=" btn">Learn More</buttons>
        </div>
    </div>
  )
}

export default Figures