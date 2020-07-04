//The total credit balance for people depending on the currency. 

var mapFunction = function() {
	for (var idx = 0; idx < this.credit.length; idx++) {
		var key = this.credit[idx].currency;
		var balance = Number(this.credit[idx].balance) 
		var value = { total_balance: balance };
		    emit( key, value );
	}
};

var reduceFunction = function(key, values) {
	
   var reducedObject = { total_balance: 0 };

  for (var idx = 0; idx < values.length; idx++) {
       reducedObject.total_balance += values[idx].total_balance;
   }
   
   return reducedObject;
};

db.people.mapReduce(
   mapFunction,
   reduceFunction,
   {
     out: { merge: "session_stats" }
   }
)
printjson(db.session_stats.find().sort( { _id: 1 } ).toArray())
