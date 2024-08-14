const { faker, fakerID_ID } = require('@faker-js/faker')
const fs = require('fs')
const path = require('path')

const students = []

for (let i = 0; i < 5; i++) {
  students.push({
    id: faker.string.uuid(),
    profile: faker.image.avatar(),
    name: fakerID_ID.person.fullName(),
    email: faker.internet.email(),
    phoneNumber: fakerID_ID.phone.number(),
    instance: `Instance${i + 1}`,
    createdAt: new Date().toISOString(),
  })
}

fs.writeFileSync(
  path.join(process.cwd(), 'src', 'temp', 'store-data.json'),
  JSON.stringify(students, null, 2)
)

console.log('✅ Tasks data generated.')
