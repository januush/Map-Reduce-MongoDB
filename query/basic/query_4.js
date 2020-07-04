// All the people with weight between <68, 71.5>
printjson( db.people.find({ weight  : { $gte : "68", $lt : "71.5"}}).toArray() )