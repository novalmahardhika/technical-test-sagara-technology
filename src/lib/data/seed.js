const { faker, fakerID_ID } = require('@faker-js/faker')
const fs = require('fs')
const path = require('path')

const students = []

const arrInstance = [
  'Telkom University',
  'Bina Nusantara',
  'Univeritas Indonesia',
  'Univeristas Gunadarma',
  'Univeristas Mercu Buana',
  'Universitas Bina Sarana Informatika',
  'Universitas Budi Luhur',
  'Universitas Negeri Jakarta',
]

const arrClass = [
  'UI/UX',
  'Backend',
  'Frontend',
  'Quality Assurance',
  'IOS Developer',
  'Fullstack Developer',
  'Android Developer',
]

for (let i = 0; i < 2000; i++) {
  students.push({
    id: faker.string.uuid(),
    profile: faker.image.avatar(),
    name: fakerID_ID.person.fullName(),
    password: '12345678',
    email: faker.internet.email(),
    phoneNumber: fakerID_ID.phone.number(),
    instance: arrInstance[Math.floor(Math.random() * arrInstance.length)],
    course: arrClass[Math.floor(Math.random() * arrClass.length)],
    score: Math.floor(Math.random() * (100 - 60 + 1)) + 60,
    createdAt: new Date().toISOString(),
  })
}

fs.writeFileSync(
  path.join(process.cwd(), 'tmp', 'store-data.json'),
  JSON.stringify(students, null, 2)
)

console.log('✅ Tasks data generated.')
