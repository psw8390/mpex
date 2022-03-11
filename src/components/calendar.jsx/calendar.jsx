import React, {
  Component,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import Day from "react-live-clock";
import Month from "react-live-clock";


const Calendar = () => {
  let now = new Date();
  const [today, setToday] = useState(now.getDate());
  const [lastday, setLastDay] = useState(
    new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  );
  const [daylist, setDaylist] = useState([]);

  const getAlldate = (today, lastday) => {
    let dates = [];
  
    dates[0] = today;
    for (let i = 1; i <= lastday - today; i++) {
      dates[i] = today + i;
    }
  
    return dates;
  };

  const Alldate = useMemo(() => getAlldate(today, lastday), [daylist]);

  return(<>
    <div className="Year-Month">
      <p>
        <span className="Month">
          <Month 
              format={"MMM"} 
              ticking={false} 
              timezone={"KR/Pacific"}
            />
        </span>
        &nbsp;&nbsp;
        <span className="Year">
          <Day
              id="Day"
              format={"DD"}
              ticking={false}
              timezone={"KR/Pacific"}
          />
        </span>
      </p>
    </div>
    
    <div className="Day">
        {Alldate.map((value, index) => (
          <b className="Day02" key={index} style={{ cursor: "pointer" }}>
            {value}
          </b>
        ))}
    </div>
</>
)
}

export default Calendar;