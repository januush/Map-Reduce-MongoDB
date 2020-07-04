printjson( db.people.insertOne({
		"sex" : "Male",
		"first_name" : "Bartlomiej",
		"last_name" : "Janusz",
		"job" : "Software Engineer",
		"email" : "bartekk.janusz@gmail.com",
		"location" : {
			"city" : "Warsaw",
			"address" : {
				"streetname" : "Joliot-Curie",
				"streetnumber" : "19"
			}
		},
		"description" : "PJATK Student",
		"height" : "198.00",
		"weight" : "95.50",
		"birth_date" : "1996-05-31T16:10:58Z",
		"nationality" : "Poland",
		"credit" : [
			{
				"type" : "jcb",
				"number" : "1231231231237",
				"currency" : "PLN",
				"balance" : "123.12"
			}
		]
}) )