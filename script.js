//* Task 1: Create your own resume data in JSON format


//Creating the JSON object of my resume
const santhoshResume = {
    "id": "1",
    "name": {
        "firstName": "Santhosh",
        "middleName": "",
        "lastName": "Annamalai",
        "nickName": ""
    },
    "personalDetails": {
        "email": "santhoshmathi2002@gmail.com",
        "phoneNumber": "+91 9361206901",
        "address": {
            "addressLine1": "40/52 chellaneri street",
            "addressLine2": "",
            "district": "Tiruvannamalai",
            "state": "Tamil Nadu",
            "pincode": "606601"
        }
    },

    "profileDescription": {
        "description": "To obtain a challenging position as a front-end developer utilizing my skills in HTML, CSS, JavaScript, and various frameworks such as ReactJS to create responsive and engaging web applications. I am eager to utilize my experience in building intuitive user interfaces and my passion for emerging technologies to contribute to a dynamic development team and to help drive the success of the company."
    },

    "skills": [
        "React",
        "JavaScript",
        "Express.js",
        "JWT",
        "GraphQL",
        "Node.js",
        "MongoDB",
        "Redux",
        "Web Socket",
        "HTML & CSS",
        "Cypress",
        "Data Structures",
        "Git",
        "Python",
        "GitHub",
        "SQL"
      ],

    "employmentHistory": [
        {
            "id": "1",
            "companyName": "Customer Success Engineer, Pillir (Formerly appsFreedom India Private Limited)",
            "position": "Customer Success Engineer",
            "joinedDate": "Apr, 2022",
            "isPresent": "yes",
            "relievedDate": "",
            "location": "onsite",
            "employmentType": "full-time",
            "companyAddress": {
                "addressLine1": "No.1, 1st Lane, Shanthi Ram Center, 3rd Floor",
                "addressLine2": "Nungambakkam High Road, Nungambakkam",
                "district": "Chennai",
                "state": "Tamil Nadu",
                "pincode": "600034"
            },
            "description": "<ul><li>Build the tool for running the bulk automation scripts using React JS and APIs are built in Express.js.</li><li>The tool can create a new test run with respect to projects, suites, and runs which already exist in TestRail (Test case maintenance platform) by using the TestRail APIs provided by TestRail.</li><li>Run the newly created test run with automation scripts written using Cypress, which may consist of hundreds of cases.</li><li>Status of each case (Passed, failed, etc.) is added to TestRail with screenshots instantly after each case is executed.</li><li>Developed front-end of B2B applications with a low-code platform and integrated it with Backend which can be compatible with all devices like Android, iOS, web.</li><li>Automated test cases using JS testing framework called Cypress.</li></ul>",
            "skills": [
                "React.js",
                "Express.js",
                "REST API",
                "React States",
                "React Hooks",
                "React Context API",
                "React Router",
                "CSS",
                "Javascript",
                "SQL",
                "Cypress",
                "Automation Testing",
                "Mobile App Development"
            ]
        },

        {
            "id": "2",
            "companyName": "TechHive Technologies",
            "position": "Front End Developer",
            "joinedDate": "Nov, 2023",
            "isPresent": "yes",
            "relievedDate": "",
            "location": "Remote",
            "employmentType": "part-time",
            "companyAddress": {
                "addressLine1": "Plot No.11, 24th, 2 Nd Cross Street, Kandan Avenue JB Estate, Avadi",
                "addressLine2": "Avadi",
                "district": "Chennai",
                "state": "Tamil Nadu",
                "pincode": "600054"
            },
            "description": "<ul><li>Developed the admin dashboard for cab booking application with the UI received in Figma.</li><li>In Dashboard, the admin can manage the trips booked from various modes like mobile apps, website and can also create new trips through the dashboard.</li><li>Admin can also manage the drivers registered for taking the trip. For a driver to take the trip, they must be verified by the admin.</li><li>Dashboard also consists of management of driver's wallet amount.</li><li>Admin can also manage the fare amount. They can increase the fare amount on occasional festivals.</li><li>Developed reusable components like table, button, input, select, etc.</li><li>Integrated the APIs with the help of Axios.</li></ul>",
            "skills": [
                "React JS",
                "REST API",
                "axios",
                "JWT",
                "Tailwind CSS",
                "Ant Design",
                "Context API",
                "States",
                "Hooks",
                "React Routers"
              ]
        }
    ],

    "educationHistory": [
        {
            "ug": {
                "id": "1",
                "institueName": "Jeppiaar Institue of Technology",
                "department": "Computer Science and Engineering",
                "from": "Aug 2019",
                "to": "Jun 2023",
                "percentage": "92",
                "location": "Chennai, Tamil Nadu"
            },
    
            "school": {
                "id": "2",
                "institueName": "Bhagavan Higher Secondary school",
                "department": "HSC",
                "from": "Aug 2017",
                "to": "Mar 2019",
                "percentage": "85",
                "location": "Tiruvannamalai, Tamil Nadu"
            }
        }
    ],

    "personalProjects": [
        {
            "id": "1",
            "projectName": "ReactDo - MERN Stack",
            "started": "Mar 2023",
            "completed": "Mar 2023",
            "description": "<ul><li>This Project was developed for completely learning purpose.</li><li>It includes all the validations. For instance, if the user attempts to call the API without a token, they will be unauthorized.</li><li>Also it can consist basic CRUD operation. User can create the task, Update the task, delete the task.</li><li>User can also able to move the task to completed state.</li><li>The project also contains Filter and Search options.</li><li>Deployed the front end and backend in onrender.com.</li></ul>",
            "deployedLink": "https://merntask-d91q.onrender.com/#/login",
            "techStacks": [
                "Reactjs", 
                "States", 
                "Hooks", 
                "React Router", 
                "Express.js", 
                "JWT", 
                "HTML",
                "Formik", 
                "MongoDB"
            ]
        },
        {
            "id": "2",
            "projectName": "ReactExpense - MERN Stack",
            "started": "May 2023",
            "completed": "May 2023",
            "description": "<ul> <li>The Expense app was built for tracking the daily expenses, as well as monthly expenses.</li> <li>User can add the daily expenses like breakfast, lunch, snacks, dinner.</li> <li>In Dashboard user can see the daily expense amount.</li> <li>User can also get the monthly expense details. And also user can track his expense on date wise manner.</li> <li>Deployed the front end and backend in onrender.com.</li> </ul>",
            "deployedLink": "https://reactexpenses.onrender.com/login",
            "techStacks": [
                "Reactjs", 
                "States", 
                "Hooks", 
                "React Router", 
                "Express.js", 
                "JWT", 
                "HTML",
                "Formik", 
                "MongoDB"
            ]
        }
    ],

    "achievements": [
        {
            "id": "1",
            "achievementName": "Javascript skill assessment by HackerRank",
            "certificateUrl": "https://www.hackerrank.com/certificates/c8c655999f7a",
            "issuedBy": "HackerRank",
            "issuedAt": "28 Sep, 2023"
        },
        {
            "id": "2",
            "achievementName": "REST API assessment by HackerRank",
            "certificateUrl": "https://www.hackerrank.com/certificates/ce51aefa48f9",
            "issuedBy": "HackerRank",
            "issuedAt": "29 Aug, 2023"
        }
    ],

    "links": [
        {
            "id": "1",
            "linkedIn": "https://www.linkedin.com/in/santhosh-annamalai-a32ba31a3/"
        },
        {
            "id": "2",
            "portfolio": "https://santhoshannamalaiportfolio.web.app/"
        },
        {
            "id": "3",
            "portfolio": "https://github.com/santhosh404"
        }
    ],

    "signature": "https://path-to-signature.com"
}

console.log("Resume in JSON", santhoshResume);



//* Task 2: Iterate over the above JSON using all for loops


        //* Using For Loop

        console.log("Using For Loop");
        
        function iterateObjectUsingForLoop(object) {

            const keys = Object.keys(object);

            //Using for loop
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];

                //Making the recursive function call to print the nested object as key : value, if the received current element is object
                if (typeof object[key] === 'object') {
                    console.log(`${key}: `);
                    iterateObjectUsingForLoop(object[key]); 
                } 

                //If current element is not an object, then priting the key: value
                else {
                    console.log(`${key}: ${object[key]}`);
                }
            }
        }

        console.log(iterateObjectUsingForLoop(santhoshResume));





        //* Using For in Loop
        
        console.log("Using For In Loop");

        function iterateObjectUsingForInLoop(object) {

            //Using for...in Loop
            for(let key in object) {

                //Making the recursive function call to print the nested object as key : value, if the received current element is object
                if (typeof object[key] === 'object') {
                    console.log(`${key}: `);
                    iterateObjectUsingForInLoop(object[key]); 
                } 
                
                //If current element is not an object, then priting the key: value
                else {
                    console.log(`${key}: ${object[key]}`);
                }
            }
        }

        console.log(iterateObjectUsingForInLoop(santhoshResume));





        //* Using For of Loop
    
        console.log("Using For Of Loop");

        function iterateObjectUsingForOfLoop(object) {

            //Using for...of Loop
            for(let key of Object.keys(object)) {

                //Making the recursive function call to print the nested object as key : value, if the received current element is object
                if (typeof object[key] === 'object') {
                    console.log(`${key}: `);
                    iterateObjectUsingForOfLoop(object[key]); 
                } 
                
                //If current element is not an object, then priting the key: value
                else {
                    console.log(`${key}: ${object[key]}`);
                }
            }
        }

        console.log(iterateObjectUsingForOfLoop(santhoshResume));





        //* Using forEach Loop
    
        console.log("Using forEach Loop");

        function iterateObjectUsingForEachLoop(object) {

            //Using forEach Loop
            Object.entries(object).forEach(([key, value], index) => {

                //Making the recursive function call to print the nested object as key : value, if the received current element is object
                if (typeof object[key] === 'object') {
                    console.log(`${key}: `);
                    iterateObjectUsingForEachLoop(object[key]); 
                } 
                
                //If current element is not an object, then priting the key: value
                else {
                    console.log(`${key}: ${object[key]}`);
                }
            })
        }

        console.log(iterateObjectUsingForEachLoop(santhoshResume));