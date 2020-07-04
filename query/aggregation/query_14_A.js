// Min, Max and Avg BMI depending on the nationality
printjson(db.people.aggregate([
   {$group:
   {
       _id:"$nationality",
	   
       "avg_BMI":
        {
            $avg: {$multiply: [{$toDouble: {$divide: [{$toDouble: "$weight"}, {$multiply: [{$toDouble: "$height"},{$toDouble: "$height"}]}   ]}}, 10000]} //mnożę przez 1000, bo do wzoru idą [m]
        },
	   "max_BMI":
        {
            $max: {$multiply: [{$toDouble: {$divide: [{$toDouble: "$weight"}, {$multiply: [{$toDouble: "$height"},{$toDouble: "$height"}]}   ]}}, 10000]}
        },
		"min_BMI":
        {
            $min: {$multiply: [{$toDouble: {$divide: [{$toDouble: "$weight"}, {$multiply: [{$toDouble: "$height"},{$toDouble: "$height"}]}   ]}}, 10000]}
        }			
   }}
]).toArray()
)