import { useRef } from 'react';
import moment from 'moment';

export default function FormModal({ setFormOpened, addGuardHandler }) {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const licenceNoInputRef = useRef();
  const licenceExpiryInputRef = useRef();

  const currentDate = moment().format('YYYY/MM/D');
  let status;

  function submitHandler(e) {
    e.preventDefault();

    const enteredFirstNameValue = firstNameInputRef.current.value;
    const enteredLastNameValue = lastNameInputRef.current.value;
    const enteredLicenceNoValue = licenceNoInputRef.current.value;
    const enteredLicenceExpiryValue = moment(
      licenceExpiryInputRef.current.value
    );

    if (enteredLicenceExpiryValue.isAfter(currentDate)) {
      status = 'Active';
    } else if (enteredLicenceExpiryValue.isBefore(currentDate)) {
      status = 'Expiring Soon!';
    } else {
      status = 'Expired!';
    }

    const guardData = {
      firstName: enteredFirstNameValue,
      lastName: enteredLastNameValue,
      licenceNo: enteredLicenceNoValue,
      licenceExpiry: enteredLicenceExpiryValue,
      status: status,
    };

    addGuardHandler(guardData);
    setFormOpened(false);
  }

  return (
    <div className="bg-[rgba(0,0,0,0.5)] h-screen flex justify-center items-center fixed inset-0 z-50">
      <form
        onSubmit={submitHandler}
        className={
          'text-black bg-[#ffffff] w-[50%] h-[60%] flex flex-col justify-center gap-10 px-8'
        }
      >
        <div className="flex justify-between gap-6">
          <label
            htmlFor="first-name"
            className="font-medium w-full flex flex-col"
          >
            First Name
            <input
              type="text"
              id="first-name"
              ref={firstNameInputRef}
              className="bg-[#fbfbfb] border-draft font-medium border-[1px] rounded-[4px] py-3 px-5 mt-2"
              required
            />
          </label>

          <label
            htmlFor="last-name"
            className="font-medium w-full flex flex-col"
          >
            Last Name
            <input
              type="text"
              id="last-name"
              ref={lastNameInputRef}
              className="bg-[#fbfbfb] border-draft font-medium border-[1px] rounded-[4px] py-3 px-5 mt-2"
              required
            />
          </label>
        </div>

        <div className="flex justify-between gap-6">
          <label htmlFor="sg-no" className="font-medium w-full flex flex-col">
            Security Guard Licence No.
            <input
              type="number"
              id="sg-no"
              ref={licenceNoInputRef}
              className="bg-[#fbfbfb] border-draft font-medium border-[1px] rounded-[4px] py-3 px-5 mt-2"
              required
            />
          </label>

          <label
            htmlFor="sg-expiry"
            className="font-medium w-full flex flex-col"
          >
            Licence Expiry Date
            <input
              type="date"
              id="sg-expiry"
              ref={licenceExpiryInputRef}
              className="bg-[#fbfbfb] border-draft font-medium border-[1px] rounded-[4px] py-3 px-5 mt-2"
              required
            />
          </label>
        </div>

        <div className="flex justify-end gap-6">
          <button
            type="submit"
            className="text-white bg-green-500 font-medium w-[120px] rounded-3xl py-3 px-1 hover:bg-green-300"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => setFormOpened(false)}
            className="text-white bg-red-500 font-medium w-[120px] rounded-3xl py-2 px-2 hover:bg-red-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
