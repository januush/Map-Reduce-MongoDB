// Unique professions

/*printjson(db.people.aggregate(
[
	{$group: {_id: "$job", count: {$sum: 1 } }},
	{"$match": {count: {"$eq": 1}}} 
]).toArray()
)*/

printjson(db.people.distinct("job"))