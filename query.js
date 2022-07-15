// Find all the topics and tasks which are thought in the month of October

db.tasks.aggregate([
    {
        from: "topics",
        localField: "topicforeign_id",
        foreignField: "topic_isd",
        as: "merged"
    },
    {$project : {task_name: true, topic_name: true}}
])

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.companydrives.find({company_date : {$gte : ISODate("2020-10-15"), $lte : ISODate("2020-10-31")}})

// Find all the company drives and students who are appeared for the placement.

db.users.aggregate([
    {
       $lookup:
          {
             from: "companydrives",
             localField: "company_drives_attended",
             foreignField: "company_id",
             as: "company_drives"
          }
    },
    { $project : { user_name : true, "company_drives.company_name": true }}
])

// Find the number of problems solved by the user in codekata

db.users.find({}, {user_name : 1, codekata_problems_solved : 1})

// Find all the mentors with who has the mentee's count more than 15

db.mentors.find({mentee_count : {$gt : 15}})

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.users.find({$and: [{absent_on : {$exists : true}}, {"tasks_submitted.task_submitted_on" : {$not: {$gte : ISODate("2020-10-15"), $lte : ISODate("2020-10-31")}}}]})