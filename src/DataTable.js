import React from 'react';

const DataTable = (tableOption, userData) => {
  const showTable = () => {
    console.log(userData);
    console.log(tableOption);
    var newArr = [];
    var newTd = [];
    var newHeading = [];

    // for (var i = 0; i < Object.keys(userData[0]).length; i++) {
    //   tableOption.columns.map((item) => {
    //     if (item.valueKey === userData[Object.keys(userData[0])[i]]) {
    //       newHeading.push(<td>{item.displayText}</td>);
    //     }
    //   });
    // }
    // newArr.push(<th>{newHeading}</th>);

    userData.map((item) => {
      for (var i = 0; i < Object.keys(item).length; i++) {
        newTd.push(<td>{item[Object.keys(item)[i]]}</td>);
      }
      newArr.push(<tr>{newTd}</tr>);
      newTd = [];
    });
    return newArr;
  };

  return <table>{showTable()}</table>;
};

export default DataTable;
