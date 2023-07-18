export default function Table({ guardData }) {
  const statusStyles = {
    Active: 'text-green-600 bg-green-100 rounded-lg py-2 px-3',
    'Expiring Soon': 'text-yellow-600 bg-yellow-100 rounded-lg py-2 px-3',
    Expired: 'text-red-600 bg-red-100 rounded-lg py-2 px-3',
  };

  return (
    <table className="text-left w-full h-auto border-collapse table-auto">
      <thead className="bg-slate-200 h-16 border-b-2 border-slate-400">
        <tr>
          <th className="text-slate-700 text-[15px] font-medium rounded-tl-lg pl-8">
            First Name
          </th>
          <th className="text-slate-700 text-[15px] font-medium pl-8">
            Last Name
          </th>
          <th className="text-slate-700 text-[15px] font-medium pl-8">
            Security Licence No.
          </th>
          <th className="text-slate-700 text-[15px] font-medium pl-8">
            Licence Expiry Date
          </th>
          <th className="text-slate-700 text-[15px] font-medium rounded-tr-lg pl-8">
            Status
          </th>
        </tr>
      </thead>

      <tbody>
        {guardData.map(guard => (
          <tr
            key={guard.id}
            className="border-b-[1px] border-[#ddd] hover:bg-[#e2f1f1] hover:cursor-pointer"
          >
            {Object.values(guard)
              .slice(1)
              .map((data, ind, arr) => (
                <td className="text-gray-700 pl-8 py-3">
                  {ind === arr.length - 1 ? (
                    <span className={statusStyles[data]}>{data}</span>
                  ) : (
                    data
                  )}
                  {data !== data.status}
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
