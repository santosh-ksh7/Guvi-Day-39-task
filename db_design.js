// Topics collection

db.topics.insertMany([
    {
        topic_id: 1,
        topic_name: "Basics of javascript",
        topic_date: ISODate("2020-10-12"),
    },
    {
        topic_id: 2,
        topic_name: "HTML",
        topic_date: ISODate("2020-10-13"),
    },
    {
        topic_id: 3,
        topic_name: "CSS",
        topic_date: ISODate("2020-10-14"),
    },
    {
        topic_id: 4,
        topic_name: "Advance javascript",
        topic_date: ISODate("2020-10-15"),
    },
    {
        topic_id: 5,
        topic_name: "React",
        topic_date: ISODate("2020-10-16"),
    },
    {
        topic_id: 6,
        topic_name: "SQL & MongoDB",
        topic_date: ISODate("2020-10-17"),
    },
    {
        topic_id: 7,
        topic_name: "NodeJS",
        topic_date: ISODate("2020-10-18"),
    },
    {
        topic_id: 8,
        topic_name: "Express",
        topic_date: ISODate("2020-10-19"),
    }
])















// Tasks collection

db.tasks.insertMany([
    {
        task_id: 1,
        topicforeign_id: 1,
        task_name: "Basics of javascript",
        task_date: ISODate("2020-10-12"),
    },
    {
        task_id: 2,
        topicforeign_id: 2,
        task_name: "HTML Task",
        task_date: ISODate("2020-10-13"),
    },
    {
        task_id: 3,
        topicforeign_id: 3,
        task_name: "CSS Task",
        task_date: ISODate("2020-10-14"),
    },
    {
        task_id: 4,
        topicforeign_id: 4,
        task_name: "Advance javascript Task",
        task_date: ISODate("2020-10-15"),
    },
    {
        task_id: 5,
        topicforeign_id: 5,
        task_name: "React Task",
        task_date: ISODate("2020-10-16"),
    },
    {
        task_id: 6,
        topicforeign_id: 6,
        task_name: "SQL & MongoDB Task",
        task_date: ISODate("2020-10-17"),
    },
    {
        task_id: 7,
        topicforeign_id: 7,
        task_name: "NodeJS Task",
        task_date: ISODate("2020-10-18"),
    },
    {
        task_id: 8,
        topicforeign_id: 8,
        task_name: "Express Task",
        task_date: ISODate("2020-10-19"),
    }
])













// Company drives collection

db.companydrives.insertmany([
    {
        company_id: 1,
        company_name: "Infosys",
        company_date: ISODate("2020-10-12"),
    },
    {
        company_id: 2,
        company_name: "Wipro",
        company_date: ISODate("2020-10-13"),
    },
    {
        company_id: 3,
        company_name: "TCS",
        company_date: ISODate("2020-10-14"),
    },
    {
        company_id: 4,
        company_name: "HCL",
        company_date: ISODate("2020-10-15"),
    },
    {
        company_id: 5,
        company_name: "Accenture",
        company_date: ISODate("2020-10-16"),
    },
    {
        company_id: 6,
        company_name: "Byjus",
        company_date: ISODate("2020-10-17"),
    },
    {
        company_id: 7,
        company_name: "Facebook",
        company_date: ISODate("2020-10-18"),
    },
    {
        company_id: 8,
        company_name: "Mindtree",
        company_date: ISODate("2020-10-19"),
    }
])
















// Mentor collection

db.mentor.insertMany([
    {
        mentor_id: 1,
        mentor_name: "xxx5",
        mentee_count: 5,
    },
    {
        mentor_id: 2,
        mentor_name: "xxx1",
        mentee_count: 10,
    },
    {
        mentor_id: 3,
        mentor_name: "xxx2",
        mentee_count: 14,
    },
    {
        mentor_id: 4,
        mentor_name: "xxx3",
        mentee_count: 18,
    },
    {
        mentor_id: 5,
        mentor_name: "xxx4",
        mentee_count: 24,
    },
    {
        mentor_id: 6,
        mentor_name: "xxx6",
        mentee_count: 28,
    },
    {
        mentor_id: 7,
        mentor_name: "xxx7",
        mentee_count: 34,
    },
    {
        mentor_id: 8,
        mentor_name: "xxx8",
        mentee_count: 1,
    }
])











// Codekata collection

db.codekata.insertMany([
    {
        question_id: 1,
        question_name: "Basics of javascript",
    },
    {
        question_id: 2,
        question_name: "HTML",
    },
    {
        question_id: 3,
        question_name: "CSS",
    },
    {
        question_id: 4,
        question_name: "Advance javascript",
    },
    {
        question_id: 5,
        question_name: "React",
    },
    {
        question_id: 6,
        question_name: "SQL & MongoDB",
    },
    {
        question_id: 7,
        question_name: "NodeJS",
    },
    {
        question_id: 8,
        question_name: "Express",
    }
])














// Users or Sudents collection

db.users.insertMany([
    {
        user_id: 1,
        user_name: "xxx5",
        absent_on: ISODate("2020-10-3"),
        company_drives_attended: [1, 4, 7],
        codekata_problems_solved: [1, 4, 7],
        tasks_submitted: [
            {
            task_id : 1,
            task_submitted_on: ISODate("2020-10-")
            }
        ]
    },
    {
        user_id: 2,
        user_name: "xxx1",
        absent_on: ISODate("2020-10-4"),
        company_drives_attended: [2, 4],
        codekata_problems_solved: [2, 4],
        tasks_submitted: [
            {
            task_id : 2,
            task_submitted_on: ISODate("2020-10-2")
            }
        ]
     },
    {
        user_id: 3,
        user_name: "xxx2",
        absent_on: ISODate("2020-10-15"),
        company_drives_attended: [4, 7],
        codekata_problems_solved: [4, 7],
        tasks_submitted: [
            {
            task_id : 1,
            task_submitted_on: ISODate("2020-10-1")
            },
            {
                task_id : 2,
                task_submitted_on: ISODate("2020-10-5")
            }
        ]
     },
    {
        user_id: 4,
        user_name: "xxx3",
        absent_on: ISODate("2020-10-20"),
        company_drives_attended: [7, 8],
        codekata_problems_solved: [7, 8],
        tasks_submitted: [
            {
                task_id : 5,
                task_submitted_on: ISODate("2020-10-10")
            },
            {
                task_id : 7,
                task_submitted_on: ISODate("2020-10-15")
            }
        ]
     },
    {
        user_id: 5,
        user_name: "xxx4",
        absent_on: ISODate("2020-10-25"),
        company_drives_attended: [5, 1, 2],
        codekata_problems_solved: [5, 1, 2],
        tasks_submitted: [
            {
                task_id : 1,
                task_submitted_on: ISODate("2020-10-20")
            },
            {
                task_id : 8,
                task_submitted_on: ISODate("2020-10-25")
            }
        ]
    },
    {
        user_id: 6,
        user_name: "xxx6",
        absent_on: ISODate("2020-10-30"),
        company_drives_attended: [1,2,3,4,5,6],
        codekata_problems_solved: [1,2,3,4,5,6],
        tasks_submitted: [
            {
                task_id : 2,
                task_submitted_on: ISODate("2020-10-23")
            },
            {
                task_id : 8,
                task_submitted_on: ISODate("2020-10-18")
            }
        ]
    },
    {
        user_id: 7,
        user_name: "xxx7",
        absent_on: ISODate("2020-10-1"),
        company_drives_attended: [1,3,6,8],
        codekata_problems_solved: [1,3,6,8],
        tasks_submitted: [
            {
            task_id : 5,
            task_submitted_on: ISODate("2020-10-14")
            }
        ]
     },
    {
        user_id: 8,
        user_name: "xxx8",
        absent_on: ISODate("2020-10-2"),
        company_drives_attended: [3],
        codekata_problems_solved: [3],
        tasks_submitted: [
            {
            task_id : 6,
            task_submitted_on: ISODate("2020-10-6")
            }
        ]
    }
])