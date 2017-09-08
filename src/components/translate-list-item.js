import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  stateFetchFunction,
  distFetchFunction,
  WeatherFetchFunction,
  CoordinateFetchFunction,
  TempFetchFunction,
  WindFetchFunction,
  LastMonthFetchFunction,
  CurrentMonthFetchFunction,
  NextMonthFetchFunction
} from "../action/index";
class TranslateListItem extends React.Component {
  stateshow(data) {
    let name;
    if (this.props.stateFetch !== null)
      name = this.props.stateFetch.data.city.name;
    else name = "City Name ";
    return data ? (
      <div
        className="col-md-3 "
        onClick={e => this.props.stateFetchFunction(this.props.info)}
      >
        <div className="card-costum">
          <div className="card-costum-head">Area Name</div>
          <div className="card-costum-body">{name}</div>
        </div>
      </div>
    ) : (
      <div className="col-md-3">
        <div className="card-costum">waiting...</div>
      </div>
    );
  }
  distshow(data) {
    let name;
    if (this.props.distFetch !== null) name = this.props.distFetch.country;
    else name = "City Name ";
    return data ? (
      <div
        className="col-md-3 "
        onClick={e => this.props.distFetchFunction(this.props.info)}
      >
        <div className="card-costum">
          {" "}
          <div className="card-costum-head">Country Code</div>{" "}
          <div className="card-costum-body">{name}</div>{" "}
        </div>
      </div>
    ) : (
      <div className="col-md-3 ">
        <div className="card-costum">waiting...</div>
      </div>
    );
  }
  weathershow(data) {
    let name;
    if (this.props.weatherFetch !== null)
      name = this.props.weatherFetch.list[0].weather[0].description;
    else name = "Weather Status... ";
    return data ? (
      <div
        className="col-md-3 "
        onClick={e => this.props.WeatherFetchFunction(this.props.info)}
      >
        <div className="card-costum">
          {" "}
          <div className="card-costum-head">Weather Des.</div>{" "}
          <div className="card-costum-body">{name}</div>{" "}
        </div>
      </div>
    ) : (
      <div className="col-md-3">
        <div className="card-costum">waiting...</div>
      </div>
    );
  }
  tempshow(data) {
    let pressure, temp_max, temp_min, name;
    if (this.props.tempFetch !== null) {
      name = "Humidity - " + this.props.tempFetch.list[0].main.humidity;
      pressure = "Pressure - " + this.props.tempFetch.list[0].main.pressure;
      temp_max = "Max Temp - " + this.props.tempFetch.list[0].main.temp_max;
      temp_min = "Min Temp - " + this.props.tempFetch.list[0].main.temp_min;
    } else name = "Temp Status... ";
    return data ? (
      <div
        className="col-md-3 "
        onClick={e => this.props.TempFetchFunction(this.props.info)}
      >
        <div className="card-costum">
          {" "}
          <div className="card-costum-head">Temp Status</div>
          <div className="card-costum-body">
            {name}
            <br />
            {pressure}
            <br />
            {temp_max}
            <br />
            {temp_min}
          </div>{" "}
        </div>
      </div>
    ) : (
      <div className="col-md-3">
        <div className="card-costum">waiting...</div>
      </div>
    );
  }
  windshow(data) {
    let wind_speed, name;
    if (this.props.windFetch !== null) {
      name = "Wind Temp - " + this.props.windFetch.list[0].wind.deg;
      wind_speed = "WInd Speed - " + this.props.windFetch.list[0].wind.speed;
    } else name = "Wind Status... ";
    return data ? (
      <div
        className="col-md-3 "
        onClick={e => this.props.WindFetchFunction(this.props.info)}
      >
        <div className="card-costum">
          {" "}
          <div className="card-costum-head">Wind Status</div>
          <div className="card-costum-body">
            {name}
            <br />
            {wind_speed}
          </div>
        </div>
      </div>
    ) : (
      <div className="col-md-3">
        <div className="card-costum">waiting...</div>
      </div>
    );
  }
  lastmonthshow(data) {
    let humidity, pressure, temp_max, temp_min, name;

    if (this.props.lastMonth !== null) {
      
      humidity = "Humidity - " + this.props.lastMonth.main.humidity;
      pressure = "Pressure - " + this.props.lastMonth.main.pressure;
      temp_max = "Max Temp - " + this.props.lastMonth.main.temp_max;
      temp_min = "Min Temp - " + this.props.lastMonth.main.temp_min;
      name = "Date - " + this.props.lastMonth.dt_txt;
     
    } else name = "Past Status... ";
    return data ? (
      <div
        className="col-md-3 "
        onClick={e => this.props.LastMonthFetchFunction(this.props.info)}
      >
        <div className="card-costum">
          {" "}
          <div className="card-costum-head">Last Month</div>
          <div className="card-costum-body">
            {name}
            <br />
            {humidity}
            <br />
            {pressure}
            <br />
            {temp_max}
            <br />
            {temp_min}
          </div>
        </div>
      </div>
    ) : (
      <div className="col-md-3">
        <div className="card-costum">waiting...</div>
      </div>
    );
  }
  populationshow(data) {
    let humidity, pressure, temp_max, temp_min, name;
    if (this.props.currentMonth !== null) {
      humidity = "Humidity - " + this.props.currentMonth.main.humidity;
      pressure = "Pressure - " + this.props.currentMonth.main.pressure;
      temp_max = "Max Temp - " + this.props.currentMonth.main.temp_max;
      temp_min = "Min Temp - " + this.props.currentMonth.main.temp_min;
      name = "Date - " + this.props.currentMonth.dt_txt;
    } else name = "Current Status... ";
    return data ? (
      <div
        className="col-md-3 "
        onClick={e => this.props.CurrentMonthFetchFunction(this.props.info)}
      >
        <div className="card-costum">
          {" "}
          <div className="card-costum-head">Current Month</div>
          <div className="card-costum-body">
            {" "}
            {name}
            <br />
            {humidity}
            <br />
            {pressure}
            <br />
            {temp_max}
            <br />
            {temp_min}
          </div>
        </div>
      </div>
    ) : (
      <div className="col-md-3">
        <div className="card-costum">waiting...</div>
      </div>
    );
  }
  letracyshow(data) {
    let humidity, pressure, temp_max, temp_min, name;
    if (this.props.nextMonth !== null) {
      humidity = "Humidity - " + this.props.nextMonth.main.humidity;
      pressure = "Pressure - " + this.props.nextMonth.main.pressure;
      temp_max = "Max Temp - " + this.props.nextMonth.main.temp_max;
      temp_min = "Min Temp - " + this.props.nextMonth.main.temp_min;
      name = "Date - " + this.props.nextMonth.dt_txt;
    } else name = "Future Predictions... ";
    return data ? (
      <div
        className="col-md-3 "
        onClick={e => this.props.NextMonthFetchFunction(this.props.info)}
      >
        <div className="card-costum">
          <div className="card-costum-head">Next Name</div>
          <div className="card-costum-body">
            {name}
            <br />
            {humidity}
            <br />
            {pressure}
            <br />
            {temp_max}
            <br />
            {temp_min}
          </div>
        </div>
      </div>
    ) : (
      <div className="col-md-3">
        <div className="card-costum">Waiting...</div>
      </div>
    );
  }
  render() {
    if (this.props.id === "1") return this.stateshow(this.props.info);
    if (this.props.id === "2") return this.distshow(this.props.info);
    if (this.props.id === "3") return this.weathershow(this.props.info);
    if (this.props.id === "4") return this.tempshow(this.props.info);
    if (this.props.id === "5") return this.windshow(this.props.info);
    if (this.props.id === "6") return this.lastmonthshow(this.props.info);
    if (this.props.id === "7") return this.populationshow(this.props.info);
    if (this.props.id === "8") return this.letracyshow(this.props.info);
  }
}

function mapStateToProps(state) {
  return {
    info: state.EnglishText,
    stateFetch: state.StateFetch,
    distFetch: state.DistFetch,
    weatherFetch: state.WeatherFetch,
    tempFetch: state.TempFetch,
    windFetch: state.WindFetch,
    lastMonth: state.LastMonthFetch,
    currentMonth: state.CurrentMonthFetch,
    nextMonth: state.NextMonthFetch
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      stateFetchFunction,
      distFetchFunction,
      WeatherFetchFunction,
      CoordinateFetchFunction,
      TempFetchFunction,
      WindFetchFunction,
      LastMonthFetchFunction,
      CurrentMonthFetchFunction,
      NextMonthFetchFunction
    },
    dispatch
  );
}
export default connect(mapStateToProps, matchDispatchToProps)(
  TranslateListItem
);
