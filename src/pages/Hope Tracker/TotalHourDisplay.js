import React from "react";
import './TotalHourDisplay.css'
import Card from "./HopeCard";
function TotalHoursDisplay({ totalHours }) {
    return <div className='totalHours'>
    <Card className = 'totalHoursCard'>
      <label className="class1">Total Hours: {totalHours}</label>
      </Card>
      </div>;
  }

  export default TotalHoursDisplay;