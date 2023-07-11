const dayjs = require ("dayjs")

function birthday(date){
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')

    console.log(`Idade: ${ageInYears}`)
}


birthday("1997-12-21")