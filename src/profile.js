import { DataStore } from '@aws-amplify/datastore';
import { UserInformation } from './models';


await DataStore.save(
    new UserInformation({
		"address": "Lorem ipsum dolor sit amet",
		"books": "Lorem ipsum dolor sit amet",
		"allergies": "Lorem ipsum dolor sit amet",
		"snacks": "Lorem ipsum dolor sit amet"
	})
);

/* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
 await DataStore.save(UserInformation.copyOf(CURRENT_ITEM, item => {
    // Update the values on {item} variable to update DataStore entry
}));