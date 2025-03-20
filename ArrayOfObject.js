const array=[{"data1":[{"name":"sanu","age":27},{"name":"bhanu","age":37},{"name":"naina","age":47}]},
{"data2":[{"name":"sanu","age":27},{"name":"bhanu","age":37},{"name":"naina","age":47}]}
]



array[1].data2.map((obj)=>console.log(`${obj.name} - ${obj.age}`)

 )
