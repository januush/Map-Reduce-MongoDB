// Avg and total credit balance for polish women depending on the currency
 //   emit({sex: this.sex, nationality: this.nationality}, {count: 1});

var mapFunction = function() {
	for (var idx = 0; idx < this.credit.length; idx++) {
		var key = this.credit[idx].currency;
		var balance = Number(this.credit[idx].balance) 
		var value = { total_balance: balance, count: 1, avg: 0 };
		    emit( key, value );
	}
};

var reduceFunction = function(key, values) {
	
   var reducedObject = { total_balance: 0, count: 0, avg: 0 };

  for (var idx = 0; idx < values.length; idx++) {
       reducedObject.total_balance += values[idx].total_balance;
	   reducedObject.count += values[idx].count;
   }
   
   return reducedObject;
};

var finalizeFunction = function(key, reducedObject) {
	
   if (reducedObject.count > 0) {
	reducedObject.avg = reducedObject.total_balance / reducedObject.count;	
   }
   
   return reducedObject;
};

db.people.mapReduce(
   mapFunction,
   reduceFunction,
   {
	 query: { sex: "Female", nationality: "Poland" },
     out: { 
		merge: "session_stats_ex_15"		
	 },
	 finalize: finalizeFunction 
   }
)
printjson(db.session_stats_ex_15.find().sort( { _id: 1 } ).toArray())
