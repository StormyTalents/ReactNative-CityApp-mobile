import { Platform } from 'react-native'
import { Constants } from 'Themes'

export const options = {
    title: 'Upload a clear picture',
    maxWidth: 600,
    maxHeight: 800,
    quality: 0.5,
    storageOptions: {
        skipBackup: true,
        waitUntilSaved: true,
        cameraRoll: true,
        path: 'images'
    }
}
const createFormData = (photo, body) => {
    const data = new FormData();
    data.append("File", {
        name: `${new Date().valueOf()}.jpg`,
        type: 'image/jpeg',
        uri: Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });

    Object.keys(body).forEach(key => {
        data.append(key, body[key]);
    });

    return data;
};




export const handleImageUpload = (response, username, email, token) => {
    return new Promise((resolve, reject) => {
        fetch(`${Constants.BASE_URL}/Image/UploadFiles`, {
            method: "POST",
            body: createFormData(response, { ImageName: username, Email: email, Token: token })
        })
            .then(response => response.json())
            .then(response => {
                resolve(response)
            })
            .catch(e => {
                reject(new Error(e))
            })

    })
}