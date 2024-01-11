export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      for (const value of Object.values(report.allEmployees)) {
        for (const name of value) {
          yield name;
        }
      }
    },
    // [Symbol.iterator]() {
    //   const employees = Object.values(report.allEmployees).flat();
    //   return {
    //     next: () => {
    //       const employee = employees.shift();
    //       return {
    //         value: employee,
    //         done: !Boolean(employee),
    //       };
    //     },
    //   };
    // },
  };
}
