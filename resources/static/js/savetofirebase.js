<script>
    const wishes = document.getElementById('wishesform');

    subscriptionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const title = document.getElementById('title').value;
        const message = document.getElementById('wishes').value;

        saveToFirebase(name, title, wishes);
    });

    function saveToFirebase(name, title, wishes) {
        var dataObject = {
            name: name,
            title: title,
            wishes: wishes
        };

        firebase
            .database()
            .ref('wishes-entries')
            .push()
            .set(dataObject)
            .then(function(snapshot) {
                console.log('wishes saved successfully!');
                subscriptionForm.reset();
            })
            .catch(function(error) {
                console.error('Error saving wishes:', error);
            });
    }
</script>
