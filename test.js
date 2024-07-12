export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: "CREATE_STUDENT",
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CREATE_FACULTY",
      },
    ],
  },
];

const adminPaths = [];
for (const element of adminPaths2) {
  if (element.name && element.path) {
    adminPaths.push({
      path: element.path,
      element: element.element,
    });
  } else {
    for (const childrenElement of element.children){
      adminPaths.push({
        path: childrenElement.path,
        element: childrenElement.element,
      });
    }
    
  }
}

console.log(adminPaths);

//   const adminPaths = [
//     {
//       path: "dashboard",
//       element: <AdminDashboard></AdminDashboard>,
//     },
//     {
//       path: "create-student",
//       element: <CreateStudent></CreateStudent>,
//     },
//     {
//       path: "create-admin",
//       element: <CreateAdmin></CreateAdmin>,
//     },
//     {
//       path: "create-faculty",
//       element: <CreateFaculty></CreateFaculty>,
//     },
//   ];

export default adminPaths;
