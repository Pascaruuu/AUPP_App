import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime, timedelta

# Use a service account
cred = credentials.Certificate('aupp-app-firebase-adminsdk-wpq6v-9105faccaf.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

# Create datetime objects for start_time and end_time
# Note: The time has been adjusted for the UTC+7 offset
start_time = datetime.strptime('February 28, 2024 at 9:30:00 AM UTC', '%B %d, %Y at %I:%M:%S %p %Z') 
end_time = datetime.strptime('February 28, 2024 at 10:45:00 PM UTC', '%B %d, %Y at %I:%M:%S %p %Z') 

# Create a new document in the 'events' collection
doc_ref = db.collection('events').document('AUPP Law Speaker Series')
doc_ref.set({
    'end_time': end_time,
    'event_description': 'AUPP Law Speaker Series',
    'event_name': 'AUPP Law Speaker Series',
    'organizer_name': 'AUPP',
    'poster_url': 'gs://aupp-app.appspot.com/AUPP-Law-Speakers-Series-2.jpg',
    'start_time': start_time,
    'venue': 'Lecture Hall C2'
})
