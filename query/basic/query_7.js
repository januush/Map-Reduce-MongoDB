// Delete people with height > 190
printjson( db.people.remove({ height  : { $gte : "190.00"}}))