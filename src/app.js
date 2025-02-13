//CHART.JS
const ctx = document.querySelector("#mood-chart")
const enterValue = document.querySelector('#add-value-btn')
const color = 'black'

const monthsData = [
    {
        data: [],
        type: 'bar',
        label: 'Months-23',
        backgroundColor: 'hsla(150, 100%, 50%, .4)',
        borderColor:  'hsla(150, 100%, 50%, .4)',
        barThickness: 'flex'
    },
    {
        data: [],
        type: 'bar',
        label: 'Months-24',
        backgroundColor: 'hsla(150, 100%, 50%, .4)',
        borderColor:  'hsla(150, 100%, 50%, .4)',
        barThickness: 'flex'
    },
    {
        data: [],
        type: 'bar',
        label: 'Months-25',
        backgroundColor: 'hsla(150, 100%, 50%, .4)',
        borderColor:  'hsla(150, 100%, 50%, .4)',
        barThickness: 'flex'
    },
    {
        data: [],
        type: 'bar',
        label: 'Months-26',
        backgroundColor: 'hsla(150, 100%, 50%, .4)',
        borderColor:  'hsla(150, 100%, 50%, .4)',
        barThickness: 'flex'
    }
]

const datasets = [
    {
        data: [
                {'x': '2023-01-01', 'y': 0},
                {'x': '2023-01-02', 'y': 0},
                {'x': '2023-01-03', 'y': 6},
                {'x': '2023-01-04', 'y': 4},
                {'x': '2023-01-05', 'y': 1},
                {'x': '2023-01-06', 'y': 3},
                {'x': '2023-01-07', 'y': 2},
                {'x': '2023-01-08', 'y': 4},
                {'x': '2023-01-09', 'y': 3},
                {'x': '2023-01-10', 'y': 0},
                {'x': '2023-01-11', 'y': 3},
                {'x': '2023-01-12', 'y': 2},
                {'x': '2023-01-13', 'y': 6},
                {'x': '2023-01-14', 'y': 5},
                {'x': '2023-01-15', 'y': 5},
                {'x': '2023-01-16', 'y': 6},
                {'x': '2023-01-17', 'y': 0},
                {'x': '2023-01-18', 'y': 5},
                {'x': '2023-01-19', 'y': 1},
                {'x': '2023-01-20', 'y': 5},
                {'x': '2023-01-21', 'y': 5},
                {'x': '2023-01-22', 'y': 2},
                {'x': '2023-01-23', 'y': 3},
                {'x': '2023-01-24', 'y': 3},
                {'x': '2023-01-25', 'y': 1},
                {'x': '2023-01-26', 'y': 1},
                {'x': '2023-01-27', 'y': 0},
                {'x': '2023-01-28', 'y': 1},
                {'x': '2023-01-29', 'y': 3},
                {'x': '2023-01-30', 'y': 2},
                {'x': '2023-01-31', 'y': 4},
                {'x': '2023-02-01', 'y': 5},
                {'x': '2023-02-02', 'y': 4},
                {'x': '2023-02-03', 'y': 3},
                {'x': '2023-02-04', 'y': 1},
                {'x': '2023-02-05', 'y': 6},
                {'x': '2023-02-06', 'y': 4},
                {'x': '2023-02-07', 'y': 0},
                {'x': '2023-02-08', 'y': 0},
                {'x': '2023-02-09', 'y': 2},
                {'x': '2023-02-10', 'y': 6},
                {'x': '2023-02-11', 'y': 3},
                {'x': '2023-02-12', 'y': 6},
                {'x': '2023-02-13', 'y': 4},
                {'x': '2023-02-14', 'y': 1},
                {'x': '2023-02-15', 'y': 5},
                {'x': '2023-02-16', 'y': 2},
                {'x': '2023-02-17', 'y': 0},
                {'x': '2023-02-18', 'y': 3},
                {'x': '2023-02-19', 'y': 3},
                {'x': '2023-02-20', 'y': 5},
                {'x': '2023-02-21', 'y': 4},
                {'x': '2023-02-22', 'y': 0},
                {'x': '2023-02-23', 'y': 0},
                {'x': '2023-02-24', 'y': 3},
                {'x': '2023-02-25', 'y': 2},
                {'x': '2023-02-26', 'y': 1},
                {'x': '2023-02-27', 'y': 3},
                {'x': '2023-02-28', 'y': 2},
                {'x': '2023-03-01', 'y': 5},
                {'x': '2023-03-02', 'y': 4},
                {'x': '2023-03-03', 'y': 6},
                {'x': '2023-03-04', 'y': 6},
                {'x': '2023-03-05', 'y': 0},
                {'x': '2023-03-06', 'y': 3},
                {'x': '2023-03-07', 'y': 2},
                {'x': '2023-03-08', 'y': 6},
                {'x': '2023-03-09', 'y': 2},
                {'x': '2023-03-10', 'y': 1},
                {'x': '2023-03-11', 'y': 6},
                {'x': '2023-03-12', 'y': 2},
                {'x': '2023-03-13', 'y': 5},
                {'x': '2023-03-14', 'y': 3},
                {'x': '2023-03-15', 'y': 4},
                {'x': '2023-03-16', 'y': 0},
                {'x': '2023-03-17', 'y': 2},
                {'x': '2023-03-18', 'y': 2},
                {'x': '2023-03-19', 'y': 3},
                {'x': '2023-03-20', 'y': 1},
                {'x': '2023-03-21', 'y': 3},
                {'x': '2023-03-22', 'y': 5},
                {'x': '2023-03-23', 'y': 5},
                {'x': '2023-03-24', 'y': 1},
                {'x': '2023-03-25', 'y': 4},
                {'x': '2023-03-26', 'y': 0},
                {'x': '2023-03-27', 'y': 2},
                {'x': '2023-03-28', 'y': 6},
                {'x': '2023-03-29', 'y': 2},
                {'x': '2023-03-30', 'y': 2},
                {'x': '2023-03-31', 'y': 4},
                {'x': '2023-04-01', 'y': 6},
                {'x': '2023-04-02', 'y': 5},
                {'x': '2023-04-03', 'y': 6},
                {'x': '2023-04-04', 'y': 3},
                {'x': '2023-04-05', 'y': 0},
                {'x': '2023-04-06', 'y': 4},
                {'x': '2023-04-07', 'y': 1},
                {'x': '2023-04-08', 'y': 6},
                {'x': '2023-04-09', 'y': 0},
                {'x': '2023-04-10', 'y': 5},
                {'x': '2023-04-11', 'y': 3},
                {'x': '2023-04-12', 'y': 0},
                {'x': '2023-04-13', 'y': 1},
                {'x': '2023-04-14', 'y': 5},
                {'x': '2023-04-15', 'y': 5},
                {'x': '2023-04-16', 'y': 2},
                {'x': '2023-04-17', 'y': 4},
                {'x': '2023-04-18', 'y': 1},
                {'x': '2023-04-19', 'y': 2},
                {'x': '2023-04-20', 'y': 0},
                {'x': '2023-04-21', 'y': 5},
                {'x': '2023-04-22', 'y': 5},
                {'x': '2023-04-23', 'y': 0},
                {'x': '2023-04-24', 'y': 5},
                {'x': '2023-04-25', 'y': 2},
                {'x': '2023-04-26', 'y': 5},
                {'x': '2023-04-27', 'y': 6},
                {'x': '2023-04-28', 'y': 3},
                {'x': '2023-04-29', 'y': 4},
                {'x': '2023-04-30', 'y': 0},
                {'x': '2023-05-01', 'y': 6},
                {'x': '2023-05-02', 'y': 5},
                {'x': '2023-05-03', 'y': 4},
                {'x': '2023-05-04', 'y': 1},
                {'x': '2023-05-05', 'y': 4},
                {'x': '2023-05-06', 'y': 0},
                {'x': '2023-05-07', 'y': 0},
                {'x': '2023-05-08', 'y': 2},
                {'x': '2023-05-09', 'y': 4},
                {'x': '2023-05-10', 'y': 4},
                {'x': '2023-05-11', 'y': 2},
                {'x': '2023-05-12', 'y': 3},
                {'x': '2023-05-13', 'y': 3},
                {'x': '2023-05-14', 'y': 0},
                {'x': '2023-05-15', 'y': 3},
                {'x': '2023-05-16', 'y': 0},
                {'x': '2023-05-17', 'y': 6},
                {'x': '2023-05-18', 'y': 1},
                {'x': '2023-05-19', 'y': 3},
                {'x': '2023-05-20', 'y': 2},
                {'x': '2023-05-21', 'y': 0},
                {'x': '2023-05-22', 'y': 5},
                {'x': '2023-05-23', 'y': 3},
                {'x': '2023-05-24', 'y': 0},
                {'x': '2023-05-25', 'y': 1},
                {'x': '2023-05-26', 'y': 6},
                {'x': '2023-05-27', 'y': 3},
                {'x': '2023-05-28', 'y': 1},
                {'x': '2023-05-29', 'y': 5},
                {'x': '2023-05-30', 'y': 4},
                {'x': '2023-05-31', 'y': 4},
            ],
        label: '2023',
        backgroundColor: 'hsla(215, 100%, 35%, .4)',
        borderColor: 'hsla(215, 100%, 35%, .4)'
    },
    {
        data: [],
        label: "2024",
        backgroundColor: 'hsla(215, 100%, 32%, .4)',
        borderColor: 'hsla(215, 100%, 32%, .4)'
    },
    {
        data: [],
        label: "2025",
        backgroundColor: 'hsla(215, 100%, 30%, .4)',
        borderColor: 'hsla(215, 100%, 30%, .4)'
    },
    {
        data: [],
        label: "2026",
        backgroundColor: 'hsla(215, 100%, 28%, .4)',
        borderColor: 'hsla(215, 100%, 28%, .4)'
    }
]
monthsData.forEach(e =>  {
    datasets.push(e)
})

const moodChart = new Chart(
    ctx, 
    { 
        type: 'line', 
        data: {
            datasets
        },
        options: {
            animation: true, 
            maintainAspectRatio: false,
            clip: false,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    }, 
                    title: {
                        display: true,
                        text: "x",
                        font: {
                            size: 14,
                        },
                        color
                    }, 
                    ticks: {
                        color
                    },
                    stacked: true,
                    categoryPercentage: 0.8,
                    barPercentage: 0.9 
                }, 
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 7,
                    title: {
                        display: true,
                        text: "y",
                        font: {
                            size: 14,
                        },
                        color
                    },
                        ticks: {
                            color,
                            stepSize: 1
                        }
                }
            }, 
            plugins: {
                tooltip: {
                    intersect: false
                }, 
                legend: {
                    labels: {
                        color
                    }
                }
            },
            elements: {
                point: {
                    borderWidth: 0,
                },
                line: {
                    borderWidth: 3, 
                    tension: .4
                }
            }
        }
    }
)


//My stuff
const twentySix = datasets[3].data
const twentyFive = datasets[2].data
const twentyFour = datasets[1].data
const twentyThree = datasets[0].data

const dateList =[]

//Avging months
function avgTheMonths(year) {
    let yearInsert = null
    let monthIndex = null
    const months = [
        {month: 'Jan', lst: [], avg: null},
        {month: 'Feb', lst: [], avg: null},
        {month: 'Mar', lst: [], avg: null},
        {month: 'Apr', lst: [], avg: null},
        {month: 'May', lst: [], avg: null},
        {month: 'Jun', lst: [], avg: null},
        {month: 'Jul', lst: [], avg: null},
        {month: 'Aug', lst: [], avg: null},
        {month: 'Sep', lst: [], avg: null},
        {month: 'Oct', lst: [], avg: null},
        {month: 'Nov', lst: [], avg: null},
        {month: 'Dec', lst: [], avg: null}
    ]

    year.forEach(e => {
        const month = e.x.slice(6, 7).replace('0', '') - 1
        months[month].lst.push(e.y)
    })

    months.forEach(e => {
        if (e.lst.length !== 0) {
            e.avg = e.lst.reduce((a, b) => a + b) / e.lst.length
        } else e.avg = 0
    })
    
    switch (year) {
        case twentyThree: 
            yearInsert = '2023'
            monthIndex = 0
            break
        case twentyFour: 
            yearInsert = '2024'
            monthIndex = 1
            break
        case twentyFive: 
            yearInsert = '2025'
            monthIndex = 2
            break
        case twentySix: 
            yearInsert = '2026'
            monthIndex = 3
            break
    }

    const monthUse = monthsData[monthIndex]
    monthUse.data = [
        {x: `${yearInsert}-01-15`, y: months[0].avg},
        {x: `${yearInsert}-02-15`, y: months[1].avg},
        {x: `${yearInsert}-03-15`, y: months[2].avg},
        {x: `${yearInsert}-04-15`, y: months[3].avg},
        {x: `${yearInsert}-05-15`, y: months[4].avg},
        {x: `${yearInsert}-06-15`, y: months[5].avg},
        {x: `${yearInsert}-07-15`, y: months[6].avg},
        {x: `${yearInsert}-08-15`, y: months[7].avg},
        {x: `${yearInsert}-09-15`, y: months[8].avg},
        {x: `${yearInsert}-10-15`, y: months[9].avg},
        {x: `${yearInsert}-11-15`, y: months[10].avg},
        {x: `${yearInsert}-12-15`, y: months[11].avg},
    ]
    monthUse.data = monthUse.data.filter(e => e.y !== 0)
    moodChart.update()
}
//funcs
function convertDates(date) {
    const month = date.slice(0 , 2)
    const day = date.slice(3, 5)
    const year = date.slice(-2)
    return '20' + year + '-' + month + '-' + day
}
function isDate(dateStr) {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(\d{2}|\d{4})$/
    
    if (!regex.test(dateStr)) return false

    const [month, day, year] = dateStr.split('/').map(Number)
    const fullYear = year < 100 ? 2000 + year : year

    const date = new Date(fullYear, month - 1, day)
    return date.getFullYear() === fullYear && date.getMonth() + 1 === month && date.getDate() === day
}
function sortYear(year) {
    year.sort((a, b)=> {
        if (a.x.slice(6, 7) > b.x.slice(6, 7)) return 1
        if (a.x.slice(6, 7) < b.x.slice(6, 7)) return -1
    
        if (a.x.slice(-2) > b.x.slice(-2)) return 1
        if (a.x.slice(-2) < b.x.slice(-2)) return -1
    })
}


//Event functions
function enterValueFunc() {
    avgTheMonths(twentyThree)
    const dateBox = document.getElementById('date')
    const moodBox = document.getElementById('mood')
    let date = dateBox.value
    let mood = moodBox.value
    let yearUse = null
    if (isDate(date) && mood >= -3 && mood <= 3 && mood !== '') {
        date = convertDates(date)
        const year = date.slice(0, 4)
        switch (year) {
            case '2023': {
                const index = twentyThree.findIndex(e => e.x === date);
                (index !== -1)? twentyThree[index].y = mood: twentyThree.push({x: date, y: mood})
                yearUse = twentyThree
                break
            }
            case '2024': {
                yearUse = twentyFour
                const index = twentyFour.findIndex(e => e.x === date);
                (index !== -1)? twentyFour[index].y = mood: twentyFour.push({x: date, y: mood})
                break
            }
            case '2025': {
                yearUse = twentyFive
                const index = twentyFive.findIndex(e => e.x === date);
                (index !== -1)? twentyFive[index].y = mood: twentyFive.push({x: date, y: mood})
                break
            }
            case '2026': {
                yearUse = twentySix
                const index = twentySix.findIndex(e => e.x === date);
                (index !== -1)? twentySix[index].y = mood: twentySix.push({x: date, y: mood})
                break
            }
        }
        
        sortYear(yearUse)

        dateList.push(date)
        dateBox.value = ''
        moodBox.value = ''
    }
    else {
        if (!(mood >= -3 && mood <= 3 && mood !== '')) {
            moodBox.value = 'nuh uh'
        }
        if (!isDate(date)) {
            dateBox.value = 'nuh uh'
        }
    }
    moodChart.update()
}


enterValue.addEventListener('click', ()=> {
    enterValueFunc()
})

document.addEventListener('keydown', (e)=> {
    if (e.code === 'Enter') enterValueFunc()
})
