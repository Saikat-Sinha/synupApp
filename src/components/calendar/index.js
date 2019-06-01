import React, { Component } from "react";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateInstance: null,
      daysInMonth: []
    };

    this.handleAddEvent = this.handleAddEvent.bind(this);
  }

  componentDidMount() {
    const instance = new Date();
    this.setState({ dateInstance: instance });

    this.setState({
      daysInMonth: this.getDaysInMonth(
        instance.getMonth(),
        instance.getUTCFullYear()
      )
    });
  }

  getDaysInMonth(month, year) {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  handleAddEvent(ev, dateObj) {
    if (dateObj) {
      const evName = prompt("Enter event name");
      const color = prompt("Enter color code");
      dateObj.events = "dsadsa";
      console.log(evName, color, dateObj);
    }
  }

  render() {
    const { dateInstance, daysInMonth } = this.state;
    const monthMaping = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    const dayMapping = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const createDates = daysInMonth[0]
      ? new Array(daysInMonth[0].getDay())
      : [];
    const renderDates = [...createDates, ...daysInMonth];

    return (
      <div>
        {dateInstance ? (
          <h1 style={{ display: "flex", justifyContent: "center" }}>{`${
            monthMaping[dateInstance.getMonth()]
          } ${dateInstance.getUTCFullYear()}`}</h1>
        ) : null}

        <div
          className="days"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {dayMapping.map((v, i) => (
            <div
              style={{
                width: "200px",
                display: "flex",
                justifyContent: "center",
                background: "grey",
                border: "1px solid"
              }}
              key={i}
            >
              {v}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "0 5px"
          }}
        >
          {renderDates
            ? renderDates.map((v, i) => (
                <div
                  style={{
                    width: "200px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    border: "1px solid",
                    height: "150px",
                    alignItems: "center",
                    fontSize: "20px",
                    background: v ? "#eaccba" : "#d2d0cc"
                  }}
                  key={i}
                  onClick={ev => this.handleAddEvent(ev, v)}
                >
                  <div>{v ? v.getDate() : null}</div>
                  <div>{v ? v.events : null}</div>
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default Calendar;
