// To polecenie znajduje zawody, które występują tylko raz w bazie.
/*printjson(db.people.aggregate(
[
	{$group: {_id: "$job", count: {$sum: 1 } }},
	{"$match": {count: {"$eq": 1}}} 
]).toArray()
)*/

// To polecenie wypisuje listę wszystkich zawodów bez powtórzeń.
printjson(db.people.distinct("job"))