import BackgroundGeolocation from 'cordova-background-geolocation-lt';

export function initiateGPSconfig() {
    BackgroundGeolocation.ready({
        locationAuthorizationRequest: 'Always',
        desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_MEDIUM,
        distanceFilter: 800,
        disableElasticity: true,
        useSignificantChangesOnly: false, // set either useSignificantChangesOnly or distanceFilter; not both
        logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
        stopOnTerminate: false,
        startOnBoot: true,
        debug: true,

        // backgroundPermissionRationale: {
        //     title: "Allow {applicationName} to access this device's location",
        //     message: "Location tracking is required so that we can automatically track the shipments, trigger workflow events on your behalf while the app is in use or backgrounded.",
        //     positiveAction: 'Change to "{backgroundPermissionOptionLabel}"',
        //     negativeAction: 'Cancel'
        // },
        allowIdenticalLocations: true, // Android only
    }).then((state) => {
        console.log("[ready] success", state);
    });
}

export function startGPStracking() {
    BackgroundGeolocation.setConfig({distanceFilter: 800, disableElasticity: true}).then(state => {
        BackgroundGeolocation.start().then((state) => {
            console.log("[start] success - ", state);
        });
    });
}

export function stopGPStracking() {
    BackgroundGeolocation.stop().then(() => {
        console.log("stop GPS tracking ");
    });
}

export function getCurrentPosition() {
    BackgroundGeolocation.getCurrentPosition({
        persist: false
    }, (location : any) => {
        console.log("location::", JSON.stringify(location));
    }, error => {
        console.log("Error::");
    });
}

