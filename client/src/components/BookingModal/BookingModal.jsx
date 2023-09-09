// import React from "react";
// import { Modal, Button } from "@mantine/core";
// import { DatePicker } from "@mantine/dates";
// import { useState } from "react";
// import { useContext } from "react";
// import { useMutation } from "react-query";
// import { bookVisit } from "../../utils/api.js";
// import UserDetailContext from "../../context/UserDetailContext.js";
// import { toast } from "react-toastify";

// const BookingModal = ({ opened, setOpened, email, propertyId }) => {
//   const [value, setValue] = useState(null);
//   const {
//     userDetails: { token },
//     // setUserDetails,
    
//   } = useContext(UserDetailContext);

//   const handleBookingSuccess = () => {
//     toast.success("You have booked your visit", {
//       position: "bottom-right",
//     });
//   };

//   const { mutate, isLoading } = useMutation({
//     mutationFn: () => bookVisit(value, propertyId, email, token),
//     onSuccess: () => handleBookingSuccess(),
//     onError: ({ response }) => toast.error(response.data.message),
//     onSettled: () => setOpened(false),
//   });

//   return (
//     <Modal
//       opened={opened}
//       onClose={() => setOpened(false)}
//       title="Select your date for a small session" //Select your date of visit
//       centered
//     >
//       <div className="flexColCenter" style={{ gap: "1rem" }}>
//         <DatePicker value={value} onChange={setValue} minDate={new Date()} />
//         <Button disabled={!value || isLoading} onClick={() => mutate()}>
//           Book a session
//         </Button>
//       </div>
//       {/* <div>
//         hello span
//       </div> */}
//     </Modal>
//   );
// };

// export default BookingModal;


import React, { useContext, useState } from "react";
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useMutation } from "react-query";
import UserDetailContext from "../../context/UserDetailContext.js";
import { bookVisit } from "../../utils/api.js";
import { toast } from "react-toastify";
import dayjs from "dayjs";
const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  const [value, setValue] = useState(null);
  const {
    userDetails: { token },
    setUserDetails,
  } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    toast.success("You have booked your visit", {
      position: "bottom-right",
    });
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        {
          id: propertyId,
          date: dayjs(value).format("DD/MM/YYYY"),
        },
      ],
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(value, propertyId, email, token),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) => toast.error(response.data.message),
    onSettled: () => setOpened(false),
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select your date of visit"
      centered
    >
      <div className="flexColCenter" style={{gap: "1rem"}}>
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button disabled={!value || isLoading} onClick={() => mutate()}>
          Book visit
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
