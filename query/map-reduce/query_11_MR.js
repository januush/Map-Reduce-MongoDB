// People's avarage weight and height depending on the sex. 
var mapFunction = function() {
    var key = this.sex;
    var value = { total_height: parseFloat(this.height), total_weight: parseFloat(this.weight), count: 1, avg_height: 0, avg_weight: 0 };

    emit( key, value );
};

var reduceFunction = function(key, values) {

   var reducedObject = { total_height: 0, total_weight: 0, count:0, avg_height:0, avg_weight: 0 };

   values.forEach(function(value) {
      reducedObject.total_height += value.total_height;
	  reducedObject.total_weight += value.total_weight;
      reducedObject.count += value.count;
   });

   return reducedObject;
};

var finalizeFunction = function(key, reducedValue) {

   if (reducedValue.count > 0)
      reducedValue.avg_height = reducedValue.total_height / reducedValue.count;
	  reducedValue.avg_weight = reducedValue.total_weight / reducedValue.count;
   return reducedValue;
};

db.people.mapReduce(
   mapFunction,
   reduceFunction,
   {
     out: "session_stats",
     finalize: finalizeFunction
   }
)
printjson(db.session_stats.find().sort( { _sex: 1 } ).toArray())
