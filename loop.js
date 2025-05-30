// our goal is=> ignore the string value will show only the number
const data = [10, 'invalid', 30, "Rice", 45.34]
for (let item of data){
    if (typeof item !== 'number')
    continue
    console.log(item)
    
}