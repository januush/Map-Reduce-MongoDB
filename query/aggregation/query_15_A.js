// Avg and total credit balance for polish women depending on the currency
printjson(db.people.aggregate(
[	{ $match : {
		"$and":[
		{ sex: "Female"},
		{ nationality: "Poland"}
		]
}},
	{ "$unwind": "$credit" },
	{$group: {_id: "$credit.currency", total: {$sum: {$toDouble: "$credit.balance"}}, avg: {$avg: {$toDouble: "$credit.balance"}} }}
]).toArray()
)