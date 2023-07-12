export default function FormModal({}) {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] h-screen flex justify-center items-center fixed inset-0 z-50">
      <form
        className={
          'text-black bg-white w-[50%] h-[60%] flex flex-col justify-center items-center'
        }
      >
        <label>First Name</label>
        <input type="text" />

        <label>Last Name</label>
        <input type="text" />

        <label>Security Guard Licence No.</label>
        <input type="number" />

        <label>Security Guard Licence Expiry Date</label>
        <input type="date" />
      </form>
    </div>
  );
}
