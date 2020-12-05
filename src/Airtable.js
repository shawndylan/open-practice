import react, {useState} from 'react';

const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyi2cyYWlGXpGrSW'}).base('appk1zUKf5TWFYhRM');

const AirtableData = () => {
    const [practice, setPractice] = useState(

    base('Practices')
        .select({
            view: "Gallery",
            maxRecords: 100
        })
        .eachPage((records, fetchNextPage) => {
            fetchNextPage();
            console.log(records);
        });

        );
}


export default AirtableData;