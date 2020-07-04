var mapFunction = function() {
    var key = this.job;
    var value = { count: 1};

    emit( key, value );
};

var reduceFunction = function(key, values) {

   var reducedObject = { count:0};

   values.forEach(function(value) {
      reducedObject.count += value.count;
   });
   return reducedObject;
};

var finalizeFunction = function(key, reducedValue) {

   if (reducedValue.count == 1)
   return reducedValue;
};

db.people.mapReduce(
   mapFunction,
   reduceFunction,
   {
     out: "session_stats_unique_jobs",
	 //finalize: finalizeFunction //Odkomentować, aby wypisać listę zawodów, która występuje tylko raz. 
   }
)
printjson(db.session_stats_unique_jobs.find( { value : { $ne: null }  }, { value: 0} ).toArray())