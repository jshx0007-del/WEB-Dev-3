db.students.insertMany([{
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    semester: 4,
},{
    name: "Jane Smith",
    age: 22,
    major: "Mathematics",
    semester: 2
},{
    name: "Alice Johnson",
    age: 19,
    major: "Physics",
    semester: 1
},{
},{
    name: "Johnson",
    age: 19,
    major: "Physics",
    semester: 3
},{
    name: "Bob Brown",
    age: 21,
    major: "Chemistry",
    semester: 3
}
])

db.students.find({
    $or: [
        {semester: 3},
        {major: "Mathematics"}
    ]
}).sort({age: 1}).skip(1).limit(2)