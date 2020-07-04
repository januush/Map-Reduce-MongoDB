// Replace "Moscow" with "Moskwa" 
//printjson( db.people.find({ "location.city":"Moskwa"}).toArray() )

db.people.updateMany(
{ "location.city":"Moscow" },
	{
		$set: {"location.city" : "Moskwa"}
	}
	)