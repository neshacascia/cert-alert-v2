export default function Table() {
  return (
    <table className="text-left w-full h-auto border-collapse table-auto">
      <thead className="bg-slate-200 h-14">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Security Licence No.</th>
          <th>Licence Expiry Date</th>
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
