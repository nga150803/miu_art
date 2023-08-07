import React, { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "../../assets/css/MiniCalendar.css";
import Card from "../share/Card/Card";
import IonIcon from "@reacticons/ionicons";

const MiniCalendar: React.FC = () => {
  const [value, onChange] = useState<CalendarProps["value"]>(new Date());

//   const handleOnChange: CalendarProps["onChange"] = (value: CalendarProps["value"], event: React.MouseEvent<HTMLDivElement>) => {
//     if (Array.isArray(value)) {
//       // Handle range selection
//       if (value.length === 2 && value[0] instanceof Date && value[1] instanceof Date) {
//         onChange(value[0]);
//       }
//     } else if (value instanceof Date) {
//       onChange(value);
//     }
//   };

  return (
    <div>
      <Card extra="flex w-full h-full flex-col px-3 py-3 ">
        <Calendar 

        //   onChange={handleOnChange}
          value={value}
          prevLabel={<IonIcon name="chevron-back-outline" className=" h-6 w-6  " />}
          nextLabel={<IonIcon name="chevron-forward-outline" className=" h-6 w-6 " />}
          view={"month"}
        />
      </Card>
    </div>
  );
};

export default MiniCalendar;