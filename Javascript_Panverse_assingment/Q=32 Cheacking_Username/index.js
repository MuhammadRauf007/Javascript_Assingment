
let current_users = ["admin", "user2", "user3", "user4", "user5"]
let new_users = ["user6", "USER3", "user3", "user9"]

new_users.forEach((user) => {
    current_users.includes(user) ?
        console.log(`The person will need to enter a new username.Because ${user} is already taken `):
        console.log(`The ${user} username is available`)
});