const users = [
  {
     email: "admin@dent.com",
     password: "admin",
     role: "admin"
  },
  {
      email: "doctor001@dent.com",
      password: "doctor001",
      role: "doctor"
  },
  {
      email: "doctor002@dent.com",
      password: "doctor002",
      role: "doctor"
  }
]

export const getUserByEmail = email => users.find(user => user.email === email)