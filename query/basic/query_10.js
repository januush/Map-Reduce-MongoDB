// Delete all the "Editor" with "email"
//printjson( db.people.find({ "job":"Editor"}).toArray() )

db.people.updateMany(
{ "job":"Editor" },
	{
		$unset: {"email" : 1}
	}
	)
