function saveToFirebase(name, title, message) {
    var dataObject = {
        name: name,
        title: title,
        message: message
    };

    firebase
        .database()
        .ref('subscription-entries')
        .push()
        .set(dataObject)
        .then(function(snapshot) {
            success(); // some success method
        })
        .catch(function(error) {
            console.log('error: ' + error);
            error(); // some error method
        });
}