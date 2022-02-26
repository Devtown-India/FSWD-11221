import '../styles/Forecast.css'

const Forecast = ({weatherInfo,location:{city,state_code}}) => {
    return ( 
        <div style={{display:"flex"}} >
            {/* <h1 className="Forecast__title">{city},{state_code}</h1> */}
            <img
                className="Forecast__weather-icon"
                src={
                    "https://openweathermap.org/img/wn/" +
                    weatherInfo.weather[0].icon +
                    ".png"
                }
                alt={weatherInfo.weather[0].main}
            />
            <div className="Forecast__temperature">
                <span className="temperature__max">
                    {Math.round(weatherInfo.temp.max)}
                    <sup className="temperature__symbol">°</sup>
                </span>
                <span className="temperature__min">
                    {Math.round(weatherInfo.temp.min)}
                    <sup className="temperature__symbol">°</sup>
                </span>
            </div>
        </div>
     );
}
 
export default Forecast;