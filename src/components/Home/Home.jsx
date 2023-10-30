import { AboutUs } from "../AboutUs/AboutUs";
import { Approach } from "../Approach/Approach";
import { Slider } from "../Slider/Slider";
import { StrategicAllies } from "../StrategicAllies/StrategicAllies";
import './Home.css'
export function Home (){
    return (
        <>
            <Slider />
            <div className='background2'>
                <AboutUs />
            </div>
            <div className='background-img'>
                <Approach />
            </div>
            <StrategicAllies />
        </>
    )
}