export default function Table() {
  return (
    <table className="text-left w-full h-auto border-collapse table-auto">
      <thead className="bg-slate-200 h-14">
        <tr>
          <th className="pl-8">First Name</th>
          <th className="pl-8">Last Name</th>
          <th className="pl-8">Security Licence No.</th>
          <th className="pl-8">Licence Expiry Date</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Nesha</td>
          <td>Mervin</td>
          <td>123</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  );
}
