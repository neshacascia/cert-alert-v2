export default function Table({ guardData }) {
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
          <th className="text-slate-700 text-[15px] font-medium rounded-tr-lg pl-8">
            Licence Expiry Date
          </th>
        </tr>
      </thead>

      <tbody>
        {guardData.map(guard => (
          <tr key={guard.id}>
            {Object.values(guard)
              .slice(1)
              .map(data => (
                <td className="pl-8 py-3">{data}</td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
