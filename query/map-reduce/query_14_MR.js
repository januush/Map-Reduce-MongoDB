var mapFunction = function() {
    var key = this.nationality;
    var value = { count: 1, total_bmi: Number(10000 * this.weight/this.height/this.height), avg_bmi: 0, max_bmi: Number(10000 * this.weight/this.height/this.height), min_bmi: Number(10000 * this.weight/this.height/this.height) };

    emit( key, value );
};

var reduce = function (key, values) {
	return values.reduce(function reduce(previous, current, index, array) {	
		return {
			total_bmi: previous.total_bmi + current.total_bmi,
			max_bmi: Math.max(previous.max_bmi, current.max_bmi),
			min_bmi: Math.min(previous.min_bmi, current.min_bmi),
			count: previous.count + current.count,
		};
	})
}

function finalize(key, value) { 
	value.avg_bmi = value.total_bmi / value.count;
	return value;
}

db.people.mapReduce(
   mapFunction,
   reduce,
   {
     out: { merge: "session_stats_bmi" },
     finalize: finalize
   }
)
printjson(db.session_stats_bmi.find({},{ "value.count" : 0, "value.total_bmi" : 0 }).sort( { _id: 1 } ).toArray())
