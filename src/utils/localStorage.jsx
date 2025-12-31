
const employees = [
  
    {
      id: 101,
      email: "employee1@example.com",
      password: "123",
      firstName: "Aarav",
      taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          title: "Prepare Sales Report",
          description: "Compile and submit the monthly sales performance report.",
          date: "2025-01-10",
          category: "Reporting",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Team Meeting",
          description: "Attend the weekly team sync-up.",
          date: "2025-01-12",
          category: "Meetings",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Customer Follow-up",
          description: "Follow up with pending customer queries.",
          date: "2025-01-09",
          category: "Support",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 102,
      email: "employee2@example.com",
      password: "123",
      firstName: "Priya",
      taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          title: "Update Website Content",
          description: "Refresh outdated blog posts and product pages.",
          date: "2025-01-13",
          category: "Content",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "SEO Audit",
          description: "Run an SEO audit and suggest improvements.",
          date: "2025-01-20",
          category: "Marketing",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Email Campaign Review",
          description: "Analyze the latest email campaign results.",
          date: "2025-01-05",
          category: "Marketing",
          active: false,
          newTask: true,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 103,
      email: "employee3@example.com",
      password: "123",
      firstName: "Rohan",
      taskNumbers: {
        active: 2,
        newTask: 2,
        completed: 2,
        failed: 0
      },
      tasks: [
        {
          title: "Bug Fixing Sprint",
          description: "Resolve priority bugs from the backlog.",
          date: "2025-01-11",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Code Review",
          description: "Review pull requests from team members.",
          date: "2025-01-14",
          category: "Development",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Feature Deployment",
          description: "Deploy the new feature to staging.",
          date: "2025-01-03",
          category: "DevOps",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 104,
      email: "employee4@example.com",
      password: "123",
      firstName: "Sneha",
      taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          title: "Design Mockups",
          description: "Create UI mockups for the new dashboard.",
          date: "2025-01-16",
          category: "Design",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Client Presentation",
          description: "Present design concepts to the client.",
          date: "2025-01-22",
          category: "Client Work",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Brand Guidelines",
          description: "Update the company brand guidelines.",
          date: "2025-01-02",
          category: "Branding",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 105,
      email: "employee5@example.com",
      password: "123",
      firstName: "Kabir",
      taskNumbers: {
        active: 3,
        newTask: 1,
        completed: 0,
        failed: 1
      },
      tasks: [
        {
          title: "Inventory Check",
          description: "Audit the warehouse inventory levels.",
          date: "2025-01-09",
          category: "Operations",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Vendor Meeting",
          description: "Discuss new procurement contracts with vendors.",
          date: "2025-01-18",
          category: "Operations",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Logistics Report",
          description: "Prepare a weekly logistics performance report.",
          date: "2025-01-06",
          category: "Logistics",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    }
];


const admin = [
  {
    id: 201,
    email: "admin@me.com",
    password: "123"
  }
];


// Data set
export const setLocalStorage = ()=>{
  // Local storage er moddhe data set kora
  localStorage.setItem('employees',JSON.stringify(employees));
  localStorage.setItem('admin',JSON.stringify(admin))
}

// Data get
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees')) 
  const admin = JSON.parse(localStorage.getItem('admin')) 
  
return {employees,admin}
  

}