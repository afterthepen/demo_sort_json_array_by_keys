let data = [
    {"Employee's Name": "Micky" ,"Age" : 24, "Hourly" : 8.15},
    {"Employee's Name": "Rick" ,"Age" : 21, "Hourly" : 6.40}, 
    {"Employee's Name": "Joe" ,"Age" : 28, "Hourly" : 5.80}, 
    {"Employee's Name": "Irene" ,"Age" : 25, "Hourly" : 9.15}, 
    {"Employee's Name": "Jane" ,"Age" : 25, "Hourly" : 9.05},
    {"Employee's Name": "Jose" ,"Age" : 41, "Hourly" : 12.41},
    {"Employee's Name": "Philip" ,"Age" : 32, "Hourly" : 9.10},
    {"Employee's Name": "Marco" ,"Age" : 33, "Hourly" : 9.15},
    {"Employee's Name": "Polo" ,"Age" : 36, "Hourly" : 7.15}
]

let result = []
let lowest_Hourly_rate = 10000000;
let highest_Hourly_rate = 0;

//FIND THE SALARY RANGE
data.forEach(item => {
    if (lowest_Hourly_rate >= item.Hourly){
        lowest_Hourly_rate = item.Hourly
    }

    if (highest_Hourly_rate <= item.Hourly){
        highest_Hourly_rate = item.Hourly
    }
})
//==================
console.log("Unsorted Table")
console.table(data)
console.log("Lowest Hourly Rate : " + lowest_Hourly_rate)
console.log("Highest Hourly Rate : " + highest_Hourly_rate)
console.log("Sort Employees by Hourly Rate from Lowest to Highest")

for (let current_rate = lowest_Hourly_rate; current_rate < highest_Hourly_rate; current_rate+= 0.01){
    data.forEach(x => {
        //If current rate matches hourly rate in record, add to results array.
        if (parseFloat(x.Hourly) === parseFloat(current_rate.toFixed(2))){
            result.push(x)
        }

    })
}
//Print sorted list to console.
console.table(result)
