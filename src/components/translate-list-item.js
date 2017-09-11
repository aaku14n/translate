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
  renderItemFunction(key) {
    if (key === "1") {
      document.getElementsByClassName("loader_1")[0].style.display = "block";
      this.props.stateFetchFunction(this.props.info);
    }
    if (key === "2") {
      document.getElementsByClassName("loader_2")[0].style.display = "block";
      this.props.distFetchFunction(this.props.info);
    }
    if (key === "3") {
      document.getElementsByClassName("loader_3")[0].style.display = "block";
      this.props.WeatherFetchFunction(this.props.info);
    }
    if (key === "4") {
      document.getElementsByClassName("loader_4")[0].style.display = "block";
      this.props.TempFetchFunction(this.props.info);
    }
    if (key === "5") {
      document.getElementsByClassName("loader_5")[0].style.display = "block";
      this.props.WindFetchFunction(this.props.info);
    }
    if (key === "6") {
      document.getElementsByClassName("loader_6")[0].style.display = "block";
      this.props.LastMonthFetchFunction(this.props.info);
    }
    if (key === "7") {
      document.getElementsByClassName("loader_7")[0].style.display = "block";
      this.props.CurrentMonthFetchFunction(this.props.info);
    }
    if (key === "8") {
      document.getElementsByClassName("loader_8")[0].style.display = "block";
      this.props.NextMonthFetchFunction(this.props.info);
    }
  }
  stateshow(data) {
    let name;
    if (
      this.props.stateFetch !== null &&
      this.props.stateFetch.status === 200
    ) {
      name = this.props.stateFetch.data.city.name;
      if (document.querySelector(".loader_1"))
        document.getElementsByClassName("loader_1")[0].style.display = "none";
    } else name = "City Name ";

    return data ? (
      <div className="col-md-3 " onClick={e => this.renderItemFunction("1")}>
        <div className="card-costum">
          <div className="card-costum-head">Area Name</div>
          <div className="card-costum-body">
            {name}
            <div id="loader" className="loader_1">
              <div id="shadow" />
              <div id="box" />
              <br />
              <br />
              <br />Waiting...
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="col-md-3" />
    );
  }
  distshow(data) {
    let name;
    if (this.props.distFetch !== null && this.props.distFetch.status === 200) {
      name = this.props.distFetch.data.city.country;
      if (document.querySelector(".loader_2"))
        document.getElementsByClassName("loader_2")[0].style.display = "none";
    } else name = "City Name ";
    return data ? (
      <div className="col-md-3 " onClick={e => this.renderItemFunction("2")}>
        <div className="card-costum">
          <div className="card-costum-head">Country Code</div>
          <div className="card-costum-body">
            {name}
            <div id="loader" className="loader_2">
              <div id="shadow" />
              <div id="box" />
              <br />
              <br />
              <br />Waiting...
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="col-md-3" />
    );
  }
  weathershow(data) {
    let name;
    if (
      this.props.weatherFetch !== null &&
      this.props.weatherFetch.status === 200
    ) {
      name = this.props.weatherFetch.data.list[0].weather[0].description;
      if (document.querySelector(".loader_3"))
        document.getElementsByClassName("loader_3")[0].style.display = "none";
    } else name = "Weather Status... ";
    return data ? (
      <div className="col-md-3 " onClick={e => this.renderItemFunction("3")}>
        <div className="card-costum">
          <div className="card-costum-head">Weather Des.</div>
          <div className="card-costum-body">
            {name}
            <div id="loader" className="loader_3">
              <div id="shadow" />
              <div id="box" />
              <br />
              <br />
              <br />Waiting...
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="col-md-3" />
    );
  }
  tempshow(data) {
    let pressure, temp_max, temp_min, name;
    if (this.props.tempFetch !== null && this.props.tempFetch.status === 200) {
      name = "Humidity - " + this.props.tempFetch.data.list[0].main.humidity;
      pressure =
        "Pressure - " + this.props.tempFetch.data.list[0].main.pressure;
      temp_max =
        "Max Temp - " + this.props.tempFetch.data.list[0].main.temp_max;
      temp_min =
        "Min Temp - " + this.props.tempFetch.data.list[0].main.temp_min;
      if (document.querySelector(".loader_4"))
        document.getElementsByClassName("loader_4")[0].style.display = "none";
    } else name = "Temp Status... ";
    return data ? (
      <div className="col-md-3 " onClick={e => this.renderItemFunction("4")}>
        <div className="card-costum">
          <div className="card-costum-head">Temp Status</div>
          <div className="card-costum-body">
            {name}
            <br />
            {pressure}
            <br />
            {temp_max}
            <br />
            {temp_min}
            <div id="loader" className="loader_4">
              <div id="shadow" />
              <div id="box" />
              <br />
              <br />
              <br />Waiting...
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="col-md-3" />
    );
  }
  windshow(data) {
    let wind_speed, name;
    if (this.props.windFetch !== null && this.props.windFetch.status === 200) {
      name = "Wind Temp - " + this.props.windFetch.data.list[0].wind.deg;
      wind_speed =
        "WInd Speed - " + this.props.windFetch.data.list[0].wind.speed;
      if (document.querySelector(".loader_5"))
        document.getElementsByClassName("loader_5")[0].style.display = "none";
    } else name = "Wind Status... ";
    return data ? (
      <div className="col-md-3 " onClick={e => this.renderItemFunction("5")}>
        <div className="card-costum">
          <div className="card-costum-head">Wind Status</div>
          <div className="card-costum-body">
            {name}
            <br />
            {wind_speed}
            <div id="loader" className="loader_5">
              <div id="shadow" />
              <div id="box" />
              <br />
              <br />
              <br />Waiting...
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="col-md-3" />
    );
  }
  lastmonthshow(data) {
    let humidity, pressure, temp_max, temp_min, name;

    if (this.props.lastMonth !== null && this.props.lastMonth.status === 200) {
      humidity =
        "Humidity - " + this.props.lastMonth.data.list[0].main.humidity;
      pressure =
        "Pressure - " + this.props.lastMonth.data.list[0].main.pressure;
      temp_max =
        "Max Temp - " + this.props.lastMonth.data.list[0].main.temp_max;
      temp_min =
        "Min Temp - " + this.props.lastMonth.data.list[0].main.temp_min;
      name = "Date - " + this.props.lastMonth.data.list[0].dt_txt;
      if (document.querySelector(".loader_6"))
        document.getElementsByClassName("loader_6")[0].style.display = "none";
    } else name = "Past Status... ";
    return data ? (
      <div className="col-md-3 " onClick={e => this.renderItemFunction("6")}>
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
            <div id="loader" className="loader_6">
              <div id="shadow" />
              <div id="box" />
              <br />
              <br />
              <br />Waiting...
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="col-md-3" />
    );
  }
  populationshow(data) {
    let humidity, pressure, temp_max, temp_min, name;
    if (
      this.props.currentMonth !== null &&
      this.props.currentMonth.status === 200
    ) {
      humidity =
        "Humidity - " + this.props.currentMonth.data.list[20].main.humidity;
      pressure =
        "Pressure - " + this.props.currentMonth.data.list[20].main.pressure;
      temp_max =
        "Max Temp - " + this.props.currentMonth.data.list[20].main.temp_max;
      temp_min =
        "Min Temp - " + this.props.currentMonth.data.list[20].main.temp_min;
      name = "Date - " + this.props.currentMonth.data.list[20].dt_txt;
      if (document.querySelector(".loader_7"))
        document.getElementsByClassName("loader_7")[0].style.display = "none";
    } else name = "Current Status... ";
    return data ? (
      <div className="col-md-3 " onClick={e => this.renderItemFunction("7")}>
        <div className="card-costum">
          <div className="card-costum-head">Current Month</div>
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
            <div id="loader" className="loader_7">
              <div id="shadow" />
              <div id="box" />
              <br />
              <br />
              <br />Waiting...
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="col-md-3" />
    );
  }
  letracyshow(data) {
    let humidity, pressure, temp_max, temp_min, name;
    if (this.props.nextMonth !== null && this.props.nextMonth.status === 200) {
      humidity =
        "Humidity - " + this.props.nextMonth.data.list[39].main.humidity;
      pressure =
        "Pressure - " + this.props.nextMonth.data.list[39].main.pressure;
      temp_max =
        "Max Temp - " + this.props.nextMonth.data.list[39].main.temp_max;
      temp_min =
        "Min Temp - " + this.props.nextMonth.data.list[39].main.temp_min;
      name = "Date - " + this.props.nextMonth.data.list[39].dt_txt;
      if (document.querySelector(".loader_8"))
        document.getElementsByClassName("loader_8")[0].style.display = "none";
    } else name = "Future Predictions... ";
    return data ? (
      <div className="col-md-3 " onClick={e => this.renderItemFunction("8")}>
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
            <div id="loader" className="loader_8">
              <div id="shadow" />
              <div id="box" />
              <br />
              <br />
              <br />Waiting...
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="col-md-3" />
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
