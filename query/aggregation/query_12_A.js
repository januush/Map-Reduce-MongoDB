printjson(db.people.aggregate(
[
	{ "$unwind": "$credit" },
	{$group: {_id: "$credit.currency", total: {$sum: {$toDouble: "$credit.balance"}} }}
]).toArray()
)

