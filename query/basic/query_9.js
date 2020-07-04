// Add a "hobby" property with value "pingpong" to Antonios
//printjson( db.people.find({ "first_name":"Antonio"}).toArray() )

db.people.updateMany(
{ "first_name":"Antonio" },
	{
		$set: {"hobby" : "pingpong"}
	}
	)
