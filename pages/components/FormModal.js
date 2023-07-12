export default function FormModal({ setFormOpened }) {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] h-screen flex justify-center items-center fixed inset-0 z-50">
      <form
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
              className="bg-[#fbfbfb] border-draft font-medium border-[1px] rounded-[4px] py-3 px-5 mt-2"
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
              className="bg-[#fbfbfb] border-draft font-medium border-[1px] rounded-[4px] py-3 px-5 mt-2"
            />
          </label>
        </div>

        <div className="flex justify-between gap-6">
          <label htmlFor="sg-no" className="font-medium w-full flex flex-col">
            Security Guard Licence No.
            <input
              type="number"
              id="sg-no"
              className="bg-[#fbfbfb] border-draft font-medium border-[1px] rounded-[4px] py-3 px-5 mt-2"
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
              className="bg-[#fbfbfb] border-draft font-medium border-[1px] rounded-[4px] py-3 px-5 mt-2"
            />
          </label>
        </div>

        <div className="flex justify-end gap-6 pt-6">
          <button>Submit</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
}
