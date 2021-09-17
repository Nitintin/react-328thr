module.exports = {
  data: 'employeeData',
  columns: [
    {
      displayText: 'Employee Name',
      valueKey: 'name',
      dataType: 'string',
    },
    {
      displayText: 'Department',
      valueKey: 'department',
      dataType: 'string',
    },
    {
      displayText: 'Date Of Birth',
      valueKey: 'dob',
      dataType: 'date',
    },
  ],
  isSearchable: true,
  isPagable: true,
  sortable: true,
  pageSize: 5,
};
