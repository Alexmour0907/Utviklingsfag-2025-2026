const personer = [
    {
        navn: "Jo bjørnar Hausnes",
        alder: 75,
        yrke: "Lærer",
        lønn: 500000
    },
    {
        navn: "Hilde Anita Larsen",
        alder: 100,
        yrke: "bonde",
        lønn: 750000
    }
]

let antall=0
function sammenlignlønn(a, b){
    for (let i=0; i<a.length;i++)
    if (a[i].lønn > b){
        antall++
        console.log(a[i].lønn)
    }
}

sammenlignlønn(personer, 50)