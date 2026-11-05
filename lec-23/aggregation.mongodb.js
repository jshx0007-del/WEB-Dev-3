use("CollegeDB");
// db.students.insertMany([
//     {
//     name: "Anya",
//     age: 21,
//     major: "Chemistry",
//     semester: 3
// },{
//     name: "Yashika",
//     age: 21,
//     major: "Chemistry",
//     semester: 3
// },{
//     name: "Bob",
//     age: 21,
//     major: "Computer Science",
//     semester: 3
// },{
//     name: "XYZ",
//     age: 21,
//     major: "BCA",
//     semester: 3
// }
// ])

db.students.aggregate([
    {
        $match: {major: "Computer Science"}
    },{
        $project: {
            name: 1,
            age: 1,
            major: 1,
            semester: 1,
            _id:0
        }
    },
    {
        $group: {
            _id: "$semester",
            totalStudents: {$sum: 1},
            averageAge: {$avg: "$age"}
        }
    }
    // {
    //     $sort: {_id: -1}
    // }
])