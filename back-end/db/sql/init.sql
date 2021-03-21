CREATE TABLE companies(
	id           serial,
	name         text NOT NULL,
	description  text NOT NULL,
    location_id  int NOT NULL,
	date_founded timestamptz,
	date_created timestamptz DEFAULT NOW(),
	date_updated timestamptz,
    PRIMARY KEY(id),
    FOREIGN KEY (location_id) REFERENCES location(id) ON DELETE CASCADE
);

CREATE TABLE location(
	id 					serial,
	city 			    text NOT NULL,
	state 			    text NOT NULL,
	date_created		timestamptz DEFAULT NOW(),
	date_updated		timestamptz,
    PRIMARY KEY(id)
);

CREATE TABLE founder(
	id 					serial,
	full_name		    text NOT NULL,
	title 			    text NOT NULL,
	company_id			int,
	date_created		timestamptz DEFAULT NOW(),
	date_updated		timestamptz,
    PRIMARY KEY(id),
    FOREIGN KEY (company_id) REFERENCES companies(id)
);
